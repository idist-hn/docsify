import docsifyInit from '../helpers/docsify-init.js';

// Page Rendering Tests
// -----------------------------------------------------------------------------
describe('Page Rendering', () => {
  // Basic Page Rendering
  // ---------------------------------------------------------------------------
  describe('Basic Page Rendering', () => {
    test('renders homepage correctly', async () => {
      await docsifyInit({
        markdown: {
          homepage: '# Welcome to Docsify\n\nThis is the homepage content.',
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');
      expect(mainContent).toBeTruthy();
      expect(mainContent.textContent).toContain('Welcome to Docsify');
      expect(mainContent.textContent).toContain('This is the homepage content');
    });

    test('renders markdown content with proper HTML structure', async () => {
      const markdownContent = `
        # Main Title
        ## Subtitle
        This is a paragraph with **bold** and *italic* text.
        
        - List item 1
        - List item 2
        
        \`\`\`javascript
        console.log('Hello World');
        \`\`\`
      `;

      await docsifyInit({
        markdown: {
          homepage: markdownContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check heading structure
      expect(mainContent.querySelector('h1')).toBeTruthy();
      expect(mainContent.querySelector('h2')).toBeTruthy();
      expect(mainContent.querySelector('h1').textContent).toContain(
        'Main Title',
      );
      expect(mainContent.querySelector('h2').textContent).toContain('Subtitle');

      // Check formatted text
      expect(mainContent.querySelector('strong')).toBeTruthy();
      expect(mainContent.querySelector('em')).toBeTruthy();

      // Check list
      expect(mainContent.querySelector('ul')).toBeTruthy();
      expect(mainContent.querySelectorAll('li')).toHaveLength(2);

      // Check code block
      expect(mainContent.querySelector('pre')).toBeTruthy();
      expect(mainContent.querySelector('code')).toBeTruthy();
    });

    test('handles empty page content gracefully', async () => {
      await docsifyInit({
        markdown: {
          homepage: '',
        },
        waitForSelector: '#main',
      });

      const mainContent = document.querySelector('#main');
      expect(mainContent).toBeTruthy();
      // When homepage is empty, docsify loads the default README.md content
      // So we just check that main content exists and has some content
      expect(mainContent.innerHTML.length).toBeGreaterThan(0);
    });
  });

  // Page Metadata Rendering
  // ---------------------------------------------------------------------------
  describe('Page Metadata Rendering', () => {
    test('renders page title correctly', async () => {
      await docsifyInit({
        config: {
          name: 'Test Documentation',
          nameLink: '/',
        },
        markdown: {
          homepage: '# Homepage Title',
        },
        waitForSelector: '.app-name',
      });

      const appName = document.querySelector('.app-name');
      expect(appName).toBeTruthy();
      expect(appName.textContent).toContain('Test Documentation');
    });

    test('renders page with custom configuration', async () => {
      await docsifyInit({
        config: {
          name: 'Custom Docsify Site',
          repo: 'https://github.com/docsifyjs/docsify',
          maxLevel: 4,
          subMaxLevel: 2,
        },
        markdown: {
          homepage: '# Custom Homepage',
        },
        waitForSelector: '#main h1',
      });

      expect(window.$docsify.name).toBe('Custom Docsify Site');
      expect(window.$docsify.repo).toBe('https://github.com/docsifyjs/docsify');
      expect(window.$docsify.maxLevel).toBe(4);
      expect(window.$docsify.subMaxLevel).toBe(2);
    });
  });

  // Error Handling
  // ---------------------------------------------------------------------------
  describe('Error Handling', () => {
    test('handles malformed markdown gracefully', async () => {
      const malformedMarkdown = `
        # Title
        ## Unclosed code block
        \`\`\`javascript
        console.log('missing closing backticks');
        
        # Another title
      `;

      await docsifyInit({
        markdown: {
          homepage: malformedMarkdown,
        },
        waitForSelector: '#main',
      });

      const mainContent = document.querySelector('#main');
      expect(mainContent).toBeTruthy();
      // Should still render the content, even if malformed
      expect(mainContent.textContent).toContain('Title');
    });
  });
});
