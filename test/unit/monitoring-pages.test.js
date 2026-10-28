import docsifyInit from '../helpers/docsify-init.js';

// Monitoring Pages Tests
// -----------------------------------------------------------------------------
describe('Monitoring Pages', () => {
  // Health Check Services
  // ---------------------------------------------------------------------------
  describe('Health Check Services', () => {
    test('renders health check page with monitoring types', async () => {
      const healthCheckContent = `
        # Health Check - Kiểm tra sức khỏe hệ thống
        
        ## Giới thiệu
        Dịch vụ kiểm tra sức khỏe và giám sát uptime cho website và ứng dụng.
        
        ## Check Types
        ### HTTP/HTTPS Monitoring
        - **Response time** thời gian phản hồi
        - **Status code validation** xác thực mã trạng thái
        - **Content verification** xác minh nội dung
        - **SSL certificate monitoring** giám sát chứng chỉ SSL
        
        ### TCP/UDP Port Monitoring
        - **Port connectivity** kết nối cổng
        - **Service availability** tính khả dụng dịch vụ
        - **Response time** thời gian phản hồi
        - **Connection timeout** timeout kết nối
        
        ### DNS Monitoring
        - **DNS resolution** phân giải DNS
        - **Record validation** xác thực bản ghi
        - **Response time** thời gian phản hồi
        - **Propagation check** kiểm tra lan truyền
        
        ## Monitoring Locations
        | Region | Locations | Coverage |
        |--------|-----------|----------|
        | Vietnam | Hanoi, Ho Chi Minh | Domestic |
        | ASEAN | Singapore, Thailand, Malaysia | Regional |
        | Asia | Japan, Korea, Hong Kong | Continental |
        | Global | US, Europe, Australia | Worldwide |
        
        ## Alert Configurations
        ### 🚨 Alert Conditions
        - **Downtime detection** phát hiện downtime
        - **Response time threshold** ngưỡng thời gian phản hồi
        - **Error rate monitoring** giám sát tỷ lệ lỗi
        - **Content change detection** phát hiện thay đổi nội dung
        
        ### 📱 Notification Channels
        - **Email alerts** cảnh báo email
        - **SMS notifications** thông báo SMS
        - **Webhook integration** tích hợp webhook
        - **Mobile app push** đẩy ứng dụng di động
        
        ## Reporting Features
        ### 📊 Uptime Reports
        - **SLA compliance** tuân thủ SLA
        - **Availability percentage** phần trăm khả dụng
        - **Downtime analysis** phân tích downtime
        - **Performance trends** xu hướng hiệu suất
        
        ### 📈 Performance Metrics
        - **Response time charts** biểu đồ thời gian phản hồi
        - **Geographic performance** hiệu suất theo địa lý
        - **Historical data** dữ liệu lịch sử
        - **Comparative analysis** phân tích so sánh
      `;

      await docsifyInit({
        markdown: {
          homepage: healthCheckContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain('Health Check');
      expect(mainContent.textContent).toContain('kiểm tra sức khỏe hệ thống');
      
      // Check monitoring types
      expect(mainContent.textContent).toContain('HTTP/HTTPS Monitoring');
      expect(mainContent.textContent).toContain('TCP/UDP Port Monitoring');
      expect(mainContent.textContent).toContain('DNS Monitoring');
      
      // Check monitoring locations table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Vietnam');
      expect(mainContent.textContent).toContain('ASEAN');
      expect(mainContent.textContent).toContain('Global');
      
      // Check alert features
      expect(mainContent.textContent).toContain('Alert Conditions');
      expect(mainContent.textContent).toContain('Notification Channels');
      expect(mainContent.textContent).toContain('Email alerts');
      
      // Check reporting
      expect(mainContent.textContent).toContain('Uptime Reports');
      expect(mainContent.textContent).toContain('Performance Metrics');
    });
  });

  // Log Management Services
  // ---------------------------------------------------------------------------
  describe('Log Management Services', () => {
    test('renders log management page with collection methods', async () => {
      const logManagementContent = `
        # Log Management - Quản lý nhật ký hệ thống
        
        ## Giới thiệu
        Dịch vụ thu thập, lưu trữ và phân tích log từ nhiều nguồn khác nhau.
        
        ## Log Sources
        ### System Logs
        - **Operating system logs** log hệ điều hành
        - **Application logs** log ứng dụng
        - **Security logs** log bảo mật
        - **Audit logs** log kiểm toán
        
        ### Network Logs
        - **Firewall logs** log tường lửa
        - **Router logs** log router
        - **Switch logs** log switch
        - **Load balancer logs** log cân bằng tải
        
        ### Cloud Logs
        - **AWS CloudTrail** log AWS
        - **Azure Activity** log Azure
        - **Google Cloud Audit** log Google Cloud
        - **Container logs** log container
        
        ## Collection Methods
        | Method | Protocol | Use Case | Performance |
        |--------|----------|----------|-------------|
        | Syslog | UDP/TCP | System logs | High |
        | Agent-based | HTTPS | Application logs | Medium |
        | API-based | REST/GraphQL | Cloud logs | Medium |
        | File-based | SFTP/SCP | Batch logs | Low |
        
        ## Processing Pipeline
        ### 📥 Ingestion
        - **Real-time collection** thu thập thời gian thực
        - **Batch processing** xử lý hàng loạt
        - **Data validation** xác thực dữ liệu
        - **Format normalization** chuẩn hóa định dạng
        
        ### 🔄 Processing
        - **Parsing and extraction** phân tích và trích xuất
        - **Field mapping** ánh xạ trường
        - **Data enrichment** làm giàu dữ liệu
        - **Correlation rules** quy tắc tương quan
        
        ### 💾 Storage
        - **Hot storage** lưu trữ nóng (7 days)
        - **Warm storage** lưu trữ ấm (30 days)
        - **Cold storage** lưu trữ lạnh (1 year)
        - **Archive storage** lưu trữ lưu trữ (5+ years)
        
        ## Search and Analytics
        ### 🔍 Search Capabilities
        - **Full-text search** tìm kiếm toàn văn
        - **Field-based queries** truy vấn theo trường
        - **Regular expressions** biểu thức chính quy
        - **Time-based filtering** lọc theo thời gian
        
        ### 📊 Analytics Features
        - **Statistical analysis** phân tích thống kê
        - **Trend analysis** phân tích xu hướng
        - **Anomaly detection** phát hiện bất thường
        - **Custom dashboards** dashboard tùy chỉnh
      `;

      await docsifyInit({
        markdown: {
          homepage: logManagementContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Log Management');
      expect(mainContent.textContent).toContain('quản lý nhật ký hệ thống');
      
      // Check log sources
      expect(mainContent.textContent).toContain('System Logs');
      expect(mainContent.textContent).toContain('Network Logs');
      expect(mainContent.textContent).toContain('Cloud Logs');
      
      // Check collection methods table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Syslog');
      expect(mainContent.textContent).toContain('Agent-based');
      expect(mainContent.textContent).toContain('API-based');
      
      // Check processing pipeline
      expect(mainContent.textContent).toContain('Ingestion');
      expect(mainContent.textContent).toContain('Processing');
      expect(mainContent.textContent).toContain('Storage');
      
      // Check analytics
      expect(mainContent.textContent).toContain('Search Capabilities');
      expect(mainContent.textContent).toContain('Analytics Features');
    });
  });

  // Performance Monitoring Services
  // ---------------------------------------------------------------------------
  describe('Performance Monitoring Services', () => {
    test('renders performance monitoring page with metrics', async () => {
      const performanceMonitoringContent = `
        # Performance Monitoring - Giám sát hiệu suất
        
        ## Giới thiệu
        Dịch vụ giám sát hiệu suất toàn diện cho infrastructure và applications.
        
        ## Infrastructure Monitoring
        ### Server Metrics
        - **CPU utilization** sử dụng CPU
        - **Memory usage** sử dụng bộ nhớ
        - **Disk I/O** I/O đĩa
        - **Network traffic** lưu lượng mạng
        
        ### Database Metrics
        - **Query performance** hiệu suất truy vấn
        - **Connection pool** pool kết nối
        - **Lock contention** tranh chấp khóa
        - **Replication lag** độ trễ sao chép
        
        ### Network Metrics
        - **Bandwidth utilization** sử dụng băng thông
        - **Latency measurements** đo độ trễ
        - **Packet loss** mất gói tin
        - **Error rates** tỷ lệ lỗi
        
        ## Application Performance Monitoring
        | Metric Type | Description | Threshold | Alert |
        |-------------|-------------|-----------|-------|
        | Response Time | API response time | < 200ms | Warning |
        | Throughput | Requests per second | > 1000 RPS | Info |
        | Error Rate | Failed requests | < 1% | Critical |
        | Availability | Service uptime | > 99.9% | Critical |
        
        ## Real User Monitoring (RUM)
        ### 👥 User Experience Metrics
        - **Page load time** thời gian tải trang
        - **First contentful paint** vẽ nội dung đầu tiên
        - **Largest contentful paint** vẽ nội dung lớn nhất
        - **Cumulative layout shift** dịch chuyển bố cục tích lũy
        
        ### 🌐 Geographic Performance
        - **Regional performance** hiệu suất theo vùng
        - **ISP performance** hiệu suất theo ISP
        - **Device performance** hiệu suất theo thiết bị
        - **Browser performance** hiệu suất theo trình duyệt
        
        ## Synthetic Monitoring
        ### 🤖 Automated Testing
        - **API endpoint testing** kiểm tra endpoint API
        - **User journey simulation** mô phỏng hành trình người dùng
        - **Transaction monitoring** giám sát giao dịch
        - **Multi-step workflows** quy trình nhiều bước
        
        ### 📍 Global Testing Locations
        - **Vietnam**: Hanoi, Ho Chi Minh City
        - **Asia**: Singapore, Tokyo, Seoul
        - **Global**: New York, London, Sydney
        - **Custom locations** vị trí tùy chỉnh
        
        ## Alerting and Notifications
        ### 🚨 Alert Rules
        - **Threshold-based alerts** cảnh báo dựa ngưỡng
        - **Anomaly detection** phát hiện bất thường
        - **Trend-based alerts** cảnh báo dựa xu hướng
        - **Composite conditions** điều kiện tổng hợp
        
        ### 📱 Notification Channels
        - **Email notifications** thông báo email
        - **Slack integration** tích hợp Slack
        - **PagerDuty integration** tích hợp PagerDuty
        - **Custom webhooks** webhook tùy chỉnh
      `;

      await docsifyInit({
        markdown: {
          homepage: performanceMonitoringContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Performance Monitoring');
      expect(mainContent.textContent).toContain('giám sát hiệu suất');
      
      // Check infrastructure monitoring
      expect(mainContent.textContent).toContain('Server Metrics');
      expect(mainContent.textContent).toContain('Database Metrics');
      expect(mainContent.textContent).toContain('Network Metrics');
      expect(mainContent.textContent).toContain('CPU utilization');
      
      // Check APM table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Response Time');
      expect(mainContent.textContent).toContain('Throughput');
      expect(mainContent.textContent).toContain('Error Rate');
      
      // Check RUM features
      expect(mainContent.textContent).toContain('Real User Monitoring');
      expect(mainContent.textContent).toContain('Page load time');
      expect(mainContent.textContent).toContain('Geographic Performance');
      
      // Check synthetic monitoring
      expect(mainContent.textContent).toContain('Synthetic Monitoring');
      expect(mainContent.textContent).toContain('Automated Testing');
      expect(mainContent.textContent).toContain('Global Testing Locations');
      
      // Check alerting
      expect(mainContent.textContent).toContain('Alert Rules');
      expect(mainContent.textContent).toContain('Notification Channels');
    });
  });
});
