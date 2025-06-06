# vOKS - Viettel Orchestrated Kubernetes Service

## Giới thiệu

vOKS (Viettel Orchestrated Kubernetes Service) là dịch vụ Kubernetes được quản lý hoàn toàn bởi Viettel IDC, giúp khách hàng triển khai, quản lý và mở rộng các ứng dụng container hóa một cách dễ dàng và hiệu quả. Với vOKS, bạn không cần phải lo lắng về việc cài đặt, vận hành và bảo trì cơ sở hạ tầng Kubernetes phức tạp.

![vOKS Overview](../media/cloud/voks-overview.png?v=1.0 ':size=700')

## Tính năng chính

### Quản lý tự động

- **Triển khai nhanh chóng**: Tạo cluster Kubernetes chỉ trong vài phút
- **Tự động cập nhật**: Hệ thống tự động cập nhật phiên bản Kubernetes mới nhất
- **Tự động khắc phục**: Phát hiện và thay thế các node lỗi
- **Tự động mở rộng**: Tự động điều chỉnh số lượng node theo tải

### Tích hợp đầy đủ

- **Tích hợp với hệ sinh thái Viettel IDC Cloud**: Kết nối liền mạch với vServer, vStorage và các dịch vụ khác
- **Hỗ trợ nhiều phiên bản Kubernetes**: Lựa chọn phiên bản phù hợp với nhu cầu của bạn
- **Tích hợp với các công cụ CI/CD**: Jenkins, GitLab CI, GitHub Actions...

### Bảo mật cao cấp

- **Mạng riêng ảo**: Mỗi cluster được cô lập trong mạng riêng
- **Mã hóa dữ liệu**: Mã hóa dữ liệu trong quá trình truyền tải và lưu trữ
- **Kiểm soát truy cập**: Quản lý quyền truy cập chi tiết với RBAC
- **Chứng chỉ TLS**: Tự động quản lý và cập nhật chứng chỉ TLS

### Giám sát và ghi log

- **Giám sát tích hợp**: Theo dõi hiệu suất cluster với Prometheus
- **Trực quan hóa**: Dashboard Kubernetes và Grafana
- **Quản lý log tập trung**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Cảnh báo**: Thiết lập cảnh báo tự động khi phát hiện vấn đề

## Lợi ích

- **Tiết kiệm chi phí**: Không cần đầu tư vào cơ sở hạ tầng và nhân sự quản lý Kubernetes
- **Tăng tốc phát triển**: Tập trung vào phát triển ứng dụng thay vì quản lý cơ sở hạ tầng
- **Độ tin cậy cao**: SLA cam kết 99.95% uptime
- **Khả năng mở rộng**: Dễ dàng mở rộng theo nhu cầu kinh doanh
- **Hỗ trợ chuyên nghiệp**: Đội ngũ kỹ thuật 24/7 với chuyên môn về Kubernetes

## Trường hợp sử dụng

- **Microservices**: Triển khai và quản lý kiến trúc microservices
- **DevOps**: Tự động hóa quy trình CI/CD
- **Ứng dụng có tải cao**: Tự động mở rộng theo nhu cầu
- **Phát triển và kiểm thử**: Môi trường phát triển và kiểm thử đồng nhất
- **Machine Learning**: Triển khai các workload ML/AI

## Bắt đầu sử dụng

### Yêu cầu

- Tài khoản Viettel IDC Cloud
- Kiến thức cơ bản về Kubernetes và container

### Tạo cluster vOKS đầu tiên

1. Đăng nhập vào [Cloud Management Platform](https://portal.viettelidc.com.vn/)
2. Chọn dịch vụ vOKS
3. Nhấp vào "Tạo Cluster"
4. Cấu hình cluster:
   - Chọn phiên bản Kubernetes
   - Cấu hình node (số lượng, loại máy, dung lượng lưu trữ)
   - Thiết lập mạng
   - Cấu hình bảo mật
5. Xác nhận và tạo cluster

Sau khi cluster được tạo thành công, bạn có thể tải file kubeconfig và bắt đầu triển khai ứng dụng của mình.

## Giá cước

vOKS được tính phí dựa trên các thành phần sau:

- **Control Plane**: Phí cố định hàng tháng cho mỗi cluster
- **Worker Nodes**: Phí dựa trên cấu hình và số lượng node
- **Lưu trữ**: Phí dựa trên dung lượng và loại lưu trữ sử dụng
- **Băng thông**: Phí cho lưu lượng ra internet (lưu lượng nội bộ miễn phí)

Vui lòng tham khảo [bảng giá](../pricing.md) để biết chi tiết.

## Tài liệu tham khảo

- [Hướng dẫn sử dụng vOKS](../guides/voks-guide.md)
- [Triển khai ứng dụng trên vOKS](../guides/deploy-app-voks.md)
- [Các mẫu Kubernetes (Kubernetes Templates)](../guides/k8s-templates.md)
- [Khắc phục sự cố vOKS](../troubleshooting/voks-troubleshooting.md)
