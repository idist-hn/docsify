import docsifyInit from '../helpers/docsify-init.js';

// Tools Pages Tests
// -----------------------------------------------------------------------------
describe('Tools Pages', () => {
  // API Documentation
  // ---------------------------------------------------------------------------
  describe('API Documentation', () => {
    test('renders API documentation page with endpoints', async () => {
      const apiDocumentationContent = `
        # API Documentation - Tài liệu API
        
        ## Giới thiệu
        REST API đầy đủ để quản lý tài nguyên cloud và tự động hóa operations.
        
        ## Authentication
        ### API Key Authentication
        - **API Key** trong header Authorization
        - **Rate limiting** 1000 requests/hour
        - **IP whitelisting** danh sách IP cho phép
        - **Token expiration** hết hạn token sau 24h
        
        ### OAuth 2.0
        - **Authorization Code** flow chuẩn
        - **Client Credentials** cho server-to-server
        - **Refresh Token** làm mới token
        - **Scope-based access** truy cập theo phạm vi
        
        ## Core Endpoints
        | Resource | Method | Endpoint | Description |
        |----------|--------|----------|-------------|
        | Servers | GET | /api/v1/servers | List all servers |
        | Servers | POST | /api/v1/servers | Create new server |
        | Servers | GET | /api/v1/servers/{id} | Get server details |
        | Servers | PUT | /api/v1/servers/{id} | Update server |
        | Servers | DELETE | /api/v1/servers/{id} | Delete server |
        
        ## Server Management API
        ### 🖥️ Server Operations
        \`\`\`json
        // Create Server Request
        {
          "name": "web-server-01",
          "flavor": "c4.large",
          "image": "ubuntu-20.04",
          "network": "default",
          "security_groups": ["web", "ssh"]
        }
        \`\`\`
        
        ### 📊 Monitoring API
        \`\`\`json
        // Get Server Metrics
        {
          "server_id": "srv-123456",
          "metrics": ["cpu", "memory", "disk", "network"],
          "period": "1h",
          "start_time": "2024-01-01T00:00:00Z"
        }
        \`\`\`
        
        ## Storage API
        ### 💾 Volume Management
        - **Create volume** tạo volume
        - **Attach/detach** gắn/tháo volume
        - **Snapshot management** quản lý snapshot
        - **Backup operations** thao tác sao lưu
        
        ### 📁 Object Storage
        - **Bucket operations** thao tác bucket
        - **Object upload/download** tải lên/xuống object
        - **Access control** kiểm soát truy cập
        - **Lifecycle management** quản lý vòng đời
        
        ## Network API
        ### 🌐 Network Resources
        - **VPC management** quản lý VPC
        - **Subnet operations** thao tác subnet
        - **Security groups** nhóm bảo mật
        - **Load balancers** cân bằng tải
        
        ## Error Handling
        ### HTTP Status Codes
        | Code | Status | Description |
        |------|--------|-------------|
        | 200 | OK | Request successful |
        | 201 | Created | Resource created |
        | 400 | Bad Request | Invalid request |
        | 401 | Unauthorized | Authentication required |
        | 403 | Forbidden | Access denied |
        | 404 | Not Found | Resource not found |
        | 429 | Too Many Requests | Rate limit exceeded |
        | 500 | Internal Server Error | Server error |
        
        ## SDKs and Libraries
        ### Official SDKs
        - **Python SDK** thư viện Python
        - **Node.js SDK** thư viện Node.js
        - **Go SDK** thư viện Go
        - **Java SDK** thư viện Java
        
        ### Community Libraries
        - **PHP Library** thư viện PHP
        - **Ruby Gem** gem Ruby
        - **C# Library** thư viện C#
        - **.NET Core** hỗ trợ .NET Core
      `;

      await docsifyInit({
        markdown: {
          homepage: apiDocumentationContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain('API Documentation');
      expect(mainContent.textContent).toContain('REST API');
      
      // Check authentication methods
      expect(mainContent.textContent).toContain('API Key Authentication');
      expect(mainContent.textContent).toContain('OAuth 2.0');
      expect(mainContent.textContent).toContain('Rate limiting');
      
      // Check endpoints table
      const tables = mainContent.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(2);
      expect(mainContent.textContent).toContain('/api/v1/servers');
      expect(mainContent.textContent).toContain('GET');
      expect(mainContent.textContent).toContain('POST');
      
      // Check code examples
      expect(mainContent.textContent).toContain('web-server-01');
      expect(mainContent.textContent).toContain('ubuntu-20.04');
      
      // Check API categories
      expect(mainContent.textContent).toContain('Server Management API');
      expect(mainContent.textContent).toContain('Storage API');
      expect(mainContent.textContent).toContain('Network API');
      
      // Check SDKs
      expect(mainContent.textContent).toContain('Python SDK');
      expect(mainContent.textContent).toContain('Node.js SDK');
    });
  });

  // CLI Tools
  // ---------------------------------------------------------------------------
  describe('CLI Tools', () => {
    test('renders CLI tools page with commands', async () => {
      const cliToolsContent = `
        # CLI Tools - Command Line Interface
        
        ## Giới thiệu
        Command line interface để quản lý tài nguyên cloud từ terminal.
        
        ## Installation
        ### Package Managers
        \`\`\`bash
        # Install via pip
        pip install viettel-cloud-cli
        
        # Install via npm
        npm install -g @viettel/cloud-cli
        
        # Install via homebrew (macOS)
        brew install viettel-cloud-cli
        
        # Install via apt (Ubuntu/Debian)
        apt install viettel-cloud-cli
        \`\`\`
        
        ### Binary Downloads
        - **Linux x64** binary cho Linux
        - **macOS x64** binary cho macOS
        - **Windows x64** binary cho Windows
        - **ARM64** binary cho ARM processors
        
        ## Configuration
        ### Authentication Setup
        \`\`\`bash
        # Configure API credentials
        vcloud configure
        
        # Set specific profile
        vcloud configure --profile production
        
        # List configured profiles
        vcloud configure list
        \`\`\`
        
        ## Server Commands
        | Command | Description | Example |
        |---------|-------------|---------|
        | vcloud server list | List all servers | vcloud server list |
        | vcloud server create | Create new server | vcloud server create --name web01 |
        | vcloud server show | Show server details | vcloud server show srv-123 |
        | vcloud server start | Start server | vcloud server start srv-123 |
        | vcloud server stop | Stop server | vcloud server stop srv-123 |
        | vcloud server delete | Delete server | vcloud server delete srv-123 |
        
        ## Storage Commands
        ### Volume Management
        \`\`\`bash
        # Create volume
        vcloud volume create --name data-vol --size 100GB
        
        # Attach volume to server
        vcloud volume attach vol-123 srv-456
        
        # Create snapshot
        vcloud snapshot create vol-123 --name backup-2024
        \`\`\`
        
        ### Object Storage
        \`\`\`bash
        # Create bucket
        vcloud bucket create my-bucket
        
        # Upload file
        vcloud object upload my-bucket local-file.txt
        
        # Download file
        vcloud object download my-bucket remote-file.txt
        \`\`\`
        
        ## Network Commands
        ### VPC Management
        \`\`\`bash
        # Create VPC
        vcloud vpc create --name production --cidr 10.0.0.0/16
        
        # Create subnet
        vcloud subnet create --vpc vpc-123 --cidr 10.0.1.0/24
        
        # Create security group
        vcloud sg create --name web --description "Web servers"
        \`\`\`
        
        ## Monitoring Commands
        ### Metrics and Logs
        \`\`\`bash
        # Get server metrics
        vcloud metrics get srv-123 --metric cpu --period 1h
        
        # View logs
        vcloud logs show srv-123 --lines 100
        
        # Set up alerts
        vcloud alert create --resource srv-123 --metric cpu --threshold 80
        \`\`\`
        
        ## Advanced Features
        ### 🔧 Automation
        - **Bash completion** tự động hoàn thành
        - **JSON output** đầu ra JSON
        - **Scripting support** hỗ trợ scripting
        - **Bulk operations** thao tác hàng loạt
        
        ### 📊 Output Formats
        - **Table format** định dạng bảng
        - **JSON format** định dạng JSON
        - **YAML format** định dạng YAML
        - **CSV format** định dạng CSV
      `;

      await docsifyInit({
        markdown: {
          homepage: cliToolsContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('CLI Tools');
      expect(mainContent.textContent).toContain('Command Line Interface');
      
      // Check installation methods
      expect(mainContent.textContent).toContain('pip install');
      expect(mainContent.textContent).toContain('npm install');
      expect(mainContent.textContent).toContain('brew install');
      
      // Check configuration
      expect(mainContent.textContent).toContain('vcloud configure');
      expect(mainContent.textContent).toContain('Authentication Setup');
      
      // Check commands table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('vcloud server list');
      expect(mainContent.textContent).toContain('vcloud server create');
      
      // Check code examples
      expect(mainContent.textContent).toContain('vcloud volume create');
      expect(mainContent.textContent).toContain('vcloud bucket create');
      expect(mainContent.textContent).toContain('vcloud vpc create');
      
      // Check advanced features
      expect(mainContent.textContent).toContain('Automation');
      expect(mainContent.textContent).toContain('Output Formats');
      expect(mainContent.textContent).toContain('JSON output');
    });
  });

  // SDK Documentation
  // ---------------------------------------------------------------------------
  describe('SDK Documentation', () => {
    test('renders SDK page with multiple languages', async () => {
      const sdkContent = `
        # SDK - Software Development Kit
        
        ## Giới thiệu
        Official SDKs để tích hợp Viettel IDC Cloud vào ứng dụng của bạn.
        
        ## Supported Languages
        ### Python SDK
        \`\`\`python
        # Installation
        pip install viettel-cloud-sdk
        
        # Basic usage
        from viettel_cloud import Client
        
        client = Client(api_key='your-api-key')
        servers = client.servers.list()
        
        # Create server
        server = client.servers.create(
            name='web-server',
            flavor='c4.large',
            image='ubuntu-20.04'
        )
        \`\`\`
        
        ### Node.js SDK
        \`\`\`javascript
        // Installation
        npm install @viettel/cloud-sdk
        
        // Basic usage
        const { ViettelCloud } = require('@viettel/cloud-sdk');
        
        const client = new ViettelCloud({
          apiKey: 'your-api-key'
        });
        
        // List servers
        const servers = await client.servers.list();
        
        // Create server
        const server = await client.servers.create({
          name: 'web-server',
          flavor: 'c4.large',
          image: 'ubuntu-20.04'
        });
        \`\`\`
        
        ## SDK Features
        | Feature | Python | Node.js | Go | Java |
        |---------|--------|---------|----|----- |
        | Server Management | ✅ | ✅ | ✅ | ✅ |
        | Storage Operations | ✅ | ✅ | ✅ | ✅ |
        | Network Management | ✅ | ✅ | ✅ | ✅ |
        | Monitoring | ✅ | ✅ | ✅ | ✅ |
        | Async Support | ✅ | ✅ | ✅ | ✅ |
        | Type Safety | ✅ | ✅ | ✅ | ✅ |
        
        ## Go SDK
        \`\`\`go
        // Installation
        go get github.com/viettel-idc/cloud-sdk-go
        
        // Basic usage
        package main
        
        import (
            "context"
            "github.com/viettel-idc/cloud-sdk-go/client"
        )
        
        func main() {
            client := client.New("your-api-key")
            
            // List servers
            servers, err := client.Servers.List(context.Background())
            if err != nil {
                panic(err)
            }
        }
        \`\`\`
        
        ### Java SDK
        \`\`\`java
        // Maven dependency
        <dependency>
            <groupId>com.viettel.idc</groupId>
            <artifactId>cloud-sdk</artifactId>
            <version>1.0.0</version>
        </dependency>
        
        // Basic usage
        import com.viettel.idc.cloud.Client;
        import com.viettel.idc.cloud.models.Server;
        
        Client client = new Client("your-api-key");
        
        // List servers
        List<Server> servers = client.servers().list();
        
        // Create server
        Server server = client.servers().create(
            Server.builder()
                .name("web-server")
                .flavor("c4.large")
                .image("ubuntu-20.04")
                .build()
        );
        \`\`\`
        
        ## Error Handling
        ### Exception Types
        - **AuthenticationError** lỗi xác thực
        - **ValidationError** lỗi xác thực dữ liệu
        - **ResourceNotFoundError** không tìm thấy tài nguyên
        - **RateLimitError** vượt quá giới hạn
        - **ServerError** lỗi máy chủ
        
        ## Best Practices
        ### 🔒 Security
        - **Environment variables** biến môi trường cho API key
        - **Token rotation** xoay vòng token
        - **Least privilege** quyền tối thiểu
        - **Audit logging** ghi log kiểm toán
        
        ### ⚡ Performance
        - **Connection pooling** pool kết nối
        - **Request batching** gộp request
        - **Caching strategies** chiến lược cache
        - **Async operations** thao tác bất đồng bộ
      `;

      await docsifyInit({
        markdown: {
          homepage: sdkContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('SDK');
      expect(mainContent.textContent).toContain('Software Development Kit');
      
      // Check supported languages
      expect(mainContent.textContent).toContain('Python SDK');
      expect(mainContent.textContent).toContain('Node.js SDK');
      expect(mainContent.textContent).toContain('Go SDK');
      expect(mainContent.textContent).toContain('Java SDK');
      
      // Check code examples
      expect(mainContent.textContent).toContain('pip install viettel-cloud-sdk');
      expect(mainContent.textContent).toContain('npm install @viettel/cloud-sdk');
      expect(mainContent.textContent).toContain('go get github.com');
      
      // Check features table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Server Management');
      expect(mainContent.textContent).toContain('Storage Operations');
      
      // Check error handling
      expect(mainContent.textContent).toContain('AuthenticationError');
      expect(mainContent.textContent).toContain('ValidationError');
      
      // Check best practices
      expect(mainContent.textContent).toContain('Security');
      expect(mainContent.textContent).toContain('Performance');
      expect(mainContent.textContent).toContain('Environment variables');
    });
  });

  // Terraform Provider
  // ---------------------------------------------------------------------------
  describe('Terraform Provider', () => {
    test('renders Terraform provider page with resources', async () => {
      const terraformContent = `
        # Terraform Provider - Infrastructure as Code
        
        ## Giới thiệu
        Terraform provider để quản lý infrastructure Viettel IDC Cloud as code.
        
        ## Installation
        ### Provider Configuration
        \`\`\`hcl
        terraform {
          required_providers {
            viettelcloud = {
              source  = "viettel-idc/viettelcloud"
              version = "~> 1.0"
            }
          }
        }
        
        provider "viettelcloud" {
          api_key = var.viettel_api_key
          region  = "hanoi"
        }
        \`\`\`
        
        ## Supported Resources
        | Resource | Type | Description |
        |----------|------|-------------|
        | viettelcloud_server | Compute | Virtual server instance |
        | viettelcloud_volume | Storage | Block storage volume |
        | viettelcloud_network | Network | Virtual network |
        | viettelcloud_security_group | Security | Security group rules |
        | viettelcloud_load_balancer | Network | Load balancer |
        | viettelcloud_database | Database | Managed database |
        
        ## Server Resource
        \`\`\`hcl
        resource "viettelcloud_server" "web" {
          name               = "web-server-01"
          flavor             = "c4.large"
          image              = "ubuntu-20.04"
          availability_zone  = "hanoi-1a"
          
          network {
            uuid = viettelcloud_network.main.id
          }
          
          security_groups = [
            viettelcloud_security_group.web.name
          ]
          
          user_data = file("cloud-init.yaml")
          
          tags = {
            Environment = "production"
            Project     = "web-app"
          }
        }
        \`\`\`
        
        ## Network Resources
        ### VPC and Subnets
        \`\`\`hcl
        resource "viettelcloud_network" "main" {
          name = "production-network"
          cidr = "10.0.0.0/16"
          
          tags = {
            Environment = "production"
          }
        }
        
        resource "viettelcloud_subnet" "web" {
          name       = "web-subnet"
          network_id = viettelcloud_network.main.id
          cidr       = "10.0.1.0/24"
          
          allocation_pools {
            start = "10.0.1.10"
            end   = "10.0.1.200"
          }
        }
        \`\`\`
        
        ## Storage Resources
        ### Volume and Attachments
        \`\`\`hcl
        resource "viettelcloud_volume" "data" {
          name              = "data-volume"
          size              = 100
          volume_type       = "ssd"
          availability_zone = "hanoi-1a"
        }
        
        resource "viettelcloud_volume_attachment" "data" {
          volume_id   = viettelcloud_volume.data.id
          instance_id = viettelcloud_server.web.id
          device      = "/dev/vdb"
        }
        \`\`\`
        
        ## Data Sources
        ### Available Images and Flavors
        \`\`\`hcl
        data "viettelcloud_images" "ubuntu" {
          name_regex = "ubuntu-20.04"
          most_recent = true
        }
        
        data "viettelcloud_flavors" "compute" {
          vcpus_min = 2
          ram_min   = 4096
        }
        \`\`\`
        
        ## Best Practices
        ### 🏗️ Infrastructure Organization
        - **Module structure** cấu trúc module
        - **Environment separation** tách biệt môi trường
        - **State management** quản lý state
        - **Version control** kiểm soát phiên bản
        
        ### 🔒 Security
        - **Sensitive variables** biến nhạy cảm
        - **Remote state** state từ xa
        - **Access controls** kiểm soát truy cập
        - **Encryption** mã hóa
        
        ### 📊 Monitoring
        - **Resource tagging** gắn thẻ tài nguyên
        - **Cost tracking** theo dõi chi phí
        - **Compliance checks** kiểm tra tuân thủ
        - **Drift detection** phát hiện drift
      `;

      await docsifyInit({
        markdown: {
          homepage: terraformContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Terraform Provider');
      expect(mainContent.textContent).toContain('Infrastructure as Code');
      
      // Check installation
      expect(mainContent.textContent).toContain('Provider Configuration');
      expect(mainContent.textContent).toContain('viettel-idc/viettelcloud');
      
      // Check resources table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('viettelcloud_server');
      expect(mainContent.textContent).toContain('viettelcloud_volume');
      expect(mainContent.textContent).toContain('viettelcloud_network');
      
      // Check code examples
      expect(mainContent.textContent).toContain('resource "viettelcloud_server"');
      expect(mainContent.textContent).toContain('web-server-01');
      expect(mainContent.textContent).toContain('ubuntu-20.04');
      
      // Check best practices
      expect(mainContent.textContent).toContain('Infrastructure Organization');
      expect(mainContent.textContent).toContain('Security');
      expect(mainContent.textContent).toContain('Monitoring');
    });
  });

  // Monitoring Tools
  // ---------------------------------------------------------------------------
  describe('Monitoring Tools', () => {
    test('renders monitoring tools page with integrations', async () => {
      const monitoringToolsContent = `
        # Monitoring Tools - Công cụ giám sát
        
        ## Giới thiệu
        Bộ công cụ giám sát tích hợp để theo dõi infrastructure và applications.
        
        ## Native Monitoring
        ### Viettel Cloud Monitor
        - **Real-time dashboards** dashboard thời gian thực
        - **Custom metrics** số liệu tùy chỉnh
        - **Alert management** quản lý cảnh báo
        - **Historical data** dữ liệu lịch sử
        
        ### Agent-based Monitoring
        - **System metrics** số liệu hệ thống
        - **Application metrics** số liệu ứng dụng
        - **Log collection** thu thập log
        - **Custom plugins** plugin tùy chỉnh
        
        ## Third-party Integrations
        | Tool | Type | Integration Method | Features |
        |------|------|-------------------|----------|
        | Prometheus | Metrics | API/Agent | Time-series DB |
        | Grafana | Visualization | Data source | Dashboards |
        | Datadog | APM | Agent | Full-stack monitoring |
        | New Relic | APM | Agent | Application performance |
        | Elastic Stack | Logs | Beats/Logstash | Log analysis |
        | Splunk | SIEM | Forwarder | Security monitoring |
        
        ## Prometheus Integration
        ### Configuration
        \`\`\`yaml
        # prometheus.yml
        global:
          scrape_interval: 15s
        
        scrape_configs:
          - job_name: 'viettel-cloud'
            static_configs:
              - targets: ['monitoring.viettelidc.com.vn:9090']
            bearer_token: 'your-api-token'
            
          - job_name: 'node-exporter'
            static_configs:
              - targets: ['server1:9100', 'server2:9100']
        \`\`\`
        
        ### Custom Metrics
        \`\`\`python
        # Python client example
        from prometheus_client import Counter, Histogram, start_http_server
        
        REQUEST_COUNT = Counter('app_requests_total', 'Total requests')
        REQUEST_LATENCY = Histogram('app_request_duration_seconds', 'Request latency')
        
        @REQUEST_LATENCY.time()
        def process_request():
            REQUEST_COUNT.inc()
            # Your application logic
        \`\`\`
        
        ## Grafana Dashboards
        ### Pre-built Dashboards
        - **Infrastructure overview** tổng quan hạ tầng
        - **Server performance** hiệu suất máy chủ
        - **Network monitoring** giám sát mạng
        - **Application metrics** số liệu ứng dụng
        
        ### Custom Dashboards
        \`\`\`json
        {
          "dashboard": {
            "title": "Viettel Cloud Overview",
            "panels": [
              {
                "title": "CPU Usage",
                "type": "graph",
                "targets": [
                  {
                    "expr": "100 - (avg(irate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)"
                  }
                ]
              }
            ]
          }
        }
        \`\`\`
        
        ## Log Management Tools
        ### ELK Stack Integration
        \`\`\`yaml
        # filebeat.yml
        filebeat.inputs:
        - type: log
          paths:
            - /var/log/app/*.log
          fields:
            service: web-app
            environment: production
            
        output.elasticsearch:
          hosts: ["elasticsearch:9200"]
          index: "viettel-cloud-logs-%{+yyyy.MM.dd}"
        \`\`\`
        
        ### Fluentd Configuration
        \`\`\`ruby
        # fluent.conf
        <source>
          @type tail
          path /var/log/app/*.log
          pos_file /var/log/fluentd/app.log.pos
          tag app.logs
          format json
        </source>
        
        <match app.logs>
          @type elasticsearch
          host elasticsearch
          port 9200
          index_name viettel-cloud-logs
        </match>
        \`\`\`
        
        ## APM Tools
        ### Application Performance
        - **Response time tracking** theo dõi thời gian phản hồi
        - **Error rate monitoring** giám sát tỷ lệ lỗi
        - **Throughput analysis** phân tích thông lượng
        - **Database query performance** hiệu suất truy vấn DB
        
        ### Distributed Tracing
        - **Request flow tracking** theo dõi luồng request
        - **Service dependency mapping** lập bản đồ phụ thuộc dịch vụ
        - **Performance bottleneck identification** nhận dạng nút thắt
        - **Error propagation analysis** phân tích lan truyền lỗi
      `;

      await docsifyInit({
        markdown: {
          homepage: monitoringToolsContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Monitoring Tools');
      expect(mainContent.textContent).toContain('công cụ giám sát');
      
      // Check native monitoring
      expect(mainContent.textContent).toContain('Viettel Cloud Monitor');
      expect(mainContent.textContent).toContain('Agent-based Monitoring');
      
      // Check integrations table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Prometheus');
      expect(mainContent.textContent).toContain('Grafana');
      expect(mainContent.textContent).toContain('Datadog');
      
      // Check configuration examples
      expect(mainContent.textContent).toContain('prometheus.yml');
      expect(mainContent.textContent).toContain('scrape_interval');
      expect(mainContent.textContent).toContain('filebeat.yml');
      
      // Check APM features
      expect(mainContent.textContent).toContain('Application Performance');
      expect(mainContent.textContent).toContain('Distributed Tracing');
      expect(mainContent.textContent).toContain('Response time tracking');
    });
  });
});
