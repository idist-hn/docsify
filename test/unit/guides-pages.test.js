import docsifyInit from '../helpers/docsify-init.js';

// Guides Pages Tests
// -----------------------------------------------------------------------------
describe('Guides Pages', () => {
  // Registration Guide
  // ---------------------------------------------------------------------------
  describe('Registration Guide', () => {
    test('renders registration guide with step-by-step process', async () => {
      const registrationContent = `
        # Registration - Đăng ký tài khoản

        ## Giới thiệu
        Hướng dẫn đăng ký tài khoản Viettel IDC Cloud từng bước.

        ## Yêu cầu đăng ký
        ### Thông tin cá nhân
        - **Họ và tên** đầy đủ
        - **Số điện thoại** xác thực
        - **Email** làm việc
        - **CMND/CCCD** hợp lệ

        ### Thông tin doanh nghiệp
        - **Tên công ty** chính thức
        - **Mã số thuế** hợp lệ
        - **Địa chỉ** trụ sở chính
        - **Giấy phép kinh doanh** scan rõ nét

        ## Quy trình đăng ký
        ### Bước 1: Tạo tài khoản
        1. Truy cập [portal.viettelidc.com.vn](https://portal.viettelidc.com.vn)
        2. Click "Đăng ký tài khoản"
        3. Điền thông tin cơ bản
        4. Xác thực email

        ### Bước 2: Xác thực danh tính
        | Loại tài khoản | Thời gian xác thực | Tài liệu yêu cầu |
        |----------------|-------------------|------------------|
        | Cá nhân | 2-4 giờ | CMND/CCCD |
        | Doanh nghiệp | 1-2 ngày | GPKD, MST |
        | Tổ chức | 2-3 ngày | Quyết định thành lập |

        ### Bước 3: Kích hoạt tài khoản
        - **SMS verification** xác thực SMS
        - **Email confirmation** xác nhận email
        - **Document review** xem xét tài liệu
        - **Account activation** kích hoạt tài khoản

        ## Phương thức thanh toán
        ### Thanh toán trực tuyến
        - **Thẻ tín dụng** Visa, MasterCard
        - **Thẻ ATM** nội địa
        - **Ví điện tử** MoMo, ZaloPay
        - **Internet Banking** các ngân hàng lớn

        ### Thanh toán offline
        - **Chuyển khoản** ngân hàng
        - **Tiền mặt** tại văn phòng
        - **Séc** công ty
        - **Hóa đơn** VAT

        ## Gói dịch vụ khởi đầu
        ### Free Tier
        - **1 vCPU, 1GB RAM** máy chủ miễn phí
        - **10GB storage** lưu trữ
        - **100GB bandwidth** băng thông
        - **30 days** thời gian dùng thử

        ### Starter Pack
        - **2 vCPU, 4GB RAM** máy chủ cơ bản
        - **50GB SSD** lưu trữ SSD
        - **500GB bandwidth** băng thông
        - **500K VND/tháng** giá ưu đãi
      `;

      await docsifyInit({
        markdown: {
          homepage: registrationContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain('Registration');
      expect(mainContent.textContent).toContain('đăng ký tài khoản');

      // Check requirements
      expect(mainContent.textContent).toContain('Thông tin cá nhân');
      expect(mainContent.textContent).toContain('Thông tin doanh nghiệp');
      expect(mainContent.textContent).toContain('Họ và tên');
      expect(mainContent.textContent).toContain('Mã số thuế');

      // Check registration process
      expect(mainContent.textContent).toContain('Bước 1');
      expect(mainContent.textContent).toContain('Bước 2');
      expect(mainContent.textContent).toContain('Bước 3');
      expect(mainContent.textContent).toContain('portal.viettelidc.com.vn');

      // Check verification table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Cá nhân');
      expect(mainContent.textContent).toContain('Doanh nghiệp');
      expect(mainContent.textContent).toContain('2-4 giờ');

      // Check payment methods
      expect(mainContent.textContent).toContain('Thanh toán trực tuyến');
      expect(mainContent.textContent).toContain('Thẻ tín dụng');
      expect(mainContent.textContent).toContain('Internet Banking');

      // Check service packages
      expect(mainContent.textContent).toContain('Free Tier');
      expect(mainContent.textContent).toContain('Starter Pack');
    });
  });

  // Billing Guide
  // ---------------------------------------------------------------------------
  describe('Billing Guide', () => {
    test('renders billing guide with pricing models', async () => {
      const billingContent = `
        # Billing - Thanh toán và hóa đơn

        ## Giới thiệu
        Hướng dẫn về hệ thống thanh toán và quản lý hóa đơn.

        ## Mô hình tính phí
        ### Pay-as-you-use
        - **Tính theo giờ** sử dụng thực tế
        - **Không cam kết** thời gian tối thiểu
        - **Linh hoạt** tăng giảm tài nguyên
        - **Phù hợp** workload không đều

        ### Reserved Instances
        - **Cam kết 1-3 năm** giảm giá đến 60%
        - **Thanh toán trước** hoặc hàng tháng
        - **Ổn định** cho workload dự đoán được
        - **Chuyển đổi** linh hoạt giữa các loại

        ## Bảng giá dịch vụ
        | Dịch vụ | Đơn vị | Giá Pay-as-use | Giá Reserved |
        |---------|--------|----------------|--------------|
        | vServer | vCPU/giờ | 500 VND | 300 VND |
        | vStorage | GB/tháng | 1,000 VND | 700 VND |
        | Bandwidth | GB | 100 VND | 70 VND |
        | Load Balancer | giờ | 2,000 VND | 1,400 VND |

        ## Quản lý chi phí
        ### Budget Alerts
        - **Ngưỡng cảnh báo** 80%, 90%, 100%
        - **Thông báo email** tự động
        - **SMS alerts** khẩn cấp
        - **Webhook integration** tích hợp hệ thống

        ### Cost Optimization
        - **Right-sizing** tối ưu kích thước
        - **Scheduled scaling** mở rộng theo lịch
        - **Unused resource detection** phát hiện tài nguyên không dùng
        - **Recommendation engine** công cụ đề xuất

        ## Phương thức thanh toán
        ### Tự động thanh toán
        - **Credit card** thẻ tín dụng
        - **Bank account** tài khoản ngân hàng
        - **E-wallet** ví điện tử
        - **Auto-reload** nạp tiền tự động

        ### Thanh toán thủ công
        - **Bank transfer** chuyển khoản
        - **Cash payment** tiền mặt
        - **Invoice payment** thanh toán hóa đơn
        - **Check payment** thanh toán séc

        ## Hóa đơn và báo cáo
        ### Hóa đơn điện tử
        - **VAT invoice** hóa đơn VAT
        - **PDF format** định dạng PDF
        - **Email delivery** gửi qua email
        - **Portal download** tải từ portal

        ### Báo cáo chi tiết
        - **Usage reports** báo cáo sử dụng
        - **Cost breakdown** phân tích chi phí
        - **Trend analysis** phân tích xu hướng
        - **Export options** tùy chọn xuất dữ liệu
      `;

      await docsifyInit({
        markdown: {
          homepage: billingContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Billing');
      expect(mainContent.textContent).toContain('thanh toán và hóa đơn');

      // Check pricing models
      expect(mainContent.textContent).toContain('Pay-as-you-use');
      expect(mainContent.textContent).toContain('Reserved Instances');
      expect(mainContent.textContent).toContain('Tính theo giờ');
      expect(mainContent.textContent).toContain('Cam kết 1-3 năm');

      // Check pricing table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('vServer');
      expect(mainContent.textContent).toContain('vStorage');
      expect(mainContent.textContent).toContain('500 VND');

      // Check cost management
      expect(mainContent.textContent).toContain('Budget Alerts');
      expect(mainContent.textContent).toContain('Cost Optimization');
      expect(mainContent.textContent).toContain('Right-sizing');

      // Check payment methods
      expect(mainContent.textContent).toContain('Tự động thanh toán');
      expect(mainContent.textContent).toContain('Thanh toán thủ công');
      expect(mainContent.textContent).toContain('Credit card');

      // Check invoicing
      expect(mainContent.textContent).toContain('Hóa đơn điện tử');
      expect(mainContent.textContent).toContain('VAT invoice');
      expect(mainContent.textContent).toContain('Usage reports');
    });
  });

  // Migration Guide
  // ---------------------------------------------------------------------------
  describe('Migration Guide', () => {
    test('renders migration guide with strategies', async () => {
      const migrationContent = `
        # Migration - Di chuyển hệ thống

        ## Giới thiệu
        Hướng dẫn di chuyển hệ thống từ on-premise hoặc cloud khác sang Viettel IDC Cloud.

        ## Chiến lược di chuyển
        ### Lift and Shift
        - **Di chuyển nguyên trạng** không thay đổi kiến trúc
        - **Thời gian nhanh** 1-2 tuần
        - **Chi phí thấp** nhất
        - **Rủi ro thấp** nhất

        ### Re-platforming
        - **Tối ưu hóa** cho cloud
        - **Thay đổi nhỏ** kiến trúc
        - **Cải thiện hiệu suất** 20-30%
        - **Thời gian trung bình** 1-2 tháng

        ### Re-architecting
        - **Thiết kế lại** hoàn toàn
        - **Cloud-native** architecture
        - **Hiệu suất tối ưu** 50-80%
        - **Thời gian dài** 3-6 tháng

        ## Quy trình di chuyển
        | Giai đoạn | Thời gian | Hoạt động chính |
        |-----------|-----------|-----------------|
        | Assessment | 1-2 tuần | Đánh giá hệ thống hiện tại |
        | Planning | 2-3 tuần | Lập kế hoạch di chuyển |
        | Preparation | 1-2 tuần | Chuẩn bị môi trường |
        | Migration | 1-4 tuần | Thực hiện di chuyển |
        | Testing | 1-2 tuần | Kiểm thử và tối ưu |
        | Go-live | 1 tuần | Chuyển đổi production |

        ## Công cụ hỗ trợ
        ### Migration Tools
        - **VM Import/Export** nhập/xuất máy ảo
        - **Database Migration** di chuyển cơ sở dữ liệu
        - **Storage Sync** đồng bộ lưu trữ
        - **Network Bridge** cầu nối mạng

        ### Assessment Tools
        - **Discovery tools** công cụ khám phá
        - **Dependency mapping** lập bản đồ phụ thuộc
        - **Performance baseline** đường cơ sở hiệu suất
        - **Cost calculator** tính toán chi phí
      `;

      await docsifyInit({
        markdown: {
          homepage: migrationContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Migration');
      expect(mainContent.textContent).toContain('di chuyển hệ thống');

      // Check migration strategies
      expect(mainContent.textContent).toContain('Lift and Shift');
      expect(mainContent.textContent).toContain('Re-platforming');
      expect(mainContent.textContent).toContain('Re-architecting');

      // Check process table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Assessment');
      expect(mainContent.textContent).toContain('Planning');
      expect(mainContent.textContent).toContain('Go-live');

      // Check tools
      expect(mainContent.textContent).toContain('Migration Tools');
      expect(mainContent.textContent).toContain('Assessment Tools');
      expect(mainContent.textContent).toContain('VM Import/Export');
    });
  });

  // Best Practices Guide
  // ---------------------------------------------------------------------------
  describe('Best Practices Guide', () => {
    test('renders best practices guide with recommendations', async () => {
      const bestPracticesContent = `
        # Best Practices - Thực hành tốt nhất

        ## Giới thiệu
        Các thực hành tốt nhất để tối ưu hóa hiệu suất, bảo mật và chi phí.

        ## Security Best Practices
        ### Access Management
        - **Principle of least privilege** nguyên tắc quyền tối thiểu
        - **Multi-factor authentication** xác thực đa yếu tố
        - **Regular access review** xem xét quyền truy cập định kỳ
        - **Role-based access control** kiểm soát truy cập theo vai trò

        ### Network Security
        - **Security groups** nhóm bảo mật chặt chẽ
        - **VPC isolation** cô lập VPC
        - **Private subnets** subnet riêng tư
        - **NAT gateways** cổng NAT

        ## Performance Optimization
        ### Compute Optimization
        - **Right-sizing instances** chọn kích thước phù hợp
        - **Auto-scaling policies** chính sách tự động mở rộng
        - **Load balancing** cân bằng tải
        - **Caching strategies** chiến lược cache

        ### Storage Optimization
        - **SSD for high IOPS** SSD cho IOPS cao
        - **HDD for archival** HDD cho lưu trữ
        - **Lifecycle policies** chính sách vòng đời
        - **Compression** nén dữ liệu

        ## Cost Optimization
        | Strategy | Savings | Implementation |
        |----------|---------|----------------|
        | Reserved Instances | 30-60% | Long-term commitment |
        | Spot Instances | 50-90% | Fault-tolerant workloads |
        | Auto-scaling | 20-40% | Dynamic resource allocation |
        | Storage tiering | 30-50% | Automated data movement |

        ## Monitoring and Alerting
        ### Key Metrics
        - **CPU utilization** sử dụng CPU
        - **Memory usage** sử dụng bộ nhớ
        - **Disk I/O** I/O đĩa
        - **Network throughput** thông lượng mạng

        ### Alert Thresholds
        - **CPU > 80%** cảnh báo CPU
        - **Memory > 85%** cảnh báo bộ nhớ
        - **Disk > 90%** cảnh báo đĩa
        - **Response time > 2s** cảnh báo thời gian phản hồi
      `;

      await docsifyInit({
        markdown: {
          homepage: bestPracticesContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Best Practices');
      expect(mainContent.textContent).toContain('thực hành tốt nhất');

      // Check security practices
      expect(mainContent.textContent).toContain('Security Best Practices');
      expect(mainContent.textContent).toContain('Access Management');
      expect(mainContent.textContent).toContain('Network Security');
      expect(mainContent.textContent).toContain('Principle of least privilege');

      // Check performance optimization
      expect(mainContent.textContent).toContain('Performance Optimization');
      expect(mainContent.textContent).toContain('Compute Optimization');
      expect(mainContent.textContent).toContain('Storage Optimization');

      // Check cost optimization table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Reserved Instances');
      expect(mainContent.textContent).toContain('Spot Instances');
      expect(mainContent.textContent).toContain('30-60%');

      // Check monitoring
      expect(mainContent.textContent).toContain('Monitoring and Alerting');
      expect(mainContent.textContent).toContain('Key Metrics');
      expect(mainContent.textContent).toContain('Alert Thresholds');
    });
  });

  // Troubleshooting Guide
  // ---------------------------------------------------------------------------
  describe('Troubleshooting Guide', () => {
    test('renders troubleshooting guide with common issues', async () => {
      const troubleshootingContent = `
        # Troubleshooting - Khắc phục sự cố

        ## Giới thiệu
        Hướng dẫn khắc phục các sự cố thường gặp khi sử dụng Viettel IDC Cloud.

        ## Sự cố kết nối
        ### Không thể SSH vào server
        **Triệu chứng**: Connection timeout hoặc connection refused

        **Nguyên nhân có thể**:
        - Security group không mở port 22
        - Server đang tắt hoặc bị treo
        - SSH service không chạy
        - Firewall local chặn kết nối

        **Cách khắc phục**:
        1. Kiểm tra trạng thái server trong portal
        2. Xem xét security group rules
        3. Sử dụng console access để kiểm tra
        4. Restart SSH service nếu cần

        ### Website không truy cập được
        **Triệu chứng**: Timeout hoặc 502/503 error

        **Cách khắc phục**:
        - Kiểm tra web server status
        - Xem log application
        - Kiểm tra database connection
        - Verify load balancer health checks

        ## Sự cố hiệu suất
        | Vấn đề | Triệu chứng | Giải pháp |
        |--------|-------------|-----------|
        | High CPU | CPU > 90% | Scale up/out, optimize code |
        | High Memory | Memory > 95% | Add RAM, fix memory leaks |
        | Slow Disk | High I/O wait | Use SSD, optimize queries |
        | Network Lag | High latency | Check network path, use CDN |

        ## Sự cố storage
        ### Disk full
        **Triệu chứng**: "No space left on device"

        **Cách khắc phục**:
        1. Xóa file log cũ: \`find /var/log -name "*.log" -mtime +30 -delete\`
        2. Dọn dẹp package cache: \`apt clean\` hoặc \`yum clean all\`
        3. Mở rộng volume nếu cần
        4. Thiết lập log rotation

        ### Volume không mount được
        **Nguyên nhân**:
        - File system bị lỗi
        - Device path không đúng
        - Permission issues

        **Cách khắc phục**:
        1. Kiểm tra device: \`lsblk\`
        2. Check file system: \`fsck /dev/vdb\`
        3. Mount với đúng options
        4. Update /etc/fstab

        ## Công cụ chẩn đoán
        ### System Commands
        - \`top\` - CPU và memory usage
        - \`iotop\` - Disk I/O monitoring
        - \`netstat\` - Network connections
        - \`df -h\` - Disk space usage

        ### Log Files
        - \`/var/log/syslog\` - System logs
        - \`/var/log/auth.log\` - Authentication logs
        - \`/var/log/apache2/error.log\` - Web server errors
        - \`journalctl\` - Systemd logs
      `;

      await docsifyInit({
        markdown: {
          homepage: troubleshootingContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Troubleshooting');
      expect(mainContent.textContent).toContain('khắc phục sự cố');

      // Check connection issues
      expect(mainContent.textContent).toContain('Sự cố kết nối');
      expect(mainContent.textContent).toContain('Không thể SSH');
      expect(mainContent.textContent).toContain('Website không truy cập');
      expect(mainContent.textContent).toContain('Security group');

      // Check performance issues table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('High CPU');
      expect(mainContent.textContent).toContain('High Memory');
      expect(mainContent.textContent).toContain('Slow Disk');

      // Check storage issues
      expect(mainContent.textContent).toContain('Sự cố storage');
      expect(mainContent.textContent).toContain('Disk full');
      expect(mainContent.textContent).toContain('Volume không mount');

      // Check diagnostic tools
      expect(mainContent.textContent).toContain('Công cụ chẩn đoán');
      expect(mainContent.textContent).toContain('System Commands');
      expect(mainContent.textContent).toContain('Log Files');
      expect(mainContent.textContent).toContain('/var/log/syslog');
    });
  });
});