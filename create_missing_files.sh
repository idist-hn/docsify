#!/bin/bash

# Script to create missing documentation files
# This script creates basic overview files for all services listed in sidebar

# Create directories if they don't exist
mkdir -p docs/cloud/voks
mkdir -p docs/cloud/vdbs
mkdir -p docs/security
mkdir -p docs/monitoring
mkdir -p docs/network
mkdir -p docs/datacenter
mkdir -p docs/enterprise
mkdir -p docs/tools
mkdir -p docs/guides
mkdir -p docs/support

# Function to create a basic file with template content
create_file() {
    local filepath="$1"
    local title="$2"
    local description="$3"
    
    if [ ! -f "$filepath" ]; then
        cat > "$filepath" << EOF
# $title

## Giới thiệu

$description

## Tính năng chính

### 🚀 Hiệu năng cao
- Hiệu năng vượt trội cho mọi workload
- Tối ưu hóa tài nguyên tự động
- Khả năng mở rộng linh hoạt

### 🔒 Bảo mật
- Bảo mật đa lớp
- Mã hóa dữ liệu
- Kiểm soát truy cập

### 📊 Giám sát
- Giám sát real-time
- Cảnh báo thông minh
- Báo cáo chi tiết

## Use Cases

- Doanh nghiệp vừa và nhỏ
- Tập đoàn lớn
- Cơ quan nhà nước
- Tổ chức giáo dục

## Pricing

Liên hệ để được tư vấn giá cả phù hợp với nhu cầu của bạn.

## Getting Started

1. Đăng ký tài khoản tại [portal.viettelidc.com.vn](https://portal.viettelidc.com.vn)
2. Chọn gói dịch vụ phù hợp
3. Cấu hình theo yêu cầu
4. Triển khai và sử dụng

## Liên hệ hỗ trợ

- **Hotline**: 1900 8000
- **Email**: support@viettelidc.com.vn
- **Portal**: [portal.viettelidc.com.vn](https://portal.viettelidc.com.vn)

EOF
        echo "Created: $filepath"
    else
        echo "File already exists: $filepath"
    fi
}

# Cloud Server files
create_file "docs/cloud/dedicated-private-cloud.md" "Dedicated Private Cloud" "Giải pháp Private Cloud chuyên dụng với hạ tầng hoàn toàn độc lập, phù hợp cho các doanh nghiệp có yêu cầu cao về bảo mật và hiệu năng."

create_file "docs/cloud/virtual-private-cloud.md" "Virtual Private Cloud" "Mạng riêng ảo cung cấp môi trường cloud cô lập logic với khả năng tùy chỉnh cao và bảo mật tốt."

# Cloud Storage files
create_file "docs/cloud/vstorage.md" "vStorage" "Dịch vụ lưu trữ đối tượng tương thích S3, cung cấp khả năng lưu trữ không giới hạn với độ bền cao và chi phí tối ưu."

create_file "docs/cloud/object-storage.md" "Object Storage" "Lưu trữ đối tượng quy mô lớn cho dữ liệu phi cấu trúc, phù hợp cho backup, archiving và content distribution."

create_file "docs/cloud/block-storage.md" "Block Storage" "Lưu trữ khối hiệu năng cao có thể gắn vào máy chủ ảo, phù hợp cho database và ứng dụng I/O intensive."

create_file "docs/cloud/file-storage.md" "File Storage" "Hệ thống file chia sẻ qua mạng, hỗ trợ NFS và CIFS cho việc chia sẻ dữ liệu giữa nhiều server."

create_file "docs/cloud/backup-storage.md" "Backup Storage" "Giải pháp sao lưu tự động với khả năng khôi phục nhanh chóng và lưu trữ dài hạn."

# Container & Orchestration files
create_file "docs/cloud/vcontainer.md" "vContainer" "Nền tảng container hóa dựa trên Docker, cung cấp môi trường triển khai ứng dụng linh hoạt và hiệu quả."

# vOKS sub-files
create_file "docs/cloud/voks/create-cluster.md" "Tạo Kubernetes Cluster" "Hướng dẫn tạo và cấu hình Kubernetes cluster trên nền tảng vOKS."

create_file "docs/cloud/voks/manage-nodes.md" "Quản lý Node" "Hướng dẫn quản lý worker nodes trong Kubernetes cluster."

create_file "docs/cloud/voks/deploy-apps.md" "Triển khai ứng dụng" "Hướng dẫn deploy ứng dụng lên Kubernetes cluster."

create_file "docs/cloud/voks/monitoring.md" "Giám sát và Log" "Giám sát hiệu năng và quản lý log cho Kubernetes cluster."

# vDBS sub-files
create_file "docs/cloud/vdbs/mysql.md" "MySQL" "Dịch vụ MySQL được quản lý hoàn toàn với high availability và automatic backup."

create_file "docs/cloud/vdbs/postgresql.md" "PostgreSQL" "PostgreSQL managed service với advanced features và enterprise-grade security."

create_file "docs/cloud/vdbs/mongodb.md" "MongoDB" "NoSQL database service với horizontal scaling và flexible schema."

create_file "docs/cloud/vdbs/redis.md" "Redis" "In-memory data structure store cho caching và real-time applications."

create_file "docs/cloud/vdbs/create-database.md" "Tạo Database" "Hướng dẫn tạo và cấu hình database instances."

create_file "docs/cloud/vdbs/backup-restore.md" "Sao lưu và Khôi phục" "Quản lý backup và restore procedures cho databases."

create_file "docs/cloud/vdbs/configure-replica.md" "Cấu hình Replica" "Thiết lập database replication cho high availability."

create_file "docs/cloud/vdbs/security.md" "Bảo mật Database" "Best practices và security configurations cho database services."

# CloudWatch sub-files
create_file "docs/cloud/cloudwatch/set-alerts.md" "Thiết lập Cảnh báo" "Cấu hình alerts và notifications cho monitoring metrics."

create_file "docs/cloud/cloudwatch/manage-logs.md" "Quản lý Log" "Centralized logging và log analysis với CloudWatch."

create_file "docs/cloud/cloudwatch/analyze-metrics.md" "Phân tích Metrics" "Advanced metrics analysis và performance optimization."

echo "All missing files have been created!"
