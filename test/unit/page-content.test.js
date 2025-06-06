import docsifyInit from '../helpers/docsify-init.js';

// Page Content Tests
// -----------------------------------------------------------------------------
describe('Page Content', () => {
  // Content Rendering
  // ---------------------------------------------------------------------------
  describe('Content Rendering', () => {
    test('renders markdown tables correctly', async () => {
      const tableMarkdown = `
        # Table Test
        
        | Service | Description | Price |
        |---------|-------------|-------|
        | VPS | Virtual Private Server | $10/month |
        | Storage | Block Storage | $0.10/GB |
        | CDN | Content Delivery Network | $0.05/GB |
      `;

      await docsifyInit({
        markdown: {
          homepage: tableMarkdown,
        },
        waitForSelector: '#main table',
      });

      const table = document.querySelector('#main table');
      expect(table).toBeTruthy();

      const headers = table.querySelectorAll('th');
      expect(headers).toHaveLength(3);
      expect(headers[0].textContent).toContain('Service');
      expect(headers[1].textContent).toContain('Description');
      expect(headers[2].textContent).toContain('Price');

      const rows = table.querySelectorAll('tbody tr');
      expect(rows).toHaveLength(3);
      expect(rows[0].textContent).toContain('VPS');
      expect(rows[1].textContent).toContain('Storage');
      expect(rows[2].textContent).toContain('CDN');
    });

    test('renders code blocks with syntax highlighting', async () => {
      const codeMarkdown = `
        # Code Examples
        
        ## JavaScript
        \`\`\`javascript
        function hello() {
          console.log('Hello World');
        }
        \`\`\`
        
        ## Python
        \`\`\`python
        def hello():
            print("Hello World")
        \`\`\`
        
        ## Bash
        \`\`\`bash
        echo "Hello World"
        \`\`\`
      `;

      await docsifyInit({
        markdown: {
          homepage: codeMarkdown,
        },
        waitForSelector: '#main pre',
      });

      const codeBlocks = document.querySelectorAll('#main pre');
      expect(codeBlocks.length).toBeGreaterThanOrEqual(3);

      // Check that code blocks contain expected content
      const codeTexts = Array.from(codeBlocks).map(block => block.textContent);
      expect(
        codeTexts.some(text => text.includes('function hello')),
      ).toBeTruthy();
      expect(codeTexts.some(text => text.includes('def hello'))).toBeTruthy();
      expect(
        codeTexts.some(text => text.includes('echo "Hello World"')),
      ).toBeTruthy();
    });

    test('renders blockquotes and alerts', async () => {
      const alertMarkdown = `
        # Alerts and Quotes
        
        > This is a regular blockquote
        
        > [!NOTE]
        > This is a note alert
        
        > [!WARNING]
        > This is a warning alert
        
        > [!TIP]
        > This is a tip alert
      `;

      await docsifyInit({
        markdown: {
          homepage: alertMarkdown,
        },
        waitForSelector: '#main blockquote',
      });

      const blockquotes = document.querySelectorAll('#main blockquote');
      expect(blockquotes.length).toBeGreaterThan(0);

      const blockquoteTexts = Array.from(blockquotes).map(bq => bq.textContent);
      expect(
        blockquoteTexts.some(text => text.includes('regular blockquote')),
      ).toBeTruthy();
    });

    test('renders images and media correctly', async () => {
      const mediaMarkdown = `
        # Media Content
        
        ## Images
        ![Test Image](/_media/test-image.png "Test Image Title")
        
        ## Links
        [Internal Link](/internal-page)
        [External Link](https://example.com)
        
        ## Inline Code
        Use \`npm install\` to install packages.
      `;

      await docsifyInit({
        markdown: {
          homepage: mediaMarkdown,
        },
        routes: {
          '/_media/test-image.png':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check images
      const images = mainContent.querySelectorAll('img');
      expect(images.length).toBeGreaterThan(0);

      // Check links
      const links = mainContent.querySelectorAll('a');
      expect(links.length).toBeGreaterThan(0);

      const linkTexts = Array.from(links).map(link => link.textContent);
      expect(linkTexts).toContain('Internal Link');
      expect(linkTexts).toContain('External Link');

      // Check inline code
      const inlineCode = mainContent.querySelector('code');
      expect(inlineCode).toBeTruthy();
      expect(inlineCode.textContent).toContain('npm install');
    });
  });

  // Content Structure
  // ---------------------------------------------------------------------------
  describe('Content Structure', () => {
    test('generates proper heading hierarchy', async () => {
      const hierarchyMarkdown = `
        # Level 1 Heading
        ## Level 2 Heading
        ### Level 3 Heading
        #### Level 4 Heading
        ##### Level 5 Heading
        ###### Level 6 Heading
        
        ## Another Level 2
        ### Another Level 3
      `;

      await docsifyInit({
        markdown: {
          homepage: hierarchyMarkdown,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check all heading levels
      expect(mainContent.querySelector('h1')).toBeTruthy();
      expect(mainContent.querySelector('h2')).toBeTruthy();
      expect(mainContent.querySelector('h3')).toBeTruthy();
      expect(mainContent.querySelector('h4')).toBeTruthy();
      expect(mainContent.querySelector('h5')).toBeTruthy();
      expect(mainContent.querySelector('h6')).toBeTruthy();

      // Check heading count
      expect(mainContent.querySelectorAll('h2')).toHaveLength(2);
      expect(mainContent.querySelectorAll('h3')).toHaveLength(2);
    });

    test('handles lists and nested content', async () => {
      const listMarkdown = `
        # Lists Test
        
        ## Unordered List
        - Item 1
        - Item 2
          - Nested item 2.1
          - Nested item 2.2
        - Item 3
        
        ## Ordered List
        1. First item
        2. Second item
           1. Nested first
           2. Nested second
        3. Third item
        
        ## Task List
        - [x] Completed task
        - [ ] Pending task
        - [x] Another completed task
      `;

      await docsifyInit({
        markdown: {
          homepage: listMarkdown,
        },
        waitForSelector: '#main ul',
      });

      const mainContent = document.querySelector('#main');

      // Check unordered lists
      const unorderedLists = mainContent.querySelectorAll('ul');
      expect(unorderedLists.length).toBeGreaterThan(0);

      // Check ordered lists
      const orderedLists = mainContent.querySelectorAll('ol');
      expect(orderedLists.length).toBeGreaterThan(0);

      // Check list items
      const listItems = mainContent.querySelectorAll('li');
      expect(listItems.length).toBeGreaterThan(5);
    });
  });

  // Content Validation
  // ---------------------------------------------------------------------------
  describe('Content Validation', () => {
    test('validates required content sections', async () => {
      const documentationMarkdown = `
        # Service Documentation
        
        ## Overview
        This service provides cloud computing resources.
        
        ## Features
        - High availability
        - Scalable infrastructure
        - 24/7 support
        
        ## Getting Started
        Follow these steps to get started:
        
        1. Sign up for an account
        2. Choose your service plan
        3. Deploy your application
        
        ## API Reference
        \`\`\`bash
        curl -X GET https://api.example.com/v1/services
        \`\`\`
        
        ## Support
        Contact us at support@example.com
      `;

      await docsifyInit({
        markdown: {
          homepage: documentationMarkdown,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      const headings = Array.from(
        mainContent.querySelectorAll('h1, h2, h3'),
      ).map(h => h.textContent);

      // Validate required sections
      expect(headings).toContain('Service Documentation');
      expect(headings).toContain('Overview');
      expect(headings).toContain('Features');
      expect(headings).toContain('Getting Started');
      expect(headings).toContain('API Reference');
      expect(headings).toContain('Support');

      // Validate content presence
      expect(mainContent.textContent).toContain('cloud computing resources');
      expect(mainContent.textContent).toContain('High availability');
      expect(mainContent.textContent).toContain('Sign up for an account');
      expect(mainContent.textContent).toContain('support@example.com');
    });

    test('validates content accessibility', async () => {
      const accessibleMarkdown = `
        # Accessible Content
        
        ![Descriptive alt text](/_media/chart.png "Chart showing performance metrics")
        
        ## Data Table
        | Metric | Value | Description |
        |--------|-------|-------------|
        | CPU | 85% | Current CPU usage |
        | Memory | 60% | Current memory usage |
        
        [Learn more about accessibility](https://www.w3.org/WAI/)
      `;

      await docsifyInit({
        markdown: {
          homepage: accessibleMarkdown,
        },
        routes: {
          '/_media/chart.png':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check image alt text
      const image = mainContent.querySelector('img');
      expect(image).toBeTruthy();
      expect(image.getAttribute('alt')).toBe('Descriptive alt text');
      expect(image.getAttribute('title')).toBe(
        'Chart showing performance metrics',
      );

      // Check table headers
      const table = mainContent.querySelector('table');
      expect(table).toBeTruthy();
      const headers = table.querySelectorAll('th');
      expect(headers).toHaveLength(3);

      // Check external links
      const externalLink = Array.from(mainContent.querySelectorAll('a')).find(
        link => link.href.includes('w3.org'),
      );
      expect(externalLink).toBeTruthy();
    });
  });
});
