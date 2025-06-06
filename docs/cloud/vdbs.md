# vDBS - Viettel Database Service

## Giới thiệu

vDBS (Viettel Database Service) là dịch vụ cơ sở dữ liệu được quản lý hoàn toàn bởi Viettel IDC, cung cấp các giải pháp cơ sở dữ liệu đa dạng, hiệu năng cao và sẵn sàng cho các ứng dụng doanh nghiệp. vDBS giúp khách hàng giảm bớt gánh nặng trong việc quản lý, vận hành và bảo trì cơ sở dữ liệu, đồng thời đảm bảo tính sẵn sàng, bảo mật và hiệu suất cao.

![vDBS Overview](../media/cloud/vdbs-overview.png?v=1.0 ':size=700')

## Các loại cơ sở dữ liệu hỗ trợ

vDBS hỗ trợ nhiều loại cơ sở dữ liệu phổ biến:

### Cơ sở dữ liệu quan hệ (Relational)

- **MySQL**: Phiên bản 5.7, 8.0
- **PostgreSQL**: Phiên bản 11, 12, 13, 14
- **MariaDB**: Phiên bản 10.3, 10.4, 10.5
- **SQL Server**: Phiên bản 2019, 2022

### Cơ sở dữ liệu NoSQL

- **MongoDB**: Phiên bản 4.4, 5.0, 6.0
- **Redis**: Phiên bản 6.0, 6.2, 7.0
- **Elasticsearch**: Phiên bản 7.10, 8.0

## Tính năng chính

### Quản lý tự động

- **Triển khai nhanh chóng**: Tạo instance cơ sở dữ liệu chỉ trong vài phút
- **Tự động sao lưu**: Lịch sao lưu tự động và khôi phục theo điểm thời gian
- **Tự động cập nhật**: Cập nhật phiên bản và bản vá bảo mật
- **Tự động mở rộng**: Tăng dung lượng lưu trữ theo nhu cầu

### Tính sẵn sàng cao

- **Multi-AZ Deployment**: Triển khai trên nhiều vùng sẵn sàng
- **Tự động failover**: Chuyển đổi tự động khi phát hiện lỗi
- **Read Replicas**: Tạo bản sao chỉ đọc để cân bằng tải đọc
- **SLA cam kết**: 99.99% uptime cho triển khai Multi-AZ

### Bảo mật toàn diện

- **Mã hóa dữ liệu**: Mã hóa dữ liệu trong quá trình lưu trữ và truyền tải
- **VPC Isolation**: Cô lập trong mạng riêng ảo
- **IAM Integration**: Tích hợp với hệ thống quản lý quyền truy cập
- **SSL/TLS**: Kết nối bảo mật với SSL/TLS
- **Audit Logging**: Ghi log các hoạt động truy cập và thay đổi

### Giám sát và phân tích

- **Giám sát thời gian thực**: Theo dõi hiệu suất, tài nguyên và trạng thái
- **Cảnh báo tự động**: Thiết lập ngưỡng cảnh báo
- **Phân tích hiệu suất**: Công cụ phân tích truy vấn và hiệu suất
- **Tích hợp Cloudwatch**: Tích hợp với dịch vụ giám sát Cloudwatch

## Lợi ích

- **Tiết kiệm chi phí**: Không cần đầu tư vào cơ sở hạ tầng và nhân sự quản lý cơ sở dữ liệu
- **Tăng tốc phát triển**: Tập trung vào phát triển ứng dụng thay vì quản lý cơ sở dữ liệu
- **Độ tin cậy cao**: Hạ tầng dự phòng và cơ chế sao lưu tự động
- **Khả năng mở rộng**: Dễ dàng mở rộng theo nhu cầu kinh doanh
- **Bảo mật cao**: Tuân thủ các tiêu chuẩn bảo mật quốc tế
- **Hỗ trợ chuyên nghiệp**: Đội ngũ kỹ thuật 24/7 với chuyên môn về cơ sở dữ liệu

## Trường hợp sử dụng

- **Ứng dụng web và mobile**: Cơ sở dữ liệu cho các ứng dụng web và di động
- **Phân tích dữ liệu**: Lưu trữ và phân tích dữ liệu lớn
- **Ứng dụng doanh nghiệp**: ERP, CRM, HRM...
- **E-commerce**: Cơ sở dữ liệu cho các nền tảng thương mại điện tử
- **IoT**: Lưu trữ và xử lý dữ liệu từ các thiết bị IoT

## Bắt đầu sử dụng

### Yêu cầu

- Tài khoản Viettel IDC Cloud
- Kiến thức cơ bản về cơ sở dữ liệu

### Tạo instance vDBS đầu tiên

1. Đăng nhập vào [Cloud Management Platform](https://portal.viettelidc.com.vn/)
2. Chọn dịch vụ vDBS
3. Nhấp vào "Tạo Instance"
4. Cấu hình instance:
   - Chọn loại cơ sở dữ liệu
   - Chọn phiên bản
   - Cấu hình tài nguyên (CPU, RAM, dung lượng lưu trữ)
   - Thiết lập mạng và bảo mật
   - Cấu hình sao lưu
5. Xác nhận và tạo instance

Sau khi instance được tạo thành công, bạn sẽ nhận được thông tin kết nối và có thể bắt đầu sử dụng cơ sở dữ liệu của mình.

## Giá cước

vDBS được tính phí dựa trên các thành phần sau:

- **Instance**: Phí dựa trên loại instance, cấu hình và thời gian sử dụng
- **Lưu trữ**: Phí dựa trên dung lượng và loại lưu trữ sử dụng
- **Sao lưu**: Phí dựa trên dung lượng sao lưu
- **Băng thông**: Phí cho lưu lượng ra internet (lưu lượng nội bộ miễn phí)

Vui lòng tham khảo [bảng giá](../pricing.md) để biết chi tiết.

## Tài liệu tham khảo

- [Hướng dẫn sử dụng vDBS](../guides/vdbs-guide.md)
- [Tối ưu hóa hiệu suất cơ sở dữ liệu](../guides/db-performance.md)
- [Sao lưu và khôi phục](../guides/db-backup-restore.md)
- [Khắc phục sự cố vDBS](../troubleshooting/vdbs-troubleshooting.md)