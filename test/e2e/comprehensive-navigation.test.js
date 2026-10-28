import { test, expect } from '@playwright/test';

// Comprehensive Navigation E2E Tests
// -----------------------------------------------------------------------------
test.describe('Comprehensive Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#main');
  });

  // Homepage and Main Navigation
  // ---------------------------------------------------------------------------
  test('should navigate through main sections from homepage', async ({ page }) => {
    // Check homepage loads correctly
    await expect(page.locator('#main h1')).toContainText('Viettel IDC Cloud');
    
    // Navigate to Cloud services
    await page.click('text=Dịch vụ Cloud');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Cloud Computing');
    
    // Navigate to Datacenter services
    await page.click('text=Datacenter');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Datacenter');
    
    // Navigate to Enterprise services
    await page.click('text=Dịch vụ doanh nghiệp');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('doanh nghiệp');
    
    // Navigate to Network services
    await page.click('text=Mạng & Kết nối');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Mạng');
    
    // Navigate to Security services
    await page.click('text=Bảo mật');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Bảo mật');
  });

  // Cloud Services Navigation
  // ---------------------------------------------------------------------------
  test('should navigate through all cloud service pages', async ({ page }) => {
    // Navigate to cloud overview
    await page.click('text=Tổng quan');
    await page.waitForSelector('#main');
    await expect(page.locator('#main h1')).toContainText('Tổng quan');
    
    // Test vCloud Server navigation
    await page.click('text=vCloud Server');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('vCloud Server');
    
    // Test vStorage navigation
    await page.click('text=vStorage');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('vStorage');
    
    // Test vContainer navigation
    await page.click('text=vContainer');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('vContainer');
    
    // Test vDBS navigation
    await page.click('text=vDBS');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('vDBS');
    
    // Test CloudWatch navigation
    await page.click('text=CloudWatch');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('CloudWatch');
    
    // Test vOKS navigation
    await page.click('text=vOKS');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('vOKS');
  });

  // Deep Navigation Tests
  // ---------------------------------------------------------------------------
  test('should navigate through nested cloud service pages', async ({ page }) => {
    // Navigate to vOKS main page
    await page.click('text=vOKS');
    await page.waitForSelector('#main');
    
    // Navigate to Create Cluster
    await page.click('text=Tạo Cluster');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Cluster');
    
    // Navigate to Manage Nodes
    await page.click('text=Quản lý Node');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Node');
    
    // Navigate to Deploy Apps
    await page.click('text=Triển khai ứng dụng');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('ứng dụng');
    
    // Navigate to Monitoring
    await page.click('text=Giám sát và Log');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Giám sát');
  });

  // CloudWatch Nested Navigation
  // ---------------------------------------------------------------------------
  test('should navigate through CloudWatch sub-pages', async ({ page }) => {
    // Navigate to CloudWatch main page
    await page.click('text=CloudWatch');
    await page.waitForSelector('#main');
    
    // Navigate to Create Dashboard
    await page.click('text=Tạo Dashboard');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Dashboard');
    
    // Navigate to Analyze Metrics
    await page.click('text=Phân tích Metrics');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Metrics');
    
    // Navigate to Manage Logs
    await page.click('text=Quản lý Logs');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Logs');
    
    // Navigate to Set Alerts
    await page.click('text=Thiết lập Cảnh báo');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Cảnh báo');
    
    // Navigate to Widget Types
    await page.click('text=Các loại Widget');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Widget');
  });

  // vDBS Nested Navigation
  // ---------------------------------------------------------------------------
  test('should navigate through vDBS database pages', async ({ page }) => {
    // Navigate to vDBS main page
    await page.click('text=vDBS');
    await page.waitForSelector('#main');
    
    // Navigate to MySQL
    await page.click('text=MySQL');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('MySQL');
    
    // Navigate to PostgreSQL
    await page.click('text=PostgreSQL');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('PostgreSQL');
    
    // Navigate to MongoDB
    await page.click('text=MongoDB');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('MongoDB');
    
    // Navigate to Redis
    await page.click('text=Redis');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Redis');
    
    // Navigate to Create Database
    await page.click('text=Tạo Database');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Database');
    
    // Navigate to Backup & Restore
    await page.click('text=Backup & Restore');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Backup');
    
    // Navigate to Security
    await page.click('text=Bảo mật');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Bảo mật');
  });

  // Tools and API Navigation
  // ---------------------------------------------------------------------------
  test('should navigate through tools and API documentation', async ({ page }) => {
    // Navigate to API Documentation
    await page.click('text=API Documentation');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('API');
    
    // Navigate to CLI Tools
    await page.click('text=CLI Tools');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('CLI');
    
    // Navigate to SDK
    await page.click('text=SDK');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('SDK');
    
    // Navigate to Terraform Provider
    await page.click('text=Terraform Provider');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Terraform');
    
    // Navigate to Monitoring Tools
    await page.click('text=Monitoring Tools');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Monitoring');
  });

  // Guides Navigation
  // ---------------------------------------------------------------------------
  test('should navigate through all guide pages', async ({ page }) => {
    // Navigate to Registration guide
    await page.click('text=Đăng ký và kích hoạt');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Đăng ký');
    
    // Navigate to Resource Management
    await page.click('text=Quản lý tài nguyên');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('tài nguyên');
    
    // Navigate to Billing
    await page.click('text=Thanh toán và hóa đơn');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Thanh toán');
    
    // Navigate to Migration
    await page.click('text=Migration');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Migration');
    
    // Navigate to Best Practices
    await page.click('text=Best Practices');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Best Practices');
    
    // Navigate to Troubleshooting
    await page.click('text=Troubleshooting');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Troubleshooting');
  });

  // Support Navigation
  // ---------------------------------------------------------------------------
  test('should navigate through support pages', async ({ page }) => {
    // Navigate to Contact
    await page.click('text=Liên hệ');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Liên hệ');
    
    // Navigate to SLA
    await page.click('text=SLA');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('SLA');
    
    // Navigate to Training
    await page.click('text=Đào tạo');
    await page.waitForSelector('#main');
    await expect(page.locator('#main')).toContainText('Đào tạo');
  });

  // Breadcrumb Navigation
  // ---------------------------------------------------------------------------
  test('should maintain proper breadcrumb navigation', async ({ page }) => {
    // Navigate deep into a section
    await page.click('text=vOKS');
    await page.waitForSelector('#main');
    await page.click('text=Tạo Cluster');
    await page.waitForSelector('#main');
    
    // Check URL reflects the navigation
    expect(page.url()).toContain('voks/create-cluster');
    
    // Navigate back using browser back button
    await page.goBack();
    await page.waitForSelector('#main');
    expect(page.url()).toContain('voks');
    
    // Navigate forward
    await page.goForward();
    await page.waitForSelector('#main');
    expect(page.url()).toContain('voks/create-cluster');
  });

  // Sidebar State Persistence
  // ---------------------------------------------------------------------------
  test('should maintain sidebar state during navigation', async ({ page }) => {
    // Check sidebar is visible
    await expect(page.locator('.sidebar')).toBeVisible();
    
    // Navigate to different pages
    await page.click('text=vCloud Server');
    await page.waitForSelector('#main');
    await expect(page.locator('.sidebar')).toBeVisible();
    
    await page.click('text=vStorage');
    await page.waitForSelector('#main');
    await expect(page.locator('.sidebar')).toBeVisible();
    
    // Check active state is maintained
    await expect(page.locator('.sidebar .active')).toBeVisible();
  });
});
