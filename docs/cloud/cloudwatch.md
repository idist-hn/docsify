# Cloudwatch - Dịch vụ giám sát và phân tích

## Giới thiệu

Cloudwatch là dịch vụ giám sát và phân tích toàn diện của Viettel IDC Cloud, giúp khách hàng theo dõi, phân tích và ứng phó với các sự kiện trong toàn bộ hạ tầng và ứng dụng cloud. Cloudwatch cung cấp khả năng giám sát thời gian thực, thu thập và theo dõi các số liệu, log, và thiết lập cảnh báo tự động, giúp doanh nghiệp duy trì hiệu suất, tính sẵn sàng và bảo mật cho hệ thống của mình.

![Cloudwatch Overview](../media/cloud/cloudwatch-overview.png?v=1.0 ':size=700')

## Tính năng chính

### Giám sát tài nguyên

- **Giám sát cơ sở hạ tầng**: Theo dõi hiệu suất của vServer, vStorage, vContainer, vOKS, vDBS...
- **Số liệu tùy chỉnh**: Tạo và theo dõi các số liệu tùy chỉnh cho ứng dụng
- **Dashboard tùy chỉnh**: Tạo bảng điều khiển trực quan theo nhu cầu
- **Tích hợp đa dịch vụ**: Giám sát tất cả các dịch vụ Viettel IDC Cloud từ một giao diện thống nhất

### Quản lý log

- **Thu thập log tập trung**: Thu thập log từ tất cả các tài nguyên và ứng dụng
- **Tìm kiếm và phân tích**: Tìm kiếm và phân tích log theo thời gian thực
- **Lưu trữ dài hạn**: Lưu trữ log an toàn với thời gian tùy chỉnh
- **Phân tích log**: Công cụ phân tích log nâng cao

### Cảnh báo và thông báo

- **Cảnh báo thông minh**: Thiết lập cảnh báo dựa trên ngưỡng, mẫu hoặc bất thường
- **Đa kênh thông báo**: Email, SMS, webhook, tích hợp với các nền tảng nhắn tin
- **Tự động hóa phản hồi**: Kích hoạt các hành động tự động khi phát hiện sự cố
- **Lịch sử cảnh báo**: Theo dõi và phân tích lịch sử cảnh báo

### Phân tích và báo cáo

- **Phân tích xu hướng**: Phát hiện xu hướng và mẫu trong dữ liệu
- **Báo cáo tùy chỉnh**: Tạo báo cáo theo nhu cầu
- **Dự báo**: Dự báo xu hướng sử dụng tài nguyên
- **Phân tích chi phí**: Theo dõi và phân tích chi phí sử dụng dịch vụ

## Lợi ích

- **Tầm nhìn toàn diện**: Theo dõi toàn bộ hạ tầng và ứng dụng từ một giao diện thống nhất
- **Phát hiện sớm sự cố**: Phát hiện và cảnh báo sớm các vấn đề tiềm ẩn
- **Giảm thời gian khắc phục**: Phân tích nhanh chóng nguyên nhân gốc rễ của sự cố
- **Tối ưu hóa hiệu suất**: Phát hiện và khắc phục các vấn đề hiệu suất
- **Tối ưu hóa chi phí**: Phân tích và tối ưu hóa việc sử dụng tài nguyên
- **Tuân thủ và kiểm toán**: Hỗ trợ các yêu cầu tuân thủ và kiểm toán

## Trường hợp sử dụng

- **Giám sát cơ sở hạ tầng**: Theo dõi hiệu suất và tình trạng của hạ tầng cloud
- **Giám sát ứng dụng**: Theo dõi hiệu suất và tính sẵn sàng của ứng dụng
- **Phân tích log**: Thu thập và phân tích log từ nhiều nguồn
- **Phát hiện bất thường**: Phát hiện các hoạt động bất thường và các mối đe dọa bảo mật
- **Tối ưu hóa chi phí**: Phân tích và tối ưu hóa chi phí sử dụng dịch vụ cloud

## Bắt đầu sử dụng

### Yêu cầu

- Tài khoản Viettel IDC Cloud
- Các dịch vụ cloud cần giám sát (vServer, vStorage, vContainer, vOKS, vDBS...)

### Thiết lập Cloudwatch

1. Đăng nhập vào [Cloud Management Platform](https://portal.viettelidc.com.vn/)
2. Chọn dịch vụ Cloudwatch
3. Cấu hình giám sát:
   - Chọn tài nguyên cần giám sát
   - Thiết lập các số liệu cần theo dõi
   - Cấu hình thu thập log
   - Thiết lập cảnh báo
4. Tạo dashboard tùy chỉnh
5. Cấu hình thông báo

## Tích hợp với các dịch vụ khác

Cloudwatch tích hợp liền mạch với tất cả các dịch vụ Viettel IDC Cloud:

- **vServer**: Giám sát hiệu suất CPU, RAM, disk I/O, network...
- **vStorage**: Theo dõi dung lượng, IOPS, độ trễ...
- **vContainer**: Giám sát container, service, task...
- **vOKS**: Theo dõi cluster, node, pod, deployment...
- **vDBS**: Giám sát hiệu suất cơ sở dữ liệu, truy vấn, kết nối...

## Giá cước

Cloudwatch được tính phí dựa trên các thành phần sau:

- **Số liệu cơ bản**: Miễn phí cho các số liệu cơ bản
- **Số liệu tùy chỉnh**: Phí dựa trên số lượng số liệu tùy chỉnh
- **Thu thập và lưu trữ log**: Phí dựa trên dung lượng log thu thập và thời gian lưu trữ
- **Cảnh báo**: Phí dựa trên số lượng cảnh báo
- **Dashboard**: Phí dựa trên số lượng dashboard tùy chỉnh

Vui lòng tham khảo [bảng giá](../pricing.md) để biết chi tiết.

## Tài liệu tham khảo

- [Hướng dẫn sử dụng Cloudwatch](../guides/cloudwatch-guide.md)
- [Thiết lập cảnh báo hiệu quả](../guides/effective-alerts.md)
- [Phân tích log nâng cao](../guides/advanced-log-analysis.md)
- [Tối ưu hóa chi phí với Cloudwatch](../guides/cost-optimization.md)
