import docsifyInit from '../helpers/docsify-init.js';

// Network Pages Tests
// -----------------------------------------------------------------------------
describe('Network Pages', () => {
  // Bandwidth Services
  // ---------------------------------------------------------------------------
  describe('Bandwidth Services', () => {
    test('renders bandwidth page with service tiers', async () => {
      const bandwidthContent = `
        # Bandwidth - Dịch vụ băng thông internet
        
        ## Giới thiệu
        Dịch vụ băng thông internet với SLA cao và multiple ISP redundancy.
        
        ## Gói băng thông
        ### Dedicated Internet Access
        | Speed | Commit Rate | Burst Rate | SLA | Price |
        |-------|-------------|------------|-----|-------|
        | 10Mbps | 10Mbps | 20Mbps | 99.5% | 5M VND/tháng |
        | 50Mbps | 50Mbps | 100Mbps | 99.7% | 20M VND/tháng |
        | 100Mbps | 100Mbps | 200Mbps | 99.9% | 35M VND/tháng |
        | 1Gbps | 1Gbps | 1Gbps | 99.95% | 200M VND/tháng |
        
        ## Tính năng chính
        ### 🌐 Multi-ISP Redundancy
        - **Primary ISP**: Viettel, VNPT, FPT
        - **Backup ISP**: International carriers
        - **Automatic failover** chuyển đổi tự động
        - **Load balancing** cân bằng tải
        
        ### 📊 Traffic Management
        - **QoS policies** chính sách QoS
        - **Bandwidth shaping** định hình băng thông
        - **Traffic prioritization** ưu tiên lưu lượng
        - **DDoS protection** bảo vệ DDoS
        
        ### 🔍 Monitoring & Reporting
        - **Real-time monitoring** giám sát thời gian thực
        - **Traffic analytics** phân tích lưu lượng
        - **Performance reports** báo cáo hiệu suất
        - **SLA reporting** báo cáo SLA
        
        ## Network Infrastructure
        - **Tier-1 carriers** nhà mạng Tier-1
        - **Multiple data centers** nhiều trung tâm dữ liệu
        - **Redundant paths** đường dẫn dự phòng
        - **24/7 NOC** trung tâm vận hành mạng
      `;

      await docsifyInit({
        markdown: {
          homepage: bandwidthContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain('Bandwidth');
      expect(mainContent.textContent).toContain('băng thông internet');
      
      // Check bandwidth packages table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('10Mbps');
      expect(mainContent.textContent).toContain('1Gbps');
      
      // Check features
      expect(mainContent.textContent).toContain('Multi-ISP Redundancy');
      expect(mainContent.textContent).toContain('QoS policies');
      expect(mainContent.textContent).toContain('Real-time monitoring');
      
      // Check infrastructure
      expect(mainContent.textContent).toContain('Tier-1 carriers');
      expect(mainContent.textContent).toContain('24/7 NOC');
    });
  });

  // CDN Services
  // ---------------------------------------------------------------------------
  describe('CDN Services', () => {
    test('renders CDN page with global network', async () => {
      const cdnContent = `
        # Content Delivery Network - Mạng phân phối nội dung
        
        ## Giới thiệu
        Mạng phân phối nội dung toàn cầu để tăng tốc website và ứng dụng.
        
        ## Global PoP Network
        ### Asia Pacific
        - **Vietnam**: Hanoi, Ho Chi Minh City
        - **Singapore**: 3 locations
        - **Japan**: Tokyo, Osaka
        - **Korea**: Seoul
        - **Hong Kong**: 2 locations
        
        ### Performance Metrics
        | Region | Latency | Throughput | Availability |
        |--------|---------|------------|--------------|
        | Vietnam | < 5ms | 10Gbps | 99.99% |
        | ASEAN | < 20ms | 5Gbps | 99.95% |
        | Asia | < 50ms | 2Gbps | 99.9% |
        | Global | < 100ms | 1Gbps | 99.5% |
        
        ## CDN Features
        ### 🚀 Performance Optimization
        - **HTTP/2 & HTTP/3** giao thức mới
        - **Brotli compression** nén Brotli
        - **Image optimization** tối ưu hình ảnh
        - **Minification** thu gọn code
        
        ### 🛡️ Security Features
        - **DDoS protection** bảo vệ DDoS
        - **Web Application Firewall** tường lửa ứng dụng
        - **SSL/TLS termination** kết thúc SSL/TLS
        - **Bot management** quản lý bot
        
        ### 📊 Analytics & Insights
        - **Real-time analytics** phân tích thời gian thực
        - **Cache hit ratio** tỷ lệ cache hit
        - **Origin offload** giảm tải origin
        - **Geographic reports** báo cáo địa lý
      `;

      await docsifyInit({
        markdown: {
          homepage: cdnContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Content Delivery Network');
      expect(mainContent.textContent).toContain('phân phối nội dung');
      
      // Check PoP locations
      expect(mainContent.textContent).toContain('Asia Pacific');
      expect(mainContent.textContent).toContain('Vietnam');
      expect(mainContent.textContent).toContain('Singapore');
      
      // Check performance table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('< 5ms');
      expect(mainContent.textContent).toContain('99.99%');
      
      // Check features
      expect(mainContent.textContent).toContain('HTTP/2 & HTTP/3');
      expect(mainContent.textContent).toContain('DDoS protection');
      expect(mainContent.textContent).toContain('Real-time analytics');
    });
  });

  // DNS Services
  // ---------------------------------------------------------------------------
  describe('DNS Services', () => {
    test('renders DNS service page with features', async () => {
      const dnsContent = `
        # DNS Service - Dịch vụ DNS managed
        
        ## Giới thiệu
        Dịch vụ DNS managed với high availability và global anycast.
        
        ## DNS Infrastructure
        ### Anycast Network
        - **Global anycast** mạng anycast toàn cầu
        - **Multiple PoPs** nhiều điểm hiện diện
        - **Automatic failover** chuyển đổi tự động
        - **Load balancing** cân bằng tải
        
        ### Performance Specs
        | Metric | Value | SLA |
        |--------|-------|-----|
        | Query Response Time | < 30ms | 99.9% |
        | Uptime | 99.99% | Guaranteed |
        | Propagation Time | < 60s | Average |
        | Queries/second | 1M+ | Capacity |
        
        ## DNS Record Types
        ### Supported Records
        - **A/AAAA** IPv4/IPv6 addresses
        - **CNAME** canonical names
        - **MX** mail exchange
        - **TXT** text records
        - **SRV** service records
        - **NS** name servers
        - **PTR** reverse DNS
        
        ## Advanced Features
        ### 🌍 Geographic DNS
        - **GeoDNS routing** định tuyến theo địa lý
        - **Country-based** theo quốc gia
        - **Continent-based** theo châu lục
        - **Custom regions** vùng tùy chỉnh
        
        ### 🔄 Health Checks
        - **HTTP/HTTPS monitoring** giám sát HTTP/HTTPS
        - **TCP port checks** kiểm tra cổng TCP
        - **ICMP ping** ping ICMP
        - **Custom scripts** script tùy chỉnh
        
        ### 📊 Analytics
        - **Query statistics** thống kê truy vấn
        - **Geographic distribution** phân bố địa lý
        - **Response time metrics** số liệu thời gian phản hồi
        - **Error rate monitoring** giám sát tỷ lệ lỗi
      `;

      await docsifyInit({
        markdown: {
          homepage: dnsContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('DNS Service');
      expect(mainContent.textContent).toContain('DNS managed');
      
      // Check infrastructure
      expect(mainContent.textContent).toContain('Anycast Network');
      expect(mainContent.textContent).toContain('Global anycast');
      
      // Check performance table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('< 30ms');
      expect(mainContent.textContent).toContain('99.99%');
      
      // Check record types
      expect(mainContent.textContent).toContain('A/AAAA');
      expect(mainContent.textContent).toContain('CNAME');
      expect(mainContent.textContent).toContain('MX');
      
      // Check advanced features
      expect(mainContent.textContent).toContain('GeoDNS routing');
      expect(mainContent.textContent).toContain('Health Checks');
    });
  });

  // Load Balancer Services
  // ---------------------------------------------------------------------------
  describe('Load Balancer Services', () => {
    test('renders load balancer page with algorithms', async () => {
      const loadBalancerContent = `
        # Load Balancer - Cân bằng tải
        
        ## Giới thiệu
        Dịch vụ cân bằng tải để phân phối traffic và đảm bảo high availability.
        
        ## Load Balancing Types
        ### Layer 4 (Transport Layer)
        - **TCP load balancing** cân bằng tải TCP
        - **UDP load balancing** cân bằng tải UDP
        - **High performance** hiệu suất cao
        - **Low latency** độ trễ thấp
        
        ### Layer 7 (Application Layer)
        - **HTTP/HTTPS** giao thức HTTP/HTTPS
        - **Content-based routing** định tuyến theo nội dung
        - **SSL termination** kết thúc SSL
        - **Advanced features** tính năng nâng cao
        
        ## Algorithms
        | Algorithm | Description | Use Case |
        |-----------|-------------|----------|
        | Round Robin | Phân phối tuần tự | Servers đồng nhất |
        | Weighted Round Robin | Phân phối có trọng số | Servers khác nhau |
        | Least Connections | Ít kết nối nhất | Long-lived connections |
        | IP Hash | Hash theo IP | Session persistence |
        | Least Response Time | Thời gian phản hồi ít nhất | Performance critical |
        
        ## Health Checks
        ### Monitoring Options
        - **HTTP health checks** kiểm tra HTTP
        - **TCP port checks** kiểm tra cổng TCP
        - **Custom scripts** script tùy chỉnh
        - **SSL certificate checks** kiểm tra chứng chỉ SSL
        
        ### Failover Behavior
        - **Automatic failover** chuyển đổi tự động
        - **Graceful degradation** giảm tải nhẹ nhàng
        - **Circuit breaker** ngắt mạch
        - **Retry mechanisms** cơ chế thử lại
      `;

      await docsifyInit({
        markdown: {
          homepage: loadBalancerContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Load Balancer');
      expect(mainContent.textContent).toContain('cân bằng tải');
      
      // Check load balancing types
      expect(mainContent.textContent).toContain('Layer 4');
      expect(mainContent.textContent).toContain('Layer 7');
      expect(mainContent.textContent).toContain('TCP load balancing');
      
      // Check algorithms table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Round Robin');
      expect(mainContent.textContent).toContain('Least Connections');
      expect(mainContent.textContent).toContain('IP Hash');
      
      // Check health checks
      expect(mainContent.textContent).toContain('HTTP health checks');
      expect(mainContent.textContent).toContain('Automatic failover');
    });
  });

  // VPN Services
  // ---------------------------------------------------------------------------
  describe('VPN Services', () => {
    test('renders VPN page with connection types', async () => {
      const vpnContent = `
        # VPN - Virtual Private Network
        
        ## Giới thiệu
        Dịch vụ VPN bảo mật cho kết nối từ xa và site-to-site.
        
        ## VPN Types
        ### Site-to-Site VPN
        - **IPSec tunnels** đường hầm IPSec
        - **BGP routing** định tuyến BGP
        - **Redundant connections** kết nối dự phòng
        - **High throughput** thông lượng cao
        
        ### Remote Access VPN
        - **SSL VPN** VPN SSL
        - **IPSec client** client IPSec
        - **Multi-platform** đa nền tảng
        - **Mobile support** hỗ trợ di động
        
        ## VPN Specifications
        | Type | Throughput | Concurrent Users | Encryption | Price |
        |------|------------|------------------|------------|-------|
        | Basic SSL | 100Mbps | 50 users | AES-256 | 2M VND/tháng |
        | Standard SSL | 500Mbps | 200 users | AES-256 | 5M VND/tháng |
        | Enterprise SSL | 1Gbps | 1000 users | AES-256 | 10M VND/tháng |
        | Site-to-Site | 10Gbps | N/A | AES-256 | 15M VND/tháng |
        
        ## Security Features
        ### 🔐 Encryption
        - **AES-256** mã hóa AES-256
        - **Perfect Forward Secrecy** bảo mật hoàn hảo
        - **Certificate-based auth** xác thực chứng chỉ
        - **Multi-factor authentication** xác thực đa yếu tố
        
        ### 🛡️ Access Control
        - **Role-based access** truy cập theo vai trò
        - **Network segmentation** phân đoạn mạng
        - **Application control** kiểm soát ứng dụng
        - **Bandwidth control** kiểm soát băng thông
        
        ### 📊 Monitoring
        - **Connection logs** nhật ký kết nối
        - **Traffic analysis** phân tích lưu lượng
        - **User activity** hoạt động người dùng
        - **Security events** sự kiện bảo mật
      `;

      await docsifyInit({
        markdown: {
          homepage: vpnContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('VPN');
      expect(mainContent.textContent).toContain('Virtual Private Network');
      
      // Check VPN types
      expect(mainContent.textContent).toContain('Site-to-Site VPN');
      expect(mainContent.textContent).toContain('Remote Access VPN');
      expect(mainContent.textContent).toContain('IPSec tunnels');
      
      // Check specifications table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Basic SSL');
      expect(mainContent.textContent).toContain('Enterprise SSL');
      
      // Check security features
      expect(mainContent.textContent).toContain('AES-256');
      expect(mainContent.textContent).toContain('Perfect Forward Secrecy');
      expect(mainContent.textContent).toContain('Role-based access');
    });
  });

  // Direct Connect Services
  // ---------------------------------------------------------------------------
  describe('Direct Connect Services', () => {
    test('renders direct connect page with connectivity options', async () => {
      const directConnectContent = `
        # Direct Connect - Kết nối trực tiếp chuyên dụng
        
        ## Giới thiệu
        Kết nối trực tiếp chuyên dụng với băng thông cao và độ trễ thấp.
        
        ## Connection Types
        ### Dedicated Connections
        - **1Gbps** kết nối 1Gbps
        - **10Gbps** kết nối 10Gbps
        - **100Gbps** kết nối 100Gbps
        - **Custom bandwidth** băng thông tùy chỉnh
        
        ### Virtual Interfaces
        - **Private VIF** giao diện ảo riêng
        - **Public VIF** giao diện ảo công cộng
        - **Transit VIF** giao diện ảo transit
        - **VLAN tagging** gắn thẻ VLAN
        
        ## Performance Benefits
        | Metric | Internet | Direct Connect | Improvement |
        |--------|----------|----------------|-------------|
        | Latency | 50-100ms | 5-20ms | 5x better |
        | Jitter | 10-50ms | < 1ms | 50x better |
        | Packet Loss | 0.1-1% | < 0.01% | 100x better |
        | Bandwidth | Variable | Guaranteed | Consistent |
        
        ## Use Cases
        ### 🏢 Enterprise Applications
        - **ERP systems** hệ thống ERP
        - **Database replication** sao chép cơ sở dữ liệu
        - **Backup & DR** sao lưu và khôi phục
        - **Real-time applications** ứng dụng thời gian thực
        
        ### 🎥 Media & Content
        - **Video streaming** phát video trực tuyến
        - **Content distribution** phân phối nội dung
        - **Live broadcasting** phát sóng trực tiếp
        - **Media processing** xử lý media
        
        ## Implementation
        - **Cross-connect** kết nối chéo
        - **BGP routing** định tuyến BGP
        - **Redundant paths** đường dẫn dự phòng
        - **24/7 monitoring** giám sát 24/7
      `;

      await docsifyInit({
        markdown: {
          homepage: directConnectContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Direct Connect');
      expect(mainContent.textContent).toContain('trực tiếp chuyên dụng');
      
      // Check connection types
      expect(mainContent.textContent).toContain('Dedicated Connections');
      expect(mainContent.textContent).toContain('Virtual Interfaces');
      expect(mainContent.textContent).toContain('1Gbps');
      expect(mainContent.textContent).toContain('100Gbps');
      
      // Check performance table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('5x better');
      expect(mainContent.textContent).toContain('100x better');
      
      // Check use cases
      expect(mainContent.textContent).toContain('Enterprise Applications');
      expect(mainContent.textContent).toContain('Media & Content');
      expect(mainContent.textContent).toContain('ERP systems');
    });
  });
});
