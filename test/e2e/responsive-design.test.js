import { test, expect } from '@playwright/test';

// Responsive Design E2E Tests
// -----------------------------------------------------------------------------
test.describe('Responsive Design', () => {
  // Desktop Tests
  // ---------------------------------------------------------------------------
  test.describe('Desktop View (1920x1080)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/');
      await page.waitForSelector('#main');
    });

    test('should display full desktop layout', async ({ page }) => {
      // Check sidebar is visible
      await expect(page.locator('.sidebar')).toBeVisible();
      
      // Check main content area
      await expect(page.locator('#main')).toBeVisible();
      
      // Check navbar
      await expect(page.locator('.navbar')).toBeVisible();
      
      // Check content is properly spaced
      const mainContent = page.locator('#main');
      const boundingBox = await mainContent.boundingBox();
      expect(boundingBox.width).toBeGreaterThan(1000);
    });

    test('should handle sidebar navigation on desktop', async ({ page }) => {
      // Sidebar should be expanded by default
      await expect(page.locator('.sidebar')).toBeVisible();
      
      // Click on sidebar items
      await page.click('text=vCloud Server');
      await page.waitForSelector('#main');
      await expect(page.locator('#main')).toContainText('vCloud Server');
      
      // Sidebar should remain visible
      await expect(page.locator('.sidebar')).toBeVisible();
    });
  });

  // Tablet Tests
  // ---------------------------------------------------------------------------
  test.describe('Tablet View (768x1024)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');
      await page.waitForSelector('#main');
    });

    test('should adapt layout for tablet', async ({ page }) => {
      // Check main content is visible
      await expect(page.locator('#main')).toBeVisible();
      
      // Check if sidebar behavior changes on tablet
      const sidebar = page.locator('.sidebar');
      if (await sidebar.isVisible()) {
        // If sidebar is visible, it should be properly sized
        const sidebarBox = await sidebar.boundingBox();
        expect(sidebarBox.width).toBeLessThan(400);
      }
      
      // Content should be readable
      const mainContent = page.locator('#main');
      const boundingBox = await mainContent.boundingBox();
      expect(boundingBox.width).toBeGreaterThan(500);
    });

    test('should handle navigation on tablet', async ({ page }) => {
      // Check if hamburger menu exists for tablet
      const hamburgerMenu = page.locator('.sidebar-toggle, .menu-toggle, [data-sidebar-toggle]');
      
      if (await hamburgerMenu.isVisible()) {
        // Test hamburger menu functionality
        await hamburgerMenu.click();
        await page.waitForTimeout(500);
        
        // Sidebar should appear/disappear
        const sidebar = page.locator('.sidebar');
        await expect(sidebar).toBeVisible();
      }
      
      // Navigation should still work
      await page.click('text=vStorage');
      await page.waitForSelector('#main');
      await expect(page.locator('#main')).toContainText('vStorage');
    });
  });

  // Mobile Tests
  // ---------------------------------------------------------------------------
  test.describe('Mobile View (375x667)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForSelector('#main');
    });

    test('should display mobile-optimized layout', async ({ page }) => {
      // Main content should be visible and full-width
      await expect(page.locator('#main')).toBeVisible();
      
      const mainContent = page.locator('#main');
      const boundingBox = await mainContent.boundingBox();
      
      // Content should use most of the screen width
      expect(boundingBox.width).toBeGreaterThan(300);
      expect(boundingBox.width).toBeLessThan(400);
    });

    test('should handle mobile navigation', async ({ page }) => {
      // Look for mobile menu toggle
      const mobileMenuToggle = page.locator('.sidebar-toggle, .menu-toggle, [data-sidebar-toggle], .mobile-menu');
      
      if (await mobileMenuToggle.isVisible()) {
        // Test mobile menu
        await mobileMenuToggle.click();
        await page.waitForTimeout(500);
        
        // Menu should appear
        const mobileMenu = page.locator('.sidebar, .mobile-menu-content');
        await expect(mobileMenu).toBeVisible();
        
        // Navigate to a page
        await page.click('text=vContainer');
        await page.waitForSelector('#main');
        await expect(page.locator('#main')).toContainText('vContainer');
      }
    });

    test('should handle touch interactions', async ({ page }) => {
      // Test scrolling
      await page.evaluate(() => {
        window.scrollTo(0, 500);
      });
      
      // Check scroll position
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeGreaterThan(0);
      
      // Test touch navigation if available
      const links = page.locator('a').first();
      await links.tap();
      await page.waitForTimeout(500);
    });
  });

  // Large Mobile Tests
  // ---------------------------------------------------------------------------
  test.describe('Large Mobile View (414x896)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 414, height: 896 });
      await page.goto('/');
      await page.waitForSelector('#main');
    });

    test('should optimize for large mobile screens', async ({ page }) => {
      // Content should be properly sized
      const mainContent = page.locator('#main');
      const boundingBox = await mainContent.boundingBox();
      
      expect(boundingBox.width).toBeGreaterThan(350);
      expect(boundingBox.width).toBeLessThan(450);
      
      // Text should be readable
      const headings = page.locator('h1, h2, h3');
      if (await headings.count() > 0) {
        await expect(headings.first()).toBeVisible();
      }
    });
  });

  // Cross-Device Navigation Tests
  // ---------------------------------------------------------------------------
  test.describe('Cross-Device Navigation', () => {
    test('should maintain functionality across different screen sizes', async ({ page }) => {
      // Start with desktop
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/');
      await page.waitForSelector('#main');
      
      // Navigate to a page
      await page.click('text=vOKS');
      await page.waitForSelector('#main');
      await expect(page.locator('#main')).toContainText('vOKS');
      
      // Switch to tablet
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.waitForTimeout(1000);
      
      // Content should still be visible
      await expect(page.locator('#main')).toContainText('vOKS');
      
      // Switch to mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(1000);
      
      // Content should still be accessible
      await expect(page.locator('#main')).toContainText('vOKS');
    });
  });

  // Content Readability Tests
  // ---------------------------------------------------------------------------
  test.describe('Content Readability', () => {
    test('should maintain readability on mobile devices', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForSelector('#main');
      
      // Check font sizes are appropriate
      const headings = page.locator('h1');
      if (await headings.count() > 0) {
        const fontSize = await headings.first().evaluate(el => {
          return window.getComputedStyle(el).fontSize;
        });
        
        // Font size should be reasonable for mobile
        const fontSizeNum = parseInt(fontSize);
        expect(fontSizeNum).toBeGreaterThan(16);
      }
      
      // Check line spacing
      const paragraphs = page.locator('p');
      if (await paragraphs.count() > 0) {
        const lineHeight = await paragraphs.first().evaluate(el => {
          return window.getComputedStyle(el).lineHeight;
        });
        
        // Line height should be readable
        expect(lineHeight).not.toBe('normal');
      }
    });

    test('should handle tables responsively', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForSelector('#main');
      
      // Navigate to a page with tables
      await page.click('text=vCloud Server');
      await page.waitForSelector('#main');
      
      // Check if tables are present and handle overflow
      const tables = page.locator('table');
      if (await tables.count() > 0) {
        const table = tables.first();
        await expect(table).toBeVisible();
        
        // Table should not overflow the container
        const tableBox = await table.boundingBox();
        expect(tableBox.width).toBeLessThan(400);
      }
    });
  });

  // Image and Media Responsiveness
  // ---------------------------------------------------------------------------
  test.describe('Media Responsiveness', () => {
    test('should handle images responsively', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForSelector('#main');
      
      // Check images if present
      const images = page.locator('img');
      if (await images.count() > 0) {
        const image = images.first();
        const imageBox = await image.boundingBox();
        
        // Images should not overflow container
        expect(imageBox.width).toBeLessThan(400);
      }
    });

    test('should handle code blocks on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForSelector('#main');
      
      // Navigate to a page with code blocks
      await page.click('text=API Documentation');
      await page.waitForSelector('#main');
      
      // Check code blocks if present
      const codeBlocks = page.locator('pre, code');
      if (await codeBlocks.count() > 0) {
        const codeBlock = codeBlocks.first();
        await expect(codeBlock).toBeVisible();
        
        // Code should be scrollable or wrapped
        const codeBox = await codeBlock.boundingBox();
        expect(codeBox.width).toBeLessThan(400);
      }
    });
  });

  // Performance on Different Devices
  // ---------------------------------------------------------------------------
  test.describe('Performance Across Devices', () => {
    test('should load quickly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const startTime = Date.now();
      await page.goto('/');
      await page.waitForSelector('#main');
      const endTime = Date.now();
      
      const loadTime = endTime - startTime;
      
      // Should load within reasonable time on mobile
      expect(loadTime).toBeLessThan(5000);
    });

    test('should be interactive quickly', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      
      // Wait for interactivity
      await page.waitForLoadState('networkidle');
      
      // Test interaction
      const startTime = Date.now();
      await page.click('text=vStorage');
      await page.waitForSelector('#main');
      const endTime = Date.now();
      
      const interactionTime = endTime - startTime;
      expect(interactionTime).toBeLessThan(3000);
    });
  });
});
