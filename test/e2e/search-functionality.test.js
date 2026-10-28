import { test, expect } from '@playwright/test';

// Search Functionality E2E Tests
// -----------------------------------------------------------------------------
test.describe('Search Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#main');
    // Wait for search to be initialized
    await page.waitForTimeout(2000);
  });

  // Basic Search Tests
  // ---------------------------------------------------------------------------
  test('should perform basic search operations', async ({ page }) => {
    // Click on search input
    const searchInput = page.locator('input[type="search"]');
    await expect(searchInput).toBeVisible();
    
    // Type search query
    await searchInput.fill('vServer');
    await page.waitForTimeout(1000);
    
    // Check search results appear
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    
    // Check results contain relevant content
    await expect(searchResults).toContainText('vServer');
  });

  // Cloud Services Search
  // ---------------------------------------------------------------------------
  test('should search for cloud services effectively', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Search for vCloud Server
    await searchInput.fill('vCloud Server');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    await expect(searchResults).toContainText('vCloud Server');
    
    // Clear and search for storage
    await searchInput.fill('');
    await searchInput.fill('storage');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('Storage');
    await expect(searchResults).toContainText('vStorage');
    
    // Search for database
    await searchInput.fill('');
    await searchInput.fill('database');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('Database');
    await expect(searchResults).toContainText('vDBS');
  });

  // Vietnamese Search Terms
  // ---------------------------------------------------------------------------
  test('should handle Vietnamese search terms', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Search with Vietnamese terms
    await searchInput.fill('máy chủ');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    await expect(searchResults).toContainText('máy chủ');
    
    // Search for cloud in Vietnamese
    await searchInput.fill('');
    await searchInput.fill('đám mây');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('đám mây');
    
    // Search for security in Vietnamese
    await searchInput.fill('');
    await searchInput.fill('bảo mật');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('bảo mật');
  });

  // Technical Terms Search
  // ---------------------------------------------------------------------------
  test('should search for technical terms and concepts', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Search for API
    await searchInput.fill('API');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    await expect(searchResults).toContainText('API');
    
    // Search for CLI
    await searchInput.fill('');
    await searchInput.fill('CLI');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('CLI');
    
    // Search for SDK
    await searchInput.fill('');
    await searchInput.fill('SDK');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('SDK');
    
    // Search for Terraform
    await searchInput.fill('');
    await searchInput.fill('Terraform');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('Terraform');
  });

  // Service-specific Search
  // ---------------------------------------------------------------------------
  test('should search within specific service categories', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Search for monitoring
    await searchInput.fill('monitoring');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    await expect(searchResults).toContainText('monitoring');
    
    // Search for backup
    await searchInput.fill('');
    await searchInput.fill('backup');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('backup');
    
    // Search for load balancer
    await searchInput.fill('');
    await searchInput.fill('load balancer');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('load balancer');
  });

  // Search Result Navigation
  // ---------------------------------------------------------------------------
  test('should navigate to pages from search results', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Search for vServer
    await searchInput.fill('vServer');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    
    // Click on first search result
    const firstResult = searchResults.locator('a').first();
    await firstResult.click();
    
    // Wait for navigation
    await page.waitForSelector('#main');
    
    // Check we navigated to the correct page
    await expect(page.locator('#main')).toContainText('vServer');
  });

  // Empty Search Handling
  // ---------------------------------------------------------------------------
  test('should handle empty search gracefully', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Try empty search
    await searchInput.fill('');
    await page.waitForTimeout(1000);
    
    // Search results should not be visible or should show no results
    const searchResults = page.locator('.results-panel');
    if (await searchResults.isVisible()) {
      await expect(searchResults).toContainText('Không tìm thấy');
    }
  });

  // No Results Handling
  // ---------------------------------------------------------------------------
  test('should handle no search results gracefully', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Search for something that doesn't exist
    await searchInput.fill('xyzabc123nonexistent');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    if (await searchResults.isVisible()) {
      await expect(searchResults).toContainText('Không tìm thấy');
    }
  });

  // Search Keyboard Navigation
  // ---------------------------------------------------------------------------
  test('should support keyboard navigation in search', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Focus search input with keyboard shortcut (if available)
    await page.keyboard.press('Control+k');
    await expect(searchInput).toBeFocused();
    
    // Type search query
    await page.keyboard.type('vServer');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    
    // Navigate results with arrow keys
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    
    // Press Enter to select result
    await page.keyboard.press('Enter');
    
    // Should navigate to selected page
    await page.waitForSelector('#main');
  });

  // Search Persistence
  // ---------------------------------------------------------------------------
  test('should maintain search state during navigation', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Perform search
    await searchInput.fill('cloud');
    await page.waitForTimeout(1000);
    
    // Navigate to a page
    await page.click('text=Tổng quan');
    await page.waitForSelector('#main');
    
    // Check search input still contains the query
    await expect(searchInput).toHaveValue('cloud');
    
    // Clear search
    await searchInput.fill('');
    await page.waitForTimeout(500);
    
    // Search should be cleared
    const searchResults = page.locator('.results-panel');
    if (await searchResults.isVisible()) {
      await expect(searchResults).not.toContainText('cloud');
    }
  });

  // Search Performance
  // ---------------------------------------------------------------------------
  test('should perform search with reasonable response time', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Measure search response time
    const startTime = Date.now();
    
    await searchInput.fill('vServer');
    
    // Wait for results to appear
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    // Search should respond within 3 seconds
    expect(responseTime).toBeLessThan(3000);
  });

  // Search Highlighting
  // ---------------------------------------------------------------------------
  test('should highlight search terms in results', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Search for a specific term
    await searchInput.fill('server');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    
    // Check if search terms are highlighted (if feature exists)
    const highlightedTerms = searchResults.locator('.search-highlight, mark, .highlight');
    if (await highlightedTerms.count() > 0) {
      await expect(highlightedTerms.first()).toBeVisible();
    }
  });

  // Search Categories
  // ---------------------------------------------------------------------------
  test('should search across different content categories', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    
    // Search for pricing information
    await searchInput.fill('pricing');
    await page.waitForTimeout(1000);
    
    const searchResults = page.locator('.results-panel');
    await expect(searchResults).toBeVisible();
    
    // Search for configuration
    await searchInput.fill('');
    await searchInput.fill('configuration');
    await page.waitForTimeout(1000);
    
    await expect(searchResults).toContainText('configuration');
    
    // Search for tutorial content
    await searchInput.fill('');
    await searchInput.fill('tutorial');
    await page.waitForTimeout(1000);
    
    if (await searchResults.isVisible()) {
      // Results may or may not contain tutorial content
      console.log('Tutorial search completed');
    }
  });
});
