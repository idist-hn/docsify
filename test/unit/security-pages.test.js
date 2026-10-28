import docsifyInit from '../helpers/docsify-init.js';

// Security Pages Tests
// -----------------------------------------------------------------------------
describe('Security Pages', () => {
  // Anti-DDoS Services
  // ---------------------------------------------------------------------------
  describe('Anti-DDoS Services', () => {
    test('renders anti-DDoS page with protection levels', async () => {
      const antiDDoSContent = `
        # Anti-DDoS - Bảo vệ chống tấn công từ chối dịch vụ
        
        ## Giới thiệu
        Dịch vụ bảo vệ chống tấn công DDoS với khả năng chống chịu lên đến 1Tbps.
        
        ## Protection Levels
        ### Basic Protection
        - **Capacity**: 5Gbps
        - **Detection time**: < 30 seconds
        - **Mitigation time**: < 60 seconds
        - **Price**: 5M VND/tháng
        
        ### Advanced Protection
        - **Capacity**: 50Gbps
        - **Detection time**: < 10 seconds
        - **Mitigation time**: < 30 seconds
        - **Price**: 20M VND/tháng
        
        ### Enterprise Protection
        - **Capacity**: 500Gbps
        - **Detection time**: < 5 seconds
        - **Mitigation time**: < 15 seconds
        - **Price**: 100M VND/tháng
        
        ## Attack Types Protected
        ### Layer 3/4 Attacks
        | Attack Type | Description | Mitigation |
        |-------------|-------------|------------|
        | UDP Flood | UDP packet flooding | Rate limiting |
        | SYN Flood | TCP SYN flooding | SYN cookies |
        | ICMP Flood | ICMP packet flooding | ICMP filtering |
        | Reflection | DNS/NTP reflection | Source validation |
        
        ### Layer 7 Attacks
        | Attack Type | Description | Mitigation |
        |-------------|-------------|------------|
        | HTTP Flood | HTTP request flooding | Behavioral analysis |
        | Slowloris | Slow HTTP attacks | Connection limits |
        | SSL Exhaustion | SSL handshake attacks | SSL acceleration |
        | Application Layer | App-specific attacks | Custom rules |
        
        ## Detection Methods
        ### 🔍 Traffic Analysis
        - **Behavioral analysis** phân tích hành vi
        - **Statistical analysis** phân tích thống kê
        - **Machine learning** học máy
        - **Signature-based** dựa trên chữ ký
        
        ### ⚡ Real-time Monitoring
        - **Traffic monitoring** giám sát lưu lượng
        - **Anomaly detection** phát hiện bất thường
        - **Threshold alerts** cảnh báo ngưỡng
        - **Automated response** phản ứng tự động
        
        ## Mitigation Techniques
        - **Rate limiting** giới hạn tốc độ
        - **Traffic shaping** định hình lưu lượng
        - **Blackhole routing** định tuyến hố đen
        - **Scrubbing centers** trung tâm lọc
      `;

      await docsifyInit({
        markdown: {
          homepage: antiDDoSContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain('Anti-DDoS');
      expect(mainContent.textContent).toContain('chống tấn công từ chối dịch vụ');
      
      // Check protection levels
      expect(mainContent.textContent).toContain('Basic Protection');
      expect(mainContent.textContent).toContain('Advanced Protection');
      expect(mainContent.textContent).toContain('Enterprise Protection');
      expect(mainContent.textContent).toContain('5Gbps');
      expect(mainContent.textContent).toContain('500Gbps');
      
      // Check attack types tables
      const tables = mainContent.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(2);
      expect(mainContent.textContent).toContain('UDP Flood');
      expect(mainContent.textContent).toContain('HTTP Flood');
      
      // Check detection methods
      expect(mainContent.textContent).toContain('Behavioral analysis');
      expect(mainContent.textContent).toContain('Machine learning');
      expect(mainContent.textContent).toContain('Real-time Monitoring');
    });
  });

  // SSL Certificate Services
  // ---------------------------------------------------------------------------
  describe('SSL Certificate Services', () => {
    test('renders SSL certificate page with certificate types', async () => {
      const sslCertificateContent = `
        # SSL Certificate - Chứng chỉ bảo mật SSL/TLS
        
        ## Giới thiệu
        Dịch vụ cung cấp và quản lý chứng chỉ SSL/TLS cho website và ứng dụng.
        
        ## Certificate Types
        ### Domain Validated (DV)
        - **Validation**: Domain ownership only
        - **Issuance time**: 5-10 minutes
        - **Warranty**: $10,000
        - **Price**: 500K VND/năm
        
        ### Organization Validated (OV)
        - **Validation**: Domain + Organization
        - **Issuance time**: 1-3 days
        - **Warranty**: $100,000
        - **Price**: 2M VND/năm
        
        ### Extended Validation (EV)
        - **Validation**: Full legal verification
        - **Issuance time**: 7-10 days
        - **Warranty**: $1,000,000
        - **Price**: 5M VND/năm
        
        ## Certificate Features
        | Feature | DV | OV | EV |
        |---------|----|----|----| 
        | Encryption | 256-bit | 256-bit | 256-bit |
        | Green Address Bar | ❌ | ❌ | ✅ |
        | Company Name | ❌ | ✅ | ✅ |
        | Wildcard Support | ✅ | ✅ | ❌ |
        | Multi-Domain | ✅ | ✅ | ✅ |
        
        ## Supported Algorithms
        ### Encryption Standards
        - **RSA 2048/4096** thuật toán RSA
        - **ECC P-256/P-384** đường cong elliptic
        - **SHA-256** hàm băm SHA-256
        - **TLS 1.3** giao thức TLS mới nhất
        
        ## Certificate Management
        ### 🔄 Automated Management
        - **Auto-renewal** gia hạn tự động
        - **Certificate monitoring** giám sát chứng chỉ
        - **Expiry alerts** cảnh báo hết hạn
        - **Bulk management** quản lý hàng loạt
        
        ### 🛠️ Installation Support
        - **Apache/Nginx** máy chủ web
        - **IIS/Tomcat** máy chủ ứng dụng
        - **Load balancers** cân bằng tải
        - **CDN integration** tích hợp CDN
        
        ### 📊 Certificate Analytics
        - **Usage statistics** thống kê sử dụng
        - **Security reports** báo cáo bảo mật
        - **Compliance tracking** theo dõi tuân thủ
        - **Vulnerability scanning** quét lỗ hổng
      `;

      await docsifyInit({
        markdown: {
          homepage: sslCertificateContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('SSL Certificate');
      expect(mainContent.textContent).toContain('chứng chỉ bảo mật SSL/TLS');
      
      // Check certificate types
      expect(mainContent.textContent).toContain('Domain Validated');
      expect(mainContent.textContent).toContain('Organization Validated');
      expect(mainContent.textContent).toContain('Extended Validation');
      
      // Check features table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('256-bit');
      expect(mainContent.textContent).toContain('Green Address Bar');
      
      // Check algorithms
      expect(mainContent.textContent).toContain('RSA 2048/4096');
      expect(mainContent.textContent).toContain('ECC P-256');
      expect(mainContent.textContent).toContain('TLS 1.3');
      
      // Check management features
      expect(mainContent.textContent).toContain('Auto-renewal');
      expect(mainContent.textContent).toContain('Certificate monitoring');
    });
  });

  // WAF Services
  // ---------------------------------------------------------------------------
  describe('WAF Services', () => {
    test('renders WAF page with protection rules', async () => {
      const wafContent = `
        # WAF - Web Application Firewall
        
        ## Giới thiệu
        Tường lửa ứng dụng web bảo vệ khỏi các cuộc tấn công OWASP Top 10.
        
        ## Protection Categories
        ### OWASP Top 10 Protection
        | Rank | Vulnerability | Protection Method |
        |------|---------------|-------------------|
        | A01 | Broken Access Control | Access control rules |
        | A02 | Cryptographic Failures | Encryption validation |
        | A03 | Injection | Input sanitization |
        | A04 | Insecure Design | Security patterns |
        | A05 | Security Misconfiguration | Configuration audit |
        | A06 | Vulnerable Components | Component scanning |
        | A07 | Authentication Failures | Auth validation |
        | A08 | Software Integrity | Integrity checks |
        | A09 | Logging Failures | Security logging |
        | A10 | Server-Side Request Forgery | Request validation |
        
        ## Rule Categories
        ### 🛡️ Core Rule Set
        - **SQL Injection** chống SQL injection
        - **XSS Protection** bảo vệ XSS
        - **CSRF Protection** bảo vệ CSRF
        - **File Upload** kiểm soát upload file
        
        ### 🔍 Advanced Rules
        - **Bot detection** phát hiện bot
        - **Rate limiting** giới hạn tốc độ
        - **Geo-blocking** chặn theo địa lý
        - **IP reputation** danh tiếng IP
        
        ### 📊 Custom Rules
        - **Custom signatures** chữ ký tùy chỉnh
        - **Business logic** logic nghiệp vụ
        - **API protection** bảo vệ API
        - **Mobile app security** bảo mật ứng dụng di động
        
        ## Deployment Modes
        ### Proxy Mode
        - **Reverse proxy** proxy ngược
        - **SSL termination** kết thúc SSL
        - **Load balancing** cân bằng tải
        - **Caching** bộ nhớ đệm
        
        ### Inline Mode
        - **Transparent deployment** triển khai trong suốt
        - **Bridge mode** chế độ cầu nối
        - **Minimal latency** độ trễ tối thiểu
        - **High performance** hiệu suất cao
        
        ## Management Features
        - **Real-time monitoring** giám sát thời gian thực
        - **Attack visualization** trực quan hóa tấn công
        - **False positive tuning** điều chỉnh dương tính giả
        - **Compliance reporting** báo cáo tuân thủ
      `;

      await docsifyInit({
        markdown: {
          homepage: wafContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('WAF');
      expect(mainContent.textContent).toContain('Web Application Firewall');
      
      // Check OWASP Top 10 table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Broken Access Control');
      expect(mainContent.textContent).toContain('Injection');
      expect(mainContent.textContent).toContain('A01');
      expect(mainContent.textContent).toContain('A10');
      
      // Check rule categories
      expect(mainContent.textContent).toContain('Core Rule Set');
      expect(mainContent.textContent).toContain('SQL Injection');
      expect(mainContent.textContent).toContain('XSS Protection');
      
      // Check deployment modes
      expect(mainContent.textContent).toContain('Proxy Mode');
      expect(mainContent.textContent).toContain('Inline Mode');
      expect(mainContent.textContent).toContain('Reverse proxy');
    });
  });

  // Vulnerability Assessment Services
  // ---------------------------------------------------------------------------
  describe('Vulnerability Assessment Services', () => {
    test('renders vulnerability assessment page with scan types', async () => {
      const vulnerabilityAssessmentContent = `
        # Vulnerability Assessment - Đánh giá lỗ hổng bảo mật
        
        ## Giới thiệu
        Dịch vụ đánh giá và quét lỗ hổng bảo mật cho hệ thống và ứng dụng.
        
        ## Scan Types
        ### Network Vulnerability Scan
        - **Port scanning** quét cổng
        - **Service detection** phát hiện dịch vụ
        - **OS fingerprinting** nhận dạng hệ điều hành
        - **Vulnerability identification** nhận dạng lỗ hổng
        
        ### Web Application Scan
        - **OWASP testing** kiểm tra OWASP
        - **Authentication testing** kiểm tra xác thực
        - **Session management** quản lý phiên
        - **Input validation** xác thực đầu vào
        
        ### Database Security Scan
        - **Configuration review** xem xét cấu hình
        - **Access control audit** kiểm toán kiểm soát truy cập
        - **Privilege escalation** leo thang đặc quyền
        - **Data encryption** mã hóa dữ liệu
        
        ## Vulnerability Severity
        | Severity | CVSS Score | Risk Level | Response Time |
        |----------|------------|------------|---------------|
        | Critical | 9.0-10.0 | Very High | 24 hours |
        | High | 7.0-8.9 | High | 72 hours |
        | Medium | 4.0-6.9 | Medium | 1 week |
        | Low | 0.1-3.9 | Low | 1 month |
        | Info | 0.0 | Informational | No action |
        
        ## Assessment Process
        ### 🔍 Discovery Phase
        - **Asset inventory** kiểm kê tài sản
        - **Network mapping** lập bản đồ mạng
        - **Service enumeration** liệt kê dịch vụ
        - **Technology stack** ngăn xếp công nghệ
        
        ### 🎯 Scanning Phase
        - **Automated scanning** quét tự động
        - **Manual testing** kiểm tra thủ công
        - **False positive filtering** lọc dương tính giả
        - **Vulnerability validation** xác thực lỗ hổng
        
        ### 📋 Reporting Phase
        - **Executive summary** tóm tắt điều hành
        - **Technical details** chi tiết kỹ thuật
        - **Risk assessment** đánh giá rủi ro
        - **Remediation guidance** hướng dẫn khắc phục
        
        ## Compliance Standards
        - **PCI DSS** Payment Card Industry
        - **ISO 27001** Information Security
        - **NIST** National Institute Standards
        - **OWASP** Open Web Application Security
      `;

      await docsifyInit({
        markdown: {
          homepage: vulnerabilityAssessmentContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Vulnerability Assessment');
      expect(mainContent.textContent).toContain('đánh giá lỗ hổng bảo mật');
      
      // Check scan types
      expect(mainContent.textContent).toContain('Network Vulnerability Scan');
      expect(mainContent.textContent).toContain('Web Application Scan');
      expect(mainContent.textContent).toContain('Database Security Scan');
      
      // Check severity table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Critical');
      expect(mainContent.textContent).toContain('9.0-10.0');
      expect(mainContent.textContent).toContain('24 hours');
      
      // Check assessment process
      expect(mainContent.textContent).toContain('Discovery Phase');
      expect(mainContent.textContent).toContain('Scanning Phase');
      expect(mainContent.textContent).toContain('Reporting Phase');
      
      // Check compliance standards
      expect(mainContent.textContent).toContain('PCI DSS');
      expect(mainContent.textContent).toContain('ISO 27001');
      expect(mainContent.textContent).toContain('OWASP');
    });
  });

  // Security Monitoring Services
  // ---------------------------------------------------------------------------
  describe('Security Monitoring Services', () => {
    test('renders security monitoring page with SIEM features', async () => {
      const securityMonitoringContent = `
        # Security Monitoring - Giám sát bảo mật 24/7
        
        ## Giới thiệu
        Dịch vụ giám sát bảo mật 24/7 với SIEM và threat intelligence.
        
        ## SIEM Capabilities
        ### 📊 Log Management
        - **Log collection** thu thập log
        - **Log normalization** chuẩn hóa log
        - **Log correlation** tương quan log
        - **Log retention** lưu trữ log
        
        ### 🔍 Threat Detection
        - **Signature-based detection** phát hiện dựa chữ ký
        - **Behavioral analysis** phân tích hành vi
        - **Machine learning** học máy
        - **Threat intelligence** thông tin mối đe dọa
        
        ### ⚡ Incident Response
        - **Real-time alerts** cảnh báo thời gian thực
        - **Automated response** phản ứng tự động
        - **Incident escalation** leo thang sự cố
        - **Forensic analysis** phân tích pháp y
        
        ## Monitoring Scope
        | Component | Monitoring Type | Detection Method |
        |-----------|----------------|------------------|
        | Network | Traffic analysis | Flow monitoring |
        | Endpoints | Host-based | Agent monitoring |
        | Applications | App logs | Log analysis |
        | Databases | Query logs | Anomaly detection |
        | Cloud | API logs | Behavioral analysis |
        
        ## Security Operations Center
        ### 👥 SOC Team
        - **Security analysts** chuyên gia bảo mật
        - **Incident responders** ứng phó sự cố
        - **Threat hunters** săn lùng mối đe dọa
        - **Forensic experts** chuyên gia pháp y
        
        ### 🕐 24/7 Operations
        - **Continuous monitoring** giám sát liên tục
        - **Shift coverage** bảo hiểm ca làm việc
        - **Escalation procedures** quy trình leo thang
        - **Emergency response** ứng phó khẩn cấp
        
        ## Threat Intelligence
        ### 🌐 Intelligence Sources
        - **Commercial feeds** nguồn thương mại
        - **Open source** nguồn mở
        - **Government sources** nguồn chính phủ
        - **Industry sharing** chia sẻ ngành
        
        ### 🎯 IOC Management
        - **Indicators of Compromise** chỉ báo xâm phạm
        - **Threat actor profiling** hồ sơ kẻ tấn công
        - **Attack pattern analysis** phân tích mẫu tấn công
        - **Vulnerability correlation** tương quan lỗ hổng
      `;

      await docsifyInit({
        markdown: {
          homepage: securityMonitoringContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Security Monitoring');
      expect(mainContent.textContent).toContain('giám sát bảo mật 24/7');
      
      // Check SIEM capabilities
      expect(mainContent.textContent).toContain('Log Management');
      expect(mainContent.textContent).toContain('Threat Detection');
      expect(mainContent.textContent).toContain('Incident Response');
      
      // Check monitoring scope table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Network');
      expect(mainContent.textContent).toContain('Endpoints');
      expect(mainContent.textContent).toContain('Applications');
      
      // Check SOC features
      expect(mainContent.textContent).toContain('SOC Team');
      expect(mainContent.textContent).toContain('Security analysts');
      expect(mainContent.textContent).toContain('24/7 Operations');
      
      // Check threat intelligence
      expect(mainContent.textContent).toContain('Intelligence Sources');
      expect(mainContent.textContent).toContain('IOC Management');
      expect(mainContent.textContent).toContain('Indicators of Compromise');
    });
  });
});
