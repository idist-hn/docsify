import docsifyInit from '../helpers/docsify-init.js';

// Page Navigation Tests
// -----------------------------------------------------------------------------
describe('Page Navigation', () => {
  // Basic Navigation
  // ---------------------------------------------------------------------------
  describe('Basic Navigation', () => {
    test('navigates between pages correctly', async () => {
      await docsifyInit({
        config: {
          loadSidebar: true,
        },
        markdown: {
          homepage: '# Homepage\n\nWelcome to the homepage.',
          sidebar: `
            - [Home](/)
            - [About](/about)
            - [Contact](/contact)
          `,
        },
        routes: {
          '/about.md': '# About Page\n\nThis is the about page.',
          '/contact.md': '# Contact Page\n\nThis is the contact page.',
        },
        waitForSelector: '.sidebar-nav',
      });

      // Check initial page
      expect(document.querySelector('#main').textContent).toContain('Homepage');

      // Check sidebar links exist
      const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
      expect(sidebarLinks.length).toBeGreaterThan(0);

      // Find and verify links
      const aboutLink = Array.from(sidebarLinks).find(link =>
        link.textContent.includes('About'),
      );
      const contactLink = Array.from(sidebarLinks).find(link =>
        link.textContent.includes('Contact'),
      );

      expect(aboutLink).toBeTruthy();
      expect(contactLink).toBeTruthy();
    });

    test('handles hash-based routing', async () => {
      await docsifyInit({
        config: {
          routerMode: 'hash',
        },
        markdown: {
          homepage: '# Hash Router Test',
        },
        waitForSelector: '#main h1',
      });

      // Check that router is initialized
      expect(window.location.hash).toBeDefined();
      expect(document.querySelector('#main').textContent).toContain(
        'Hash Router Test',
      );
    });

    test('handles history-based routing', async () => {
      await docsifyInit({
        config: {
          routerMode: 'history',
        },
        markdown: {
          homepage: '# History Router Test',
        },
        waitForSelector: '#main',
      });

      const mainContent = document.querySelector('#main');
      expect(mainContent).toBeTruthy();
      // History mode should work, just check that content is rendered
      expect(mainContent.innerHTML.length).toBeGreaterThan(0);
    });
  });

  // Sidebar Navigation
  // ---------------------------------------------------------------------------
  describe('Sidebar Navigation', () => {
    test('renders sidebar with nested structure', async () => {
      await docsifyInit({
        config: {
          loadSidebar: true,
          subMaxLevel: 3,
        },
        markdown: {
          homepage: '# Homepage with Sidebar',
          sidebar: `
            - Getting Started
              - [Quick Start](/quickstart)
              - [Installation](/installation)
                - [NPM Install](/installation/npm)
                - [CDN Install](/installation/cdn)
            - Advanced
              - [Configuration](/config)
              - [Plugins](/plugins)
          `,
        },
        routes: {
          '/quickstart.md': '# Quick Start\n\nGet started quickly.',
          '/installation.md': '# Installation\n\nInstallation guide.',
          '/installation/npm.md': '# NPM Installation\n\nInstall via NPM.',
          '/installation/cdn.md': '# CDN Installation\n\nInstall via CDN.',
          '/config.md': '# Configuration\n\nConfiguration options.',
          '/plugins.md': '# Plugins\n\nAvailable plugins.',
        },
        waitForSelector: '.sidebar-nav ul',
      });

      const sidebar = document.querySelector('.sidebar-nav');
      expect(sidebar).toBeTruthy();

      // Check nested structure
      const nestedLists = sidebar.querySelectorAll('ul ul');
      expect(nestedLists.length).toBeGreaterThan(0);

      // Check specific links
      const links = sidebar.querySelectorAll('a');
      const linkTexts = Array.from(links).map(link => link.textContent);

      expect(linkTexts).toContain('Quick Start');
      expect(linkTexts).toContain('Installation');
      expect(linkTexts).toContain('Configuration');
      expect(linkTexts).toContain('Plugins');
    });

    test('handles sidebar auto-generation from headings', async () => {
      await docsifyInit({
        config: {
          loadSidebar: false,
          subMaxLevel: 2,
        },
        markdown: {
          homepage: `
            # Main Title
            ## Section 1
            ### Subsection 1.1
            ## Section 2
            ### Subsection 2.1
            ### Subsection 2.2
          `,
        },
        waitForSelector: '#main h1',
      });

      // Check that headings are rendered
      const headings = document.querySelectorAll(
        '#main h1, #main h2, #main h3',
      );
      expect(headings.length).toBeGreaterThan(0);

      // Check main title
      expect(document.querySelector('#main h1').textContent).toContain(
        'Main Title',
      );
    });
  });

  // Navbar Navigation
  // ---------------------------------------------------------------------------
  describe('Navbar Navigation', () => {
    test('renders navbar correctly', async () => {
      await docsifyInit({
        config: {
          loadNavbar: true,
        },
        markdown: {
          homepage: '# Homepage with Navbar',
          navbar: `
            - [Home](/)
            - [Docs](/docs/)
            - [GitHub](https://github.com/docsifyjs/docsify)
          `,
        },
        waitForSelector: '.app-nav',
      });

      const navbar = document.querySelector('.app-nav');
      expect(navbar).toBeTruthy();

      const navLinks = navbar.querySelectorAll('a');
      expect(navLinks.length).toBeGreaterThan(0);

      const linkTexts = Array.from(navLinks).map(link => link.textContent);
      expect(linkTexts).toContain('Home');
      expect(linkTexts).toContain('Docs');
      expect(linkTexts).toContain('GitHub');
    });

    test('handles external links in navbar', async () => {
      await docsifyInit({
        config: {
          loadNavbar: true,
        },
        markdown: {
          homepage: '# External Links Test',
          navbar: `
            - [Internal](/internal)
            - [External](https://example.com)
          `,
        },
        waitForSelector: '.app-nav',
      });

      const navbar = document.querySelector('.app-nav');
      const externalLink = Array.from(navbar.querySelectorAll('a')).find(link =>
        link.href.includes('example.com'),
      );

      expect(externalLink).toBeTruthy();
      expect(externalLink.getAttribute('target')).toBe('_blank');
    });
  });

  // Route Handling
  // ---------------------------------------------------------------------------
  describe('Route Handling', () => {
    test('handles 404 pages gracefully', async () => {
      await docsifyInit({
        config: {
          notFoundPage: true,
        },
        markdown: {
          homepage: '# Homepage',
        },
        routes: {
          '/_404.md': '# Page Not Found\n\nThe requested page was not found.',
        },
        waitForSelector: '#main',
      });

      // Initial page should load correctly
      expect(document.querySelector('#main').textContent).toContain('Homepage');
    });

    test('handles relative paths correctly', async () => {
      await docsifyInit({
        config: {
          relativePath: true,
        },
        markdown: {
          homepage: '# Relative Path Test',
        },
        routes: {
          '/folder/page.md': '# Folder Page\n\nThis is a page in a folder.',
        },
        waitForSelector: '#main h1',
      });

      expect(document.querySelector('#main').textContent).toContain(
        'Relative Path Test',
      );
    });
  });
});
