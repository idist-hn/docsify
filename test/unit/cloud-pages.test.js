import docsifyInit from '../helpers/docsify-init.js';

// Cloud Pages Tests
// -----------------------------------------------------------------------------
describe('Cloud Pages', () => {
  // Cloud Overview Page
  // ---------------------------------------------------------------------------
  describe('Cloud Overview Page', () => {
    test('renders cloud overview with proper structure', async () => {
      const cloudOverviewContent = `
        # Tổng quan dịch vụ Cloud Computing
        
        ## Giới thiệu
        Viettel IDC Cloud là nền tảng điện toán đám mây toàn diện.
        
        ## Kiến trúc Cloud
        ### Multi-Tier Architecture
        - **Tier 1**: Infrastructure Layer
        - **Tier 2**: Platform Layer
        - **Tier 3**: Application Layer
        
        ## Danh mục dịch vụ chính
        ### 🖥️ Cloud Server
        | Dịch vụ | Mô tả | Use Case |
        |---------|-------|----------|
        | vCloud Server | Máy chủ ảo cơ bản | Website, ứng dụng web |
        | Private Cloud | Môi trường riêng biệt | Doanh nghiệp lớn |
        
        ### 💾 Cloud Storage
        | Dịch vụ | Mô tả | Capacity |
        |---------|-------|----------|
        | vStorage | Lưu trữ đối tượng | Unlimited |
        | Block Storage | High-performance SSD/HDD | Up to 64TB |
      `;

      await docsifyInit({
        markdown: {
          homepage: cloudOverviewContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check main title
      expect(mainContent.querySelector('h1').textContent).toContain(
        'Tổng quan dịch vụ Cloud Computing',
      );

      // Check sections
      const headings = Array.from(mainContent.querySelectorAll('h2, h3')).map(
        h => h.textContent,
      );
      expect(headings).toContain('Giới thiệu');
      expect(headings).toContain('Kiến trúc Cloud');
      expect(headings).toContain('Danh mục dịch vụ chính');
      expect(headings).toContain('🖥️ Cloud Server');
      expect(headings).toContain('💾 Cloud Storage');

      // Check tables
      const tables = mainContent.querySelectorAll('table');
      expect(tables.length).toBe(2);

      // Check service content
      expect(mainContent.textContent).toContain('Viettel IDC Cloud');
      expect(mainContent.textContent).toContain('vCloud Server');
      expect(mainContent.textContent).toContain('vStorage');
    });

    test('validates cloud service categories', async () => {
      const serviceCategories = `
        # Cloud Services
        
        ## Compute Services
        - vCloud Server
        - Private Cloud
        - Dedicated Private Cloud
        
        ## Storage Services
        - Object Storage
        - Block Storage
        - File Storage
        - Backup Storage
        
        ## Database Services
        - MySQL
        - PostgreSQL
        - MongoDB
        - Redis
        
        ## Container Services
        - vContainer
        - vOKS (Kubernetes)
        - Container Registry
      `;

      await docsifyInit({
        markdown: {
          homepage: serviceCategories,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      const serviceTypes = [
        'Compute Services',
        'Storage Services',
        'Database Services',
        'Container Services',
      ];

      serviceTypes.forEach(serviceType => {
        expect(mainContent.textContent).toContain(serviceType);
      });

      // Check specific services
      const services = [
        'vCloud Server',
        'Object Storage',
        'MySQL',
        'vContainer',
      ];
      services.forEach(service => {
        expect(mainContent.textContent).toContain(service);
      });
    });
  });

  // VCloud Server Pages
  // ---------------------------------------------------------------------------
  describe('VCloud Server Pages', () => {
    test('renders vCloud Server documentation', async () => {
      const vcloudContent = `
        # vCloud Server
        
        ## Tổng quan
        vCloud Server là dịch vụ máy chủ ảo linh hoạt, cho phép bạn tạo và quản lý máy chủ trong môi trường cloud.
        
        ## Tính năng chính
        - **Scalable**: Tăng/giảm tài nguyên theo nhu cầu
        - **High Performance**: SSD storage, high-speed network
        - **Secure**: Network isolation, firewall protection
        - **Reliable**: 99.9% uptime SLA
        
        ## Cấu hình gói dịch vụ
        | Gói | CPU | RAM | Storage | Bandwidth |
        |-----|-----|-----|---------|-----------|
        | Basic | 1 vCPU | 1GB | 20GB SSD | 1Gbps |
        | Standard | 2 vCPU | 4GB | 40GB SSD | 1Gbps |
        | Premium | 4 vCPU | 8GB | 80GB SSD | 1Gbps |
        | Enterprise | 8 vCPU | 16GB | 160GB SSD | 10Gbps |
        
        ## Hướng dẫn sử dụng
        ### Tạo máy chủ mới
        1. Đăng nhập vào portal
        2. Chọn "Create Server"
        3. Cấu hình thông số
        4. Xác nhận và thanh toán
      `;

      await docsifyInit({
        markdown: {
          homepage: vcloudContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check title and overview
      expect(mainContent.querySelector('h1').textContent).toContain(
        'vCloud Server',
      );
      expect(mainContent.textContent).toContain('máy chủ ảo linh hoạt');

      // Check features
      const features = ['Scalable', 'High Performance', 'Secure', 'Reliable'];
      features.forEach(feature => {
        expect(mainContent.textContent).toContain(feature);
      });

      // Check pricing table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      const tableHeaders = Array.from(table.querySelectorAll('th')).map(
        th => th.textContent,
      );
      expect(tableHeaders).toContain('CPU');
      expect(tableHeaders).toContain('RAM');
      expect(tableHeaders).toContain('Storage');

      // Check service tiers
      expect(mainContent.textContent).toContain('Basic');
      expect(mainContent.textContent).toContain('Enterprise');
    });

    test('validates vCloud Server SSD specifications', async () => {
      const vcloudSSDContent = `
        # vCloud Server SSD
        
        ## Hiệu năng cao với SSD
        Dịch vụ vCloud Server SSD được tối ưu hóa cho các ứng dụng yêu cầu hiệu năng I/O cao.
        
        ## Ưu điểm SSD
        - **IOPS cao**: Lên đến 40,000 IOPS
        - **Latency thấp**: < 1ms access time
        - **Throughput cao**: 500MB/s sequential read/write
        - **Độ bền cao**: 99.999% durability
        
        ## Use Cases
        - Database servers (MySQL, PostgreSQL)
        - High-traffic web applications
        - Real-time analytics
        - Gaming servers
        - Video streaming platforms
      `;

      await docsifyInit({
        markdown: {
          homepage: vcloudSSDContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check SSD-specific content
      expect(mainContent.textContent).toContain('vCloud Server SSD');
      expect(mainContent.textContent).toContain('40,000 IOPS');
      expect(mainContent.textContent).toContain('< 1ms access time');
      expect(mainContent.textContent).toContain('500MB/s');

      // Check use cases
      const useCases = [
        'Database servers',
        'High-traffic web',
        'Real-time analytics',
      ];
      useCases.forEach(useCase => {
        expect(mainContent.textContent).toContain(useCase);
      });
    });
  });

  // Storage Services Pages
  // ---------------------------------------------------------------------------
  describe('Storage Services Pages', () => {
    test('renders Object Storage documentation', async () => {
      const objectStorageContent = `
        # Object Storage
        
        ## S3-Compatible Storage
        Dịch vụ lưu trữ đối tượng tương thích với Amazon S3 API.
        
        ## Tính năng
        - **Unlimited capacity**: Không giới hạn dung lượng
        - **S3 API compatible**: Tương thích với AWS S3
        - **Multi-region**: Sao lưu đa vùng
        - **Versioning**: Quản lý phiên bản file
        - **Lifecycle management**: Quản lý vòng đời dữ liệu
        
        ## Storage Classes
        | Class | Description | Use Case | Price |
        |-------|-------------|----------|-------|
        | Standard | Frequent access | Active data | $0.023/GB |
        | IA | Infrequent access | Backup | $0.0125/GB |
        | Archive | Long-term storage | Compliance | $0.004/GB |
        
        ## API Examples
        \`\`\`bash
        # Upload file
        aws s3 cp file.txt s3://my-bucket/
        
        # List objects
        aws s3 ls s3://my-bucket/
        
        # Download file
        aws s3 cp s3://my-bucket/file.txt ./
        \`\`\`
      `;

      await docsifyInit({
        markdown: {
          homepage: objectStorageContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check title and compatibility
      expect(mainContent.textContent).toContain('Object Storage');
      expect(mainContent.textContent).toContain('S3-Compatible');
      expect(mainContent.textContent).toContain('Amazon S3 API');

      // Check storage classes table
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Standard');
      expect(mainContent.textContent).toContain('Archive');

      // Check API examples
      const codeBlocks = mainContent.querySelectorAll('pre');
      expect(codeBlocks.length).toBeGreaterThan(0);
      expect(mainContent.textContent).toContain('aws s3 cp');
    });

    test('validates Block Storage specifications', async () => {
      const blockStorageContent = `
        # Block Storage
        
        ## High-Performance Block Storage
        Dịch vụ lưu trữ khối hiệu năng cao cho máy chủ ảo.
        
        ## Performance Tiers
        | Tier | IOPS | Throughput | Use Case |
        |------|------|------------|----------|
        | General Purpose | 3,000 | 125 MB/s | General workloads |
        | Provisioned IOPS | 20,000 | 320 MB/s | Database |
        | Throughput Optimized | 500 | 500 MB/s | Big data |
        
        ## Volume Types
        - **Root volumes**: Boot disk cho OS
        - **Data volumes**: Lưu trữ dữ liệu ứng dụng
        - **Snapshot volumes**: Backup và recovery
        
        ## Management Commands
        \`\`\`bash
        # Create volume
        vcloud volume create --size 100GB --type ssd
        
        # Attach to server
        vcloud volume attach vol-123 server-456
        
        # Create snapshot
        vcloud snapshot create vol-123
        \`\`\`
      `;

      await docsifyInit({
        markdown: {
          homepage: blockStorageContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check performance specifications
      expect(mainContent.textContent).toContain('Block Storage');
      expect(mainContent.textContent).toContain('20,000');
      expect(mainContent.textContent).toContain('320 MB/s');

      // Check volume types
      const volumeTypes = ['Root volumes', 'Data volumes', 'Snapshot volumes'];
      volumeTypes.forEach(type => {
        expect(mainContent.textContent).toContain(type);
      });

      // Check CLI commands
      expect(mainContent.textContent).toContain('vcloud volume create');
      expect(mainContent.textContent).toContain('vcloud volume attach');
    });
  });

  // Container Services Pages
  // ---------------------------------------------------------------------------
  describe('Container Services Pages', () => {
    test('renders vOKS (Kubernetes) documentation', async () => {
      const voksContent = `
        # vOKS - Managed Kubernetes Service
        
        ## Kubernetes as a Service
        Dịch vụ Kubernetes được quản lý hoàn toàn bởi Viettel IDC.
        
        ## Tính năng chính
        - **Fully managed**: Quản lý hoàn toàn master nodes
        - **Auto-scaling**: Tự động scale pods và nodes
        - **High availability**: Multi-AZ deployment
        - **Security**: RBAC, network policies, pod security
        - **Monitoring**: Integrated with CloudWatch
        
        ## Cluster Configurations
        | Size | Nodes | CPU | Memory | Storage |
        |------|-------|-----|--------|---------|
        | Small | 3-5 | 2-4 vCPU | 4-8 GB | 50-100 GB |
        | Medium | 5-10 | 4-8 vCPU | 8-16 GB | 100-500 GB |
        | Large | 10-50 | 8-16 vCPU | 16-32 GB | 500GB-2TB |
        
        ## Getting Started
        \`\`\`bash
        # Create cluster
        voks cluster create my-cluster --nodes 3 --node-type standard
        
        # Get kubeconfig
        voks cluster kubeconfig my-cluster
        
        # Deploy application
        kubectl apply -f deployment.yaml
        \`\`\`
      `;

      await docsifyInit({
        markdown: {
          homepage: voksContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check Kubernetes content
      expect(mainContent.textContent).toContain('vOKS');
      expect(mainContent.textContent).toContain('Managed Kubernetes');
      expect(mainContent.textContent).toContain('Fully managed');

      // Check cluster configurations
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      expect(mainContent.textContent).toContain('Small');
      expect(mainContent.textContent).toContain('Large');

      // Check kubectl commands
      expect(mainContent.textContent).toContain('voks cluster create');
      expect(mainContent.textContent).toContain('kubectl apply');
    });
  });
});
