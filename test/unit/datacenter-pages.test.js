import docsifyInit from '../helpers/docsify-init.js';

// Datacenter Pages Tests
// -----------------------------------------------------------------------------
describe('Datacenter Pages', () => {
  // Colocation Services
  // ---------------------------------------------------------------------------
  describe('Colocation Services', () => {
    test('renders colocation page with proper structure', async () => {
      const colocationContent = `
        # Colocation - Dịch vụ đặt chỗ máy chủ
        
        ## Giới thiệu
        Dịch vụ Colocation của Viettel IDC cung cấp không gian, điện năng, làm mát và kết nối mạng cho máy chủ của khách hàng.
        
        ## Tính năng chính
        ### 🏢 Data Center Tier 3
        - **99.982% uptime** cam kết độ sẵn sàng
        - **Redundant power** hệ thống điện dự phòng
        - **24/7 cooling** làm mát liên tục
        - **Physical security** bảo mật vật lý
        
        ### 📊 Monitoring 24/7
        - **Environmental monitoring** giám sát môi trường
        - **Power monitoring** giám sát điện năng
        - **Network monitoring** giám sát mạng
        - **Security monitoring** giám sát bảo mật
        
        ## Gói dịch vụ
        | Gói | Rack Space | Power | Bandwidth | Price |
        |-----|------------|-------|-----------|-------|
        | Quarter Rack | 10U | 2.5kW | 100Mbps | 15M VND/tháng |
        | Half Rack | 20U | 5kW | 200Mbps | 25M VND/tháng |
        | Full Rack | 42U | 10kW | 500Mbps | 45M VND/tháng |
        | Custom | Tùy chỉnh | Tùy chỉnh | Tùy chỉnh | Liên hệ |
      `;

      await docsifyInit({
        markdown: {
          homepage: colocationContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain('Colocation');
      expect(mainContent.textContent).toContain('Viettel IDC');
      expect(mainContent.textContent).toContain('đặt chỗ máy chủ');
      
      // Check features
      expect(mainContent.textContent).toContain('Data Center Tier 3');
      expect(mainContent.textContent).toContain('99.982% uptime');
      expect(mainContent.textContent).toContain('Monitoring 24/7');
      
      // Check pricing table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Quarter Rack');
      expect(mainContent.textContent).toContain('Full Rack');
    });

    test('validates colocation service specifications', async () => {
      const colocationSpecs = `
        # Colocation Specifications
        
        ## Data Center Standards
        ### Tier 3 Certification
        - **Uptime**: 99.982% (1.6 hours downtime/year)
        - **Redundancy**: N+1 for all critical systems
        - **Maintenance**: Concurrent maintainable
        - **Fault tolerance**: Single fault tolerant
        
        ### Power Infrastructure
        - **UPS systems**: 2N redundancy
        - **Generators**: N+1 diesel generators
        - **PDU**: Dual power feeds per rack
        - **Monitoring**: Real-time power monitoring
        
        ### Cooling Systems
        - **CRAC units**: N+1 redundancy
        - **Temperature**: 20-24°C ±2°C
        - **Humidity**: 45-55% RH ±5%
        - **Airflow**: Hot/cold aisle containment
      `;

      await docsifyInit({
        markdown: {
          homepage: colocationSpecs,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check specifications
      expect(mainContent.textContent).toContain('Tier 3 Certification');
      expect(mainContent.textContent).toContain('99.982%');
      expect(mainContent.textContent).toContain('N+1 redundancy');
      expect(mainContent.textContent).toContain('20-24°C');
    });
  });

  // Dedicated Server Services
  // ---------------------------------------------------------------------------
  describe('Dedicated Server Services', () => {
    test('renders dedicated server page with configurations', async () => {
      const dedicatedServerContent = `
        # Dedicated Server - Máy chủ vật lý chuyên dụng
        
        ## Giới thiệu
        Máy chủ vật lý chuyên dụng với hiệu năng cao và tùy chỉnh hoàn toàn theo nhu cầu.
        
        ## Cấu hình máy chủ
        ### Intel Xeon Series
        | Model | CPU | RAM | Storage | Network | Price |
        |-------|-----|-----|---------|---------|-------|
        | DS-E3 | E3-1230v6 | 16GB DDR4 | 1TB HDD | 1Gbps | 8M VND/tháng |
        | DS-E5 | E5-2620v4 | 32GB DDR4 | 2TB HDD | 1Gbps | 15M VND/tháng |
        | DS-Gold | Gold 6248 | 64GB DDR4 | 1TB SSD | 10Gbps | 25M VND/tháng |
        
        ### AMD EPYC Series
        | Model | CPU | RAM | Storage | Network | Price |
        |-------|-----|-----|---------|---------|-------|
        | DS-7302P | EPYC 7302P | 32GB DDR4 | 1TB NVMe | 1Gbps | 18M VND/tháng |
        | DS-7502P | EPYC 7502P | 64GB DDR4 | 2TB NVMe | 10Gbps | 30M VND/tháng |
        
        ## Tính năng bổ sung
        - **IPMI/iDRAC** quản lý từ xa
        - **Hardware RAID** bảo vệ dữ liệu
        - **Multiple OS** hỗ trợ nhiều hệ điều hành
        - **24/7 support** hỗ trợ kỹ thuật
      `;

      await docsifyInit({
        markdown: {
          homepage: dedicatedServerContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Dedicated Server');
      expect(mainContent.textContent).toContain('vật lý chuyên dụng');
      
      // Check server configurations
      const tables = mainContent.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(2);
      expect(mainContent.textContent).toContain('Intel Xeon');
      expect(mainContent.textContent).toContain('AMD EPYC');
      
      // Check features
      expect(mainContent.textContent).toContain('IPMI/iDRAC');
      expect(mainContent.textContent).toContain('Hardware RAID');
    });
  });

  // Disaster Recovery Services
  // ---------------------------------------------------------------------------
  describe('Disaster Recovery Services', () => {
    test('renders disaster recovery page with solutions', async () => {
      const drContent = `
        # Disaster Recovery - Khôi phục thảm họa
        
        ## Giới thiệu
        Giải pháp khôi phục thảm họa đảm bảo tính liên tục của doanh nghiệp.
        
        ## Các mức độ DR
        ### Tier 1: Data Backup
        - **RTO**: 24-72 hours
        - **RPO**: 24 hours
        - **Cost**: Thấp nhất
        - **Use case**: Dữ liệu không quan trọng
        
        ### Tier 2: Hot Site
        - **RTO**: 2-24 hours
        - **RPO**: 4-12 hours
        - **Cost**: Trung bình
        - **Use case**: Ứng dụng quan trọng
        
        ### Tier 3: Real-time Replication
        - **RTO**: < 1 hour
        - **RPO**: < 15 minutes
        - **Cost**: Cao nhất
        - **Use case**: Mission critical systems
        
        ## Công nghệ sử dụng
        - **VMware vSphere Replication**
        - **Microsoft Hyper-V Replica**
        - **Database replication**
        - **Storage-based replication**
      `;

      await docsifyInit({
        markdown: {
          homepage: drContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Disaster Recovery');
      expect(mainContent.textContent).toContain('khôi phục thảm họa');
      
      // Check DR tiers
      expect(mainContent.textContent).toContain('Tier 1');
      expect(mainContent.textContent).toContain('Tier 2');
      expect(mainContent.textContent).toContain('Tier 3');
      expect(mainContent.textContent).toContain('RTO');
      expect(mainContent.textContent).toContain('RPO');
      
      // Check technologies
      expect(mainContent.textContent).toContain('VMware vSphere');
      expect(mainContent.textContent).toContain('Hyper-V Replica');
    });
  });

  // Managed Services
  // ---------------------------------------------------------------------------
  describe('Managed Services', () => {
    test('renders managed services page with service levels', async () => {
      const managedServicesContent = `
        # Managed Services - Dịch vụ quản lý
        
        ## Giới thiệu
        Dịch vụ quản lý hạ tầng IT toàn diện, giúp doanh nghiệp tập trung vào core business.
        
        ## Gói dịch vụ
        ### Basic Management
        - **Server monitoring** giám sát máy chủ
        - **OS patching** cập nhật hệ điều hành
        - **Backup management** quản lý sao lưu
        - **8x5 support** hỗ trợ giờ hành chính
        
        ### Advanced Management
        - **Application monitoring** giám sát ứng dụng
        - **Database management** quản lý cơ sở dữ liệu
        - **Security management** quản lý bảo mật
        - **24x7 support** hỗ trợ 24/7
        
        ### Enterprise Management
        - **Full infrastructure management** quản lý toàn bộ hạ tầng
        - **Dedicated team** đội ngũ chuyên dụng
        - **Custom SLA** SLA tùy chỉnh
        - **On-site support** hỗ trợ tại chỗ
        
        ## Service Level Agreement
        | Metric | Basic | Advanced | Enterprise |
        |--------|-------|----------|------------|
        | Uptime | 99.5% | 99.9% | 99.95% |
        | Response Time | 4 hours | 1 hour | 30 minutes |
        | Resolution Time | 24 hours | 8 hours | 4 hours |
      `;

      await docsifyInit({
        markdown: {
          homepage: managedServicesContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Managed Services');
      expect(mainContent.textContent).toContain('quản lý');
      
      // Check service levels
      expect(mainContent.textContent).toContain('Basic Management');
      expect(mainContent.textContent).toContain('Advanced Management');
      expect(mainContent.textContent).toContain('Enterprise Management');
      
      // Check SLA table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('99.5%');
      expect(mainContent.textContent).toContain('99.95%');
    });
  });

  // Data Center Tiers
  // ---------------------------------------------------------------------------
  describe('Data Center Tiers', () => {
    test('renders data center tiers comparison', async () => {
      const tiersContent = `
        # Data Center Tiers - Phân loại trung tâm dữ liệu
        
        ## Giới thiệu
        Tiêu chuẩn phân loại data center theo Uptime Institute.
        
        ## So sánh các Tier
        | Tiêu chí | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
        |----------|--------|--------|--------|--------|
        | Uptime | 99.671% | 99.741% | 99.982% | 99.995% |
        | Downtime/năm | 28.8 giờ | 22.7 giờ | 1.6 giờ | 0.4 giờ |
        | Redundancy | N | N+1 | N+1 | 2N |
        | Maintenance | Shutdown | Shutdown | Concurrent | Fault Tolerant |
        | Power Paths | 1 | 1 | 2 | 2 |
        | Cooling | Basic | N+1 | N+1 | 2N |
        
        ## Viettel IDC Standards
        ### Tier 3 Certification
        - **Concurrently maintainable** bảo trì không gián đoạn
        - **Multiple distribution paths** đường phân phối đa dạng
        - **Dual-powered equipment** thiết bị nguồn kép
        - **72-hour autonomy** tự chủ 72 giờ
      `;

      await docsifyInit({
        markdown: {
          homepage: tiersContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      
      // Check title and content
      expect(mainContent.querySelector('h1').textContent).toContain('Data Center Tiers');
      expect(mainContent.textContent).toContain('Uptime Institute');
      
      // Check tiers comparison
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('99.671%');
      expect(mainContent.textContent).toContain('99.995%');
      expect(mainContent.textContent).toContain('Tier 3 Certification');
    });
  });
});
