# Docker Deployment Guide

## 🐳 Docker Containerization

Tài liệu Viettel IDC Cloud đã được containerized với Docker để dễ dàng deployment và scaling. Container sử dụng Node.js Alpine base image với Docsify CLI để serve documentation.

## 🚀 Quick Start

### Build và Run với Docker

```bash
# Build Docker image
docker build -t viettel-idc-docs:latest .

# Run container
docker run -d -p 3001:3001 --name viettel-idc-docs-container viettel-idc-docs:latest

# Truy cập documentation
open http://localhost:3001
```

### Sử dụng Docker Compose (Recommended)

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild và restart
docker-compose up -d --build
```

## 📋 Container Specifications

### Base Image
- **OS**: Alpine Linux 3.18
- **Runtime**: Node.js 18 LTS
- **Size**: ~85MB (compressed)
- **Architecture**: Multi-platform (amd64, arm64)

### Exposed Ports
- **3001**: Docsify HTTP server
- **Health Check**: HTTP GET /

### Environment Variables
- `NODE_ENV=production`
- `PORT=3001`

### Volume Mounts
- `/app/docs`: Documentation files
- `/app/node_modules`: Node.js dependencies

## 🔧 Configuration

### Dockerfile Features

```dockerfile
# Multi-stage build for optimization
FROM node:18-alpine AS builder
FROM node:18-alpine AS production

# Global docsify-cli installation
RUN npm install -g docsify-cli

# Auto-generated index.html with features:
# - Mermaid diagram support
# - Full-text search
# - Responsive design
# - Syntax highlighting
# - Navigation sidebar/navbar
```

### Health Check

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3001 || exit 1
```

### Docker Compose Configuration

```yaml
services:
  viettel-idc-docs:
    build: .
    ports:
      - "3001:3001"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--spider", "http://localhost:3001"]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - docs-network
```

## 🛠️ Management Commands

### Container Operations

```bash
# Check container status
docker ps

# View container logs
docker logs viettel-idc-docs-container

# Execute commands in container
docker exec -it viettel-idc-docs-container sh

# Stop container
docker stop viettel-idc-docs-container

# Remove container
docker rm viettel-idc-docs-container

# Remove image
docker rmi viettel-idc-docs:latest
```

### Health Monitoring

```bash
# Check health status
docker inspect --format='{{.State.Health.Status}}' viettel-idc-docs-container

# View health check logs
docker inspect --format='{{range .State.Health.Log}}{{.Output}}{{end}}' viettel-idc-docs-container
```

## 🔄 CI/CD Integration

### GitHub Actions Example

```yaml
name: Build and Deploy Docker

on:
  push:
    branches: [main, develop]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t viettel-idc-docs:${{ github.sha }} .
      
      - name: Test container
        run: |
          docker run -d -p 3001:3001 --name test-container viettel-idc-docs:${{ github.sha }}
          sleep 10
          curl -f http://localhost:3001 || exit 1
          docker stop test-container
      
      - name: Push to registry
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push viettel-idc-docs:${{ github.sha }}
```

## 🌐 Production Deployment

### Kubernetes Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: viettel-idc-docs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: viettel-idc-docs
  template:
    metadata:
      labels:
        app: viettel-idc-docs
    spec:
      containers:
      - name: docs
        image: viettel-idc-docs:latest
        ports:
        - containerPort: 3001
        livenessProbe:
          httpGet:
            path: /
            port: 3001
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /
            port: 3001
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: viettel-idc-docs-service
spec:
  selector:
    app: viettel-idc-docs
  ports:
  - port: 80
    targetPort: 3001
  type: LoadBalancer
```

### Docker Swarm

```bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml viettel-docs

# Scale service
docker service scale viettel-docs_viettel-idc-docs=3

# Update service
docker service update --image viettel-idc-docs:new-version viettel-docs_viettel-idc-docs
```

## 🔒 Security Considerations

### Container Security

```dockerfile
# Run as non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S docsify -u 1001
USER docsify

# Read-only filesystem
docker run --read-only --tmpfs /tmp viettel-idc-docs:latest

# Security scanning
docker scan viettel-idc-docs:latest
```

### Network Security

```bash
# Custom network
docker network create --driver bridge viettel-docs-network

# Run with custom network
docker run -d --network viettel-docs-network viettel-idc-docs:latest

# Firewall rules
ufw allow from 10.0.0.0/8 to any port 3001
ufw deny 3001
```

## 📊 Monitoring & Logging

### Prometheus Metrics

```yaml
# docker-compose.monitoring.yml
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
```

### Log Aggregation

```bash
# Centralized logging with ELK
docker run -d \
  --log-driver=fluentd \
  --log-opt fluentd-address=localhost:24224 \
  --log-opt tag="docker.viettel-docs" \
  viettel-idc-docs:latest
```

## 🚨 Troubleshooting

### Common Issues

#### Container won't start
```bash
# Check logs
docker logs viettel-idc-docs-container

# Check resource usage
docker stats viettel-idc-docs-container

# Inspect container
docker inspect viettel-idc-docs-container
```

#### Port conflicts
```bash
# Check port usage
netstat -tulpn | grep 3001
lsof -i :3001

# Use different port
docker run -p 3002:3001 viettel-idc-docs:latest
```

#### Health check failures
```bash
# Manual health check
docker exec viettel-idc-docs-container wget --spider http://localhost:3001

# Check docsify process
docker exec viettel-idc-docs-container ps aux | grep docsify
```

### Performance Tuning

```bash
# Increase memory limit
docker run -m 512m viettel-idc-docs:latest

# CPU limits
docker run --cpus="1.5" viettel-idc-docs:latest

# Optimize for production
docker run \
  --restart=unless-stopped \
  --memory=256m \
  --cpus="0.5" \
  -p 3001:3001 \
  viettel-idc-docs:latest
```

## 📞 Support

- **Container Issues**: support@viettelidc.com.vn
- **Documentation**: [Main README](README.md)
- **Docker Hub**: [viettel-idc-docs](https://hub.docker.com/r/viettelidc/docs)
- **GitHub**: [Issues](https://github.com/idist-hn/docsify/issues)

## 🔄 Updates

```bash
# Pull latest changes
git pull origin develop

# Rebuild image
docker build -t viettel-idc-docs:latest .

# Rolling update
docker-compose up -d --no-deps --build viettel-idc-docs
```
