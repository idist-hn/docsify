import docsifyInit from '../helpers/docsify-init.js';

// Support Pages Tests
// -----------------------------------------------------------------------------
describe('Support Pages', () => {
  // Contact Support
  // ---------------------------------------------------------------------------
  describe('Contact Support', () => {
    test('renders contact support page with multiple channels', async () => {
      const contactContent = `
        # Contact - Liên hệ hỗ trợ
        
        ## Giới thiệu
        Các kênh liên hệ và hỗ trợ khách hàng 24/7.
        
        ## Kênh hỗ trợ chính
        ### 📞 Hotline 24/7
        - **Hotline**: 1900 8098
        - **International**: +84 24 3577 9999
        - **Emergency**: 1900 1234 (24/7)
        - **Sales**: 1900 5678 (8AM-6PM)
        
        ### 📧 Email Support
        - **Technical**: support@viettelidc.com.vn
        - **Sales**: sales@viettelidc.com.vn
        - **Billing**: billing@viettelidc.com.vn
        - **Emergency**: emergency@viettelidc.com.vn
        
        ### 💬 Live Chat
        - **Portal chat** trong customer portal
        - **Website chat** trên website chính
        - **Mobile app** ứng dụng di động
        - **Response time** < 5 phút
        
        ## Mức độ ưu tiên
        | Priority | Response Time | Resolution Time | Channels |
        |----------|---------------|-----------------|----------|
        | Critical | 15 minutes | 4 hours | Phone, Email, Chat |
        | High | 1 hour | 8 hours | Phone, Email, Chat |
        | Medium | 4 hours | 24 hours | Email, Chat, Ticket |
        | Low | 8 hours | 72 hours | Email, Ticket |
        
        ## Văn phòng đại diện
        ### Hà Nội
        - **Địa chỉ**: Tầng 8, Tòa nhà Viettel, 285 Cách Mạng Tháng 8
        - **Điện thoại**: 024 3577 9999
        - **Giờ làm việc**: 8:00 - 17:30 (T2-T6)
        - **Email**: hanoi@viettelidc.com.vn
        
        ### TP. Hồ Chí Minh
        - **Địa chỉ**: Tầng 10, Tòa nhà Viettel, 285 Cách Mạng Tháng 8
        - **Điện thoại**: 028 3577 9999
        - **Giờ làm việc**: 8:00 - 17:30 (T2-T6)
        - **Email**: hcm@viettelidc.com.vn
        
        ### Đà Nẵng
        - **Địa chỉ**: Tầng 5, Tòa nhà Viettel, 01 Lê Duẩn
        - **Điện thoại**: 0236 3577 999
        - **Giờ làm việc**: 8:00 - 17:30 (T2-T6)
        - **Email**: danang@viettelidc.com.vn
        
        ## Hỗ trợ kỹ thuật
        ### Remote Support
        - **TeamViewer** hỗ trợ từ xa
        - **SSH access** truy cập SSH
        - **Screen sharing** chia sẻ màn hình
        - **Remote desktop** desktop từ xa
        
        ### On-site Support
        - **Data center visit** thăm data center
        - **Hardware support** hỗ trợ phần cứng
        - **Installation** cài đặt thiết bị
        - **Maintenance** bảo trì định kỳ
        
        ## Self-service Options
        ### Knowledge Base
        - **Documentation** tài liệu hướng dẫn
        - **Video tutorials** video hướng dẫn
        - **FAQ** câu hỏi thường gặp
        - **Best practices** thực hành tốt nhất
        
        ### Community Forum
        - **User discussions** thảo luận người dùng
        - **Expert answers** câu trả lời chuyên gia
        - **Code samples** mẫu code
        - **Use cases** trường hợp sử dụng
      `;

      await docsifyInit({
        markdown: {
          homepage: contactContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain('Contact');
      expect(mainContent.textContent).toContain('liên hệ hỗ trợ');
      
      // Check support channels
      expect(mainContent.textContent).toContain('Hotline 24/7');
      expect(mainContent.textContent).toContain('Email Support');
      expect(mainContent.textContent).toContain('Live Chat');
      expect(mainContent.textContent).toContain('1900 8098');
      
      // Check priority table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Critical');
      expect(mainContent.textContent).toContain('15 minutes');
      expect(mainContent.textContent).toContain('4 hours');
      
      // Check office locations
      expect(mainContent.textContent).toContain('Hà Nội');
      expect(mainContent.textContent).toContain('TP. Hồ Chí Minh');
      expect(mainContent.textContent).toContain('Đà Nẵng');
      expect(mainContent.textContent).toContain('285 Cách Mạng Tháng 8');
      
      // Check support types
      expect(mainContent.textContent).toContain('Remote Support');
      expect(mainContent.textContent).toContain('On-site Support');
      expect(mainContent.textContent).toContain('TeamViewer');
      
      // Check self-service
      expect(mainContent.textContent).toContain('Knowledge Base');
      expect(mainContent.textContent).toContain('Community Forum');
    });
  });

  // SLA Documentation
  // ---------------------------------------------------------------------------
  describe('SLA Documentation', () => {
    test('renders SLA page with service commitments', async () => {
      const slaContent = `
        # SLA - Service Level Agreement
        
        ## Giới thiệu
        Cam kết chất lượng dịch vụ và bồi thường khi không đạt SLA.
        
        ## Compute SLA
        ### vServer Availability
        | Service Tier | Monthly Uptime | Downtime/Month | Credit |
        |--------------|----------------|----------------|--------|
        | Basic | 99.5% | 3.6 hours | 10% |
        | Standard | 99.9% | 43 minutes | 25% |
        | Premium | 99.95% | 22 minutes | 50% |
        | Enterprise | 99.99% | 4.3 minutes | 100% |
        
        ### Performance Guarantees
        - **CPU performance** 100% của allocated vCPU
        - **Memory access** full speed RAM access
        - **Network bandwidth** guaranteed minimum
        - **Storage IOPS** committed IOPS levels
        
        ## Network SLA
        ### Connectivity
        - **Internet connectivity** 99.9% uptime
        - **Internal network** 99.99% uptime
        - **Cross-AZ connectivity** 99.95% uptime
        - **VPN connectivity** 99.9% uptime
        
        ### Performance Metrics
        - **Latency** < 5ms within same AZ
        - **Packet loss** < 0.1% under normal conditions
        - **Bandwidth** 95th percentile guarantee
        - **Jitter** < 1ms for real-time applications
        
        ## Storage SLA
        ### Availability Commitments
        | Storage Type | Availability | Durability | IOPS |
        |--------------|-------------|------------|------|
        | Block Storage | 99.999% | 99.999999999% | Guaranteed |
        | Object Storage | 99.9% | 99.999999999% | Best effort |
        | File Storage | 99.99% | 99.999999999% | Guaranteed |
        | Backup Storage | 99.9% | 99.999999999% | Best effort |
        
        ### Data Protection
        - **Backup frequency** daily automated backups
        - **Retention period** configurable up to 7 years
        - **Recovery time** < 4 hours for critical data
        - **Recovery point** < 1 hour data loss maximum
        
        ## Support SLA
        ### Response Times
        | Severity | Description | Response Time | Resolution Target |
        |----------|-------------|---------------|-------------------|
        | Critical | Service down | 15 minutes | 4 hours |
        | High | Major impact | 1 hour | 8 hours |
        | Medium | Minor impact | 4 hours | 24 hours |
        | Low | General inquiry | 8 hours | 72 hours |
        
        ### Support Channels
        - **24/7 phone support** for Critical/High issues
        - **Email support** for all severity levels
        - **Live chat** during business hours
        - **On-site support** for Enterprise customers
        
        ## Security SLA
        ### Incident Response
        - **Security incident detection** < 15 minutes
        - **Initial response** < 30 minutes
        - **Containment** < 2 hours
        - **Full resolution** < 24 hours
        
        ### Compliance Commitments
        - **ISO 27001** certified processes
        - **SOC 2 Type II** annual audits
        - **PCI DSS** compliance for payment data
        - **GDPR** compliance for EU data
        
        ## SLA Credits
        ### Credit Calculation
        - **Service credits** applied to next month's bill
        - **Maximum credit** 100% of monthly service fee
        - **Claim period** within 30 days of incident
        - **Proof required** monitoring data and logs
        
        ### Exclusions
        - **Planned maintenance** with 48-hour notice
        - **Customer-caused outages** configuration errors
        - **Force majeure** natural disasters, war, etc.
        - **Third-party services** external dependencies
        
        ## Monitoring and Reporting
        ### Real-time Monitoring
        - **Service status dashboard** public status page
        - **Performance metrics** real-time graphs
        - **Alert notifications** proactive alerts
        - **Historical data** 12-month retention
        
        ### Monthly Reports
        - **Availability reports** detailed uptime statistics
        - **Performance reports** latency and throughput
        - **Incident reports** root cause analysis
        - **Trend analysis** capacity and performance trends
      `;

      await docsifyInit({
        markdown: {
          homepage: slaContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('SLA');
      expect(mainContent.textContent).toContain('Service Level Agreement');
      
      // Check compute SLA table
      const tables = mainContent.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(4);
      expect(mainContent.textContent).toContain('vServer Availability');
      expect(mainContent.textContent).toContain('99.5%');
      expect(mainContent.textContent).toContain('99.99%');
      
      // Check network SLA
      expect(mainContent.textContent).toContain('Network SLA');
      expect(mainContent.textContent).toContain('Internet connectivity');
      expect(mainContent.textContent).toContain('< 5ms');
      
      // Check storage SLA
      expect(mainContent.textContent).toContain('Storage SLA');
      expect(mainContent.textContent).toContain('Block Storage');
      expect(mainContent.textContent).toContain('99.999%');
      
      // Check support SLA
      expect(mainContent.textContent).toContain('Support SLA');
      expect(mainContent.textContent).toContain('Response Times');
      expect(mainContent.textContent).toContain('15 minutes');
      
      // Check security and credits
      expect(mainContent.textContent).toContain('Security SLA');
      expect(mainContent.textContent).toContain('SLA Credits');
      expect(mainContent.textContent).toContain('ISO 27001');
    });
  });

  // Training Documentation
  // ---------------------------------------------------------------------------
  describe('Training Documentation', () => {
    test('renders training page with course offerings', async () => {
      const trainingContent = `
        # Training - Đào tạo và chứng chỉ
        
        ## Giới thiệu
        Chương trình đào tạo và chứng chỉ cho Viettel IDC Cloud.
        
        ## Khóa học cơ bản
        ### Cloud Fundamentals
        - **Thời lượng**: 2 ngày
        - **Định dạng**: Online/Offline
        - **Đối tượng**: Người mới bắt đầu
        - **Chứng chỉ**: Cloud Practitioner
        
        ### Infrastructure Essentials
        - **Thời lượng**: 3 ngày
        - **Định dạng**: Hands-on lab
        - **Đối tượng**: System Admin
        - **Chứng chỉ**: Infrastructure Associate
        
        ## Khóa học nâng cao
        | Course | Duration | Level | Certification |
        |--------|----------|-------|---------------|
        | Cloud Architecture | 5 days | Advanced | Solutions Architect |
        | DevOps Engineering | 4 days | Advanced | DevOps Engineer |
        | Security Specialist | 3 days | Expert | Security Specialist |
        | Data Engineering | 4 days | Advanced | Data Engineer |
        
        ## Chương trình chứng chỉ
        ### Certification Paths
        #### Cloud Practitioner Track
        1. **Cloud Fundamentals** (2 days)
        2. **Exam preparation** (1 day)
        3. **Certification exam** (2 hours)
        4. **Continuing education** (20 hours/year)
        
        #### Solutions Architect Track
        1. **Infrastructure Essentials** (3 days)
        2. **Cloud Architecture** (5 days)
        3. **Capstone project** (2 weeks)
        4. **Certification exam** (3 hours)
        
        ### Exam Information
        - **Exam format**: Multiple choice + hands-on
        - **Passing score**: 70%
        - **Validity**: 3 years
        - **Recertification**: Required every 3 years
        
        ## Phương thức đào tạo
        ### Instructor-led Training
        - **Classroom training** đào tạo tại lớp
        - **Virtual classroom** lớp học ảo
        - **Expert instructors** giảng viên chuyên gia
        - **Interactive sessions** phiên tương tác
        
        ### Self-paced Learning
        - **Online courses** khóa học trực tuyến
        - **Video tutorials** video hướng dẫn
        - **Hands-on labs** bài lab thực hành
        - **Progress tracking** theo dõi tiến độ
        
        ### Corporate Training
        - **Customized curriculum** chương trình tùy chỉnh
        - **On-site delivery** đào tạo tại chỗ
        - **Team building** xây dựng đội nhóm
        - **Volume discounts** giảm giá số lượng
        
        ## Tài liệu học tập
        ### Learning Materials
        - **Official courseware** tài liệu chính thức
        - **Lab guides** hướng dẫn lab
        - **Reference materials** tài liệu tham khảo
        - **Practice exams** đề thi thử
        
        ### Digital Resources
        - **Learning portal** cổng học tập
        - **Mobile app** ứng dụng di động
        - **Offline content** nội dung offline
        - **Community forums** diễn đàn cộng đồng
        
        ## Pricing và Đăng ký
        ### Course Pricing
        - **Fundamentals**: 5M VND
        - **Essentials**: 8M VND
        - **Advanced**: 12M VND
        - **Expert**: 15M VND
        
        ### Registration Process
        1. **Course selection** chọn khóa học
        2. **Schedule booking** đặt lịch học
        3. **Payment processing** xử lý thanh toán
        4. **Confirmation** xác nhận đăng ký
        
        ### Group Discounts
        - **3-5 people**: 10% discount
        - **6-10 people**: 15% discount
        - **11+ people**: 20% discount
        - **Corporate packages**: Custom pricing
      `;

      await docsifyInit({
        markdown: {
          homepage: trainingContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Training');
      expect(mainContent.textContent).toContain('đào tạo và chứng chỉ');
      
      // Check basic courses
      expect(mainContent.textContent).toContain('Cloud Fundamentals');
      expect(mainContent.textContent).toContain('Infrastructure Essentials');
      expect(mainContent.textContent).toContain('2 ngày');
      expect(mainContent.textContent).toContain('Cloud Practitioner');
      
      // Check advanced courses table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Cloud Architecture');
      expect(mainContent.textContent).toContain('DevOps Engineering');
      expect(mainContent.textContent).toContain('Solutions Architect');
      
      // Check certification paths
      expect(mainContent.textContent).toContain('Certification Paths');
      expect(mainContent.textContent).toContain('Cloud Practitioner Track');
      expect(mainContent.textContent).toContain('Solutions Architect Track');
      
      // Check training methods
      expect(mainContent.textContent).toContain('Instructor-led Training');
      expect(mainContent.textContent).toContain('Self-paced Learning');
      expect(mainContent.textContent).toContain('Corporate Training');
      
      // Check pricing
      expect(mainContent.textContent).toContain('Course Pricing');
      expect(mainContent.textContent).toContain('5M VND');
      expect(mainContent.textContent).toContain('Group Discounts');
    });
  });
});
