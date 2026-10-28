import docsifyInit from '../helpers/docsify-init.js';

// Enterprise Pages Tests
// -----------------------------------------------------------------------------
describe('Enterprise Pages', () => {
  // Cloud PC Services
  // ---------------------------------------------------------------------------
  describe('Cloud PC Services', () => {
    test('renders cloud PC page with configurations', async () => {
      const cloudPCContent = `
        # Cloud PC - Máy tính đám mây
        
        ## Giới thiệu
        Cloud PC là giải pháp máy tính ảo trên đám mây, cho phép truy cập desktop từ mọi nơi.
        
        ## Cấu hình Cloud PC
        ### Standard Configurations
        | Gói | vCPU | RAM | Storage | GPU | Price |
        |-----|------|-----|---------|-----|-------|
        | Basic | 2 vCPU | 4GB | 128GB SSD | Shared | 500K VND/tháng |
        | Standard | 4 vCPU | 8GB | 256GB SSD | Shared | 800K VND/tháng |
        | Professional | 8 vCPU | 16GB | 512GB SSD | Dedicated | 1.5M VND/tháng |
        | Workstation | 16 vCPU | 32GB | 1TB SSD | High-end GPU | 3M VND/tháng |
        
        ## Tính năng chính
        ### 🖥️ Virtual Desktop
        - **Windows 10/11** hệ điều hành đầy đủ
        - **Office 365** tích hợp sẵn
        - **Multi-monitor** hỗ trợ nhiều màn hình
        - **USB redirection** chuyển hướng USB
        
        ### 🔒 Security & Compliance
        - **Multi-factor authentication** xác thực đa yếu tố
        - **Data encryption** mã hóa dữ liệu
        - **Session recording** ghi lại phiên làm việc
        - **Compliance ready** tuân thủ quy định
        
        ## Use Cases
        - **Remote work** làm việc từ xa
        - **BYOD** bring your own device
        - **Temporary workers** nhân viên tạm thời
        - **Software development** phát triển phần mềm
        - **CAD/CAM workstations** trạm thiết kế
      `;

      await docsifyInit({
        markdown: {
          homepage: cloudPCContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain('Cloud PC');
      expect(mainContent.textContent).toContain('máy tính đám mây');
      
      // Check configurations table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Basic');
      expect(mainContent.textContent).toContain('Workstation');
      
      // Check features
      expect(mainContent.textContent).toContain('Virtual Desktop');
      expect(mainContent.textContent).toContain('Windows 10/11');
      expect(mainContent.textContent).toContain('Multi-factor authentication');
      
      // Check use cases
      expect(mainContent.textContent).toContain('Remote work');
      expect(mainContent.textContent).toContain('BYOD');
    });
  });

  // Video Conference Services
  // ---------------------------------------------------------------------------
  describe('Video Conference Services', () => {
    test('renders video conference page with features', async () => {
      const videoConferenceContent = `
        # Video Conference - Hội nghị truyền hình
        
        ## Giới thiệu
        Giải pháp hội nghị truyền hình chuyên nghiệp với chất lượng HD/4K.
        
        ## Gói dịch vụ
        ### Meeting Plans
        | Plan | Participants | Duration | Recording | Price |
        |------|-------------|----------|-----------|-------|
        | Basic | 25 người | 40 phút | Không | 200K VND/tháng |
        | Pro | 100 người | Không giới hạn | 1GB | 500K VND/tháng |
        | Business | 300 người | Không giới hạn | 10GB | 1M VND/tháng |
        | Enterprise | 1000 người | Không giới hạn | 100GB | 2M VND/tháng |
        
        ## Tính năng nâng cao
        ### 📹 Video & Audio
        - **4K video quality** chất lượng video 4K
        - **Noise cancellation** khử tiếng ồn
        - **Virtual backgrounds** nền ảo
        - **Beauty filters** bộ lọc làm đẹp
        
        ### 🤝 Collaboration
        - **Screen sharing** chia sẻ màn hình
        - **Whiteboard** bảng trắng tương tác
        - **File sharing** chia sẻ tệp tin
        - **Chat messaging** tin nhắn chat
        
        ### 🔐 Security Features
        - **End-to-end encryption** mã hóa đầu cuối
        - **Meeting passwords** mật khẩu phòng họp
        - **Waiting room** phòng chờ
        - **Host controls** điều khiển chủ phòng
      `;

      await docsifyInit({
        markdown: {
          homepage: videoConferenceContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Video Conference');
      expect(mainContent.textContent).toContain('hội nghị truyền hình');
      
      // Check plans table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Basic');
      expect(mainContent.textContent).toContain('Enterprise');
      
      // Check features
      expect(mainContent.textContent).toContain('4K video quality');
      expect(mainContent.textContent).toContain('Screen sharing');
      expect(mainContent.textContent).toContain('End-to-end encryption');
    });
  });

  // Email Hosting Services
  // ---------------------------------------------------------------------------
  describe('Email Hosting Services', () => {
    test('renders email hosting page with plans', async () => {
      const emailHostingContent = `
        # Email Hosting - Dịch vụ email doanh nghiệp
        
        ## Giới thiệu
        Email hosting chuyên nghiệp với tên miền riêng và bảo mật cao.
        
        ## Gói email hosting
        ### Business Email Plans
        | Plan | Storage | Users | Features | Price |
        |------|---------|-------|----------|-------|
        | Starter | 5GB/user | 5 users | Basic | 50K VND/user/tháng |
        | Business | 25GB/user | 25 users | Advanced | 80K VND/user/tháng |
        | Enterprise | 100GB/user | Unlimited | Premium | 120K VND/user/tháng |
        
        ## Tính năng chính
        ### 📧 Email Features
        - **Custom domain** tên miền riêng
        - **IMAP/POP3/SMTP** giao thức đầy đủ
        - **Mobile sync** đồng bộ di động
        - **Webmail interface** giao diện web
        
        ### 🛡️ Security & Anti-Spam
        - **Advanced spam filtering** lọc spam nâng cao
        - **Virus protection** bảo vệ virus
        - **Email encryption** mã hóa email
        - **Two-factor authentication** xác thực 2 yếu tố
        
        ### 📊 Management Tools
        - **Admin console** bảng điều khiển quản trị
        - **User management** quản lý người dùng
        - **Email archiving** lưu trữ email
        - **Backup & restore** sao lưu và khôi phục
        
        ## Compliance & Standards
        - **GDPR compliant** tuân thủ GDPR
        - **ISO 27001** chứng nhận bảo mật
        - **99.9% uptime SLA** cam kết độ sẵn sàng
      `;

      await docsifyInit({
        markdown: {
          homepage: emailHostingContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Email Hosting');
      expect(mainContent.textContent).toContain('email doanh nghiệp');
      
      // Check plans table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Starter');
      expect(mainContent.textContent).toContain('Enterprise');
      
      // Check features
      expect(mainContent.textContent).toContain('Custom domain');
      expect(mainContent.textContent).toContain('Advanced spam filtering');
      expect(mainContent.textContent).toContain('GDPR compliant');
    });
  });

  // Domain & Hosting Services
  // ---------------------------------------------------------------------------
  describe('Domain & Hosting Services', () => {
    test('renders domain hosting page with services', async () => {
      const domainHostingContent = `
        # Domain & Hosting - Tên miền và hosting
        
        ## Giới thiệu
        Dịch vụ đăng ký tên miền và web hosting chuyên nghiệp.
        
        ## Domain Registration
        ### Supported TLDs
        | TLD | Price/year | Renewal | Transfer |
        |-----|------------|---------|----------|
        | .com | 300K VND | 350K VND | 300K VND |
        | .vn | 400K VND | 450K VND | 400K VND |
        | .com.vn | 350K VND | 400K VND | 350K VND |
        | .org | 320K VND | 370K VND | 320K VND |
        
        ## Web Hosting Plans
        ### Shared Hosting
        | Plan | Storage | Bandwidth | Domains | Price |
        |------|---------|-----------|---------|-------|
        | Basic | 5GB | 50GB | 1 domain | 100K VND/tháng |
        | Standard | 20GB | 200GB | 5 domains | 200K VND/tháng |
        | Premium | 50GB | 500GB | 15 domains | 400K VND/tháng |
        
        ## Features
        ### 🌐 Web Technologies
        - **PHP 8.x** phiên bản mới nhất
        - **MySQL/MariaDB** cơ sở dữ liệu
        - **SSL certificates** chứng chỉ SSL miễn phí
        - **CDN integration** tích hợp CDN
        
        ### 🛠️ Management Tools
        - **cPanel/DirectAdmin** bảng điều khiển
        - **One-click installs** cài đặt 1 click
        - **File manager** quản lý tệp tin
        - **Email accounts** tài khoản email
      `;

      await docsifyInit({
        markdown: {
          homepage: domainHostingContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Domain & Hosting');
      expect(mainContent.textContent).toContain('tên miền và hosting');
      
      // Check tables
      const tables = mainContent.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(2);
      expect(mainContent.textContent).toContain('.com');
      expect(mainContent.textContent).toContain('.vn');
      
      // Check features
      expect(mainContent.textContent).toContain('PHP 8.x');
      expect(mainContent.textContent).toContain('SSL certificates');
      expect(mainContent.textContent).toContain('cPanel');
    });
  });

  // Backup Solutions
  // ---------------------------------------------------------------------------
  describe('Backup Solutions', () => {
    test('renders backup solutions page with options', async () => {
      const backupSolutionsContent = `
        # Backup Solutions - Giải pháp sao lưu
        
        ## Giới thiệu
        Giải pháp sao lưu dữ liệu toàn diện cho doanh nghiệp.
        
        ## Backup Types
        ### File & Folder Backup
        - **Incremental backup** sao lưu tăng dần
        - **Differential backup** sao lưu khác biệt
        - **Full backup** sao lưu đầy đủ
        - **Scheduled backup** sao lưu theo lịch
        
        ### System Backup
        - **Bare metal recovery** khôi phục toàn bộ
        - **System image** ảnh hệ thống
        - **Application backup** sao lưu ứng dụng
        - **Database backup** sao lưu cơ sở dữ liệu
        
        ## Storage Options
        | Type | Capacity | Speed | Retention | Price |
        |------|----------|-------|-----------|-------|
        | Local | 1TB-10TB | High | 30 days | 2M VND/TB/tháng |
        | Cloud | Unlimited | Medium | 1 year | 1M VND/TB/tháng |
        | Hybrid | Custom | Variable | Custom | Liên hệ |
        
        ## Features
        ### 🔐 Security
        - **AES-256 encryption** mã hóa AES-256
        - **Secure transmission** truyền tải bảo mật
        - **Access controls** kiểm soát truy cập
        - **Audit logs** nhật ký kiểm toán
        
        ### ⚡ Performance
        - **Deduplication** loại bỏ trùng lặp
        - **Compression** nén dữ liệu
        - **Bandwidth throttling** giới hạn băng thông
        - **Resume capability** khả năng tiếp tục
      `;

      await docsifyInit({
        markdown: {
          homepage: backupSolutionsContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Backup Solutions');
      expect(mainContent.textContent).toContain('giải pháp sao lưu');
      
      // Check backup types
      expect(mainContent.textContent).toContain('Incremental backup');
      expect(mainContent.textContent).toContain('Bare metal recovery');
      
      // Check storage options table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Local');
      expect(mainContent.textContent).toContain('Cloud');
      expect(mainContent.textContent).toContain('Hybrid');
      
      // Check features
      expect(mainContent.textContent).toContain('AES-256 encryption');
      expect(mainContent.textContent).toContain('Deduplication');
    });
  });
});
