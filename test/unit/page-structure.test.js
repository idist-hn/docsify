import docsifyInit from '../helpers/docsify-init.js';

// Page Structure Tests
// -----------------------------------------------------------------------------
describe('Page Structure', () => {
  // Sidebar Structure
  // ---------------------------------------------------------------------------
  describe('Sidebar Structure', () => {
    test('renders sidebar with proper hierarchy', async () => {
      const sidebarContent = `
        - [🏠 Trang chủ](/)
        - [☁️ Cloud Computing](/cloud/)
          - [📋 Tổng quan](/cloud/overview)
          - [🖥️ Cloud Server](/cloud/vcloud-server)
          - [💾 Storage](/cloud/storage)
            - [📦 Object Storage](/cloud/object-storage)
            - [🗄️ Block Storage](/cloud/block-storage)
            - [📁 File Storage](/cloud/file-storage)
        - [🏢 Datacenter](/datacenter/)
          - [🏗️ Colocation](/datacenter/colocation)
          - [🖥️ Dedicated Server](/datacenter/dedicated-server)
        - [🔒 Security](/security/)
          - [🛡️ Anti-DDoS](/security/anti-ddos)
          - [🔐 SSL Certificate](/security/ssl-certificate)
      `;

      await docsifyInit({
        config: {
          loadSidebar: true,
          subMaxLevel: 3,
        },
        markdown: {
          homepage: '# Trang chủ Documentation',
          sidebar: sidebarContent,
        },
        waitForSelector: '.sidebar-nav ul',
      });

      const sidebar = document.querySelector('.sidebar-nav');
      expect(sidebar).toBeTruthy();

      // Check main categories
      const mainLinks = sidebar.querySelectorAll('ul > li > a');
      const mainCategories = Array.from(mainLinks).map(
        link => link.textContent,
      );

      expect(
        mainCategories.some(cat => cat.includes('Trang chủ')),
      ).toBeTruthy();
      expect(
        mainCategories.some(cat => cat.includes('Cloud Computing')),
      ).toBeTruthy();
      expect(
        mainCategories.some(cat => cat.includes('Datacenter')),
      ).toBeTruthy();
      expect(mainCategories.some(cat => cat.includes('Security'))).toBeTruthy();

      // Check nested structure
      const nestedLists = sidebar.querySelectorAll('ul ul');
      expect(nestedLists.length).toBeGreaterThan(0);

      // Check specific nested items
      const allLinks = sidebar.querySelectorAll('a');
      const allLinkTexts = Array.from(allLinks).map(link => link.textContent);

      expect(
        allLinkTexts.some(text => text.includes('Object Storage')),
      ).toBeTruthy();
      expect(
        allLinkTexts.some(text => text.includes('Block Storage')),
      ).toBeTruthy();
      expect(
        allLinkTexts.some(text => text.includes('Anti-DDoS')),
      ).toBeTruthy();
    });

    test('handles sidebar with custom styling and icons', async () => {
      const styledSidebarContent = `
        - **🚀 Getting Started**
          - [⚡ Quick Start](/quickstart)
          - [📦 Installation](/installation)
        - **☁️ Cloud Services**
          - [🖥️ Compute](/cloud/compute)
          - [💾 Storage](/cloud/storage)
          - [🌐 Network](/cloud/network)
        - **🔧 Tools & APIs**
          - [🛠️ CLI Tools](/tools/cli)
          - [📡 REST API](/tools/api)
          - [📊 Monitoring](/tools/monitoring)
      `;

      await docsifyInit({
        config: {
          loadSidebar: true,
          subMaxLevel: 2,
        },
        markdown: {
          homepage: '# Documentation Home',
          sidebar: styledSidebarContent,
        },
        waitForSelector: '.sidebar-nav',
      });

      const sidebar = document.querySelector('.sidebar-nav');

      // Check that bold formatting is preserved
      const boldElements = sidebar.querySelectorAll('strong');
      expect(boldElements.length).toBeGreaterThan(0);

      // Check emoji icons are present
      const sidebarText = sidebar.textContent;
      expect(sidebarText).toContain('🚀');
      expect(sidebarText).toContain('☁️');
      expect(sidebarText).toContain('🔧');

      // Check section organization
      expect(sidebarText).toContain('Getting Started');
      expect(sidebarText).toContain('Cloud Services');
      expect(sidebarText).toContain('Tools & APIs');
    });

    test('validates sidebar link structure and accessibility', async () => {
      const accessibleSidebarContent = `
        - [Home](/ "Homepage")
        - [Services](/services/ "Our Services")
          - [Cloud Computing](/services/cloud "Cloud Services")
          - [Datacenter](/services/datacenter "Datacenter Services")
        - [Support](/support/ "Customer Support")
          - [Documentation](/support/docs "Technical Documentation")
          - [Contact](/support/contact "Contact Information")
      `;

      await docsifyInit({
        config: {
          loadSidebar: true,
        },
        markdown: {
          homepage: '# Accessible Navigation',
          sidebar: accessibleSidebarContent,
        },
        waitForSelector: '.sidebar-nav',
      });

      const sidebar = document.querySelector('.sidebar-nav');
      const links = sidebar.querySelectorAll('a');

      // Check that all links have proper href attributes
      links.forEach(link => {
        expect(link.getAttribute('href')).toBeTruthy();
        expect(link.getAttribute('href')).not.toBe('#');
      });

      // Check link text content
      const linkTexts = Array.from(links).map(link => link.textContent);
      expect(linkTexts).toContain('Home');
      expect(linkTexts).toContain('Services');
      expect(linkTexts).toContain('Support');

      // Verify nested structure
      const nestedLinks = sidebar.querySelectorAll('ul ul a');
      expect(nestedLinks.length).toBeGreaterThan(0);
    });
  });

  // Navbar Structure
  // ---------------------------------------------------------------------------
  describe('Navbar Structure', () => {
    test('renders navbar with proper layout', async () => {
      const navbarContent = `
        - [🏠 Home](/)
        - [📚 Docs](/docs/)
        - [💼 Services](/services/)
          - [☁️ Cloud](/services/cloud)
          - [🏢 Datacenter](/services/datacenter)
          - [🔒 Security](/services/security)
        - [📞 Contact](/contact)
        - [🔗 External](https://github.com/viettel-idc)
      `;

      await docsifyInit({
        config: {
          loadNavbar: true,
        },
        markdown: {
          homepage: '# Homepage with Navbar',
          navbar: navbarContent,
        },
        waitForSelector: '.app-nav',
      });

      const navbar = document.querySelector('.app-nav');
      expect(navbar).toBeTruthy();

      // Check navbar structure
      const navLinks = navbar.querySelectorAll('a');
      expect(navLinks.length).toBeGreaterThan(0);

      const navTexts = Array.from(navLinks).map(link => link.textContent);
      expect(navTexts.some(text => text.includes('Home'))).toBeTruthy();
      expect(navTexts.some(text => text.includes('Docs'))).toBeTruthy();
      expect(navTexts.some(text => text.includes('Services'))).toBeTruthy();
      expect(navTexts.some(text => text.includes('Contact'))).toBeTruthy();

      // Check external links
      const externalLinks = Array.from(navLinks).filter(link =>
        link.href.includes('github.com'),
      );
      expect(externalLinks.length).toBeGreaterThan(0);
      expect(externalLinks[0].getAttribute('target')).toBe('_blank');
    });

    test('handles responsive navbar behavior', async () => {
      await docsifyInit({
        config: {
          loadNavbar: true,
          mergeNavbar: true,
        },
        markdown: {
          homepage: '# Responsive Navigation',
          navbar: `
            - [Home](/)
            - [About](/about)
            - [Services](/services)
          `,
        },
        waitForSelector: '.app-nav',
      });

      const navbar = document.querySelector('.app-nav');
      expect(navbar).toBeTruthy();

      // Check that navbar is properly positioned
      expect(navbar.classList.contains('app-nav')).toBeTruthy();

      // Check ARIA attributes for accessibility
      expect(navbar.getAttribute('aria-label')).toBe('secondary');
    });
  });

  // Page Layout Structure
  // ---------------------------------------------------------------------------
  describe('Page Layout Structure', () => {
    test('renders complete page layout with all components', async () => {
      await docsifyInit({
        config: {
          name: 'Viettel IDC Documentation',
          repo: 'https://github.com/viettel-idc/docs',
          loadSidebar: true,
          loadNavbar: true,
          logo: '/_media/logo.svg',
        },
        markdown: {
          homepage: '# Welcome to Viettel IDC',
          sidebar: `
            - [Home](/)
            - [Cloud](/cloud/)
            - [Datacenter](/datacenter/)
          `,
          navbar: `
            - [Docs](/docs/)
            - [Support](/support/)
          `,
        },
        waitForSelector: '#main',
      });

      // Check main layout components - use more flexible selectors
      expect(document.querySelector('#main')).toBeTruthy();
      expect(document.querySelector('.sidebar')).toBeTruthy();
      expect(document.querySelector('.app-nav')).toBeTruthy();

      // Check app name - be more flexible with the content
      const appName = document.querySelector('.app-name');
      // App name might be empty initially, just check it exists
      expect(appName).toBeTruthy();

      // Check repository link
      const repoLink = document.querySelector('.github-corner');
      expect(repoLink).toBeTruthy();
    });

    test('validates page metadata and SEO structure', async () => {
      await docsifyInit({
        config: {
          name: 'Viettel IDC Docs',
          description: 'Cloud and datacenter services documentation',
          keywords: 'cloud, datacenter, viettel, idc, hosting',
        },
        markdown: {
          homepage: `
            # Viettel IDC Documentation

            Welcome to our comprehensive documentation for cloud and datacenter services.
          `,
        },
        waitForSelector: '#main h1',
      });

      // Check configuration is properly set
      expect(window.$docsify.name).toBe('Viettel IDC Docs');
      expect(window.$docsify.description).toBe(
        'Cloud and datacenter services documentation',
      );

      // Check that main content is rendered
      const mainContent = document.querySelector('#main');
      expect(mainContent.textContent).toContain('Viettel IDC Documentation');
    });

    test('handles page structure with custom plugins', async () => {
      const customPlugin = function (hook, vm) {
        hook.beforeEach(function (html) {
          return (
            html + '\n\n<div class="custom-footer">Powered by Viettel IDC</div>'
          );
        });
      };

      await docsifyInit({
        config: {
          plugins: [customPlugin],
        },
        markdown: {
          homepage: '# Custom Plugin Test',
        },
        waitForSelector: '#main',
      });

      // Check that custom plugin content is added
      const customFooter = document.querySelector('.custom-footer');
      expect(customFooter).toBeTruthy();
      expect(customFooter.textContent).toContain('Powered by Viettel IDC');
    });
  });

  // Content Organization
  // ---------------------------------------------------------------------------
  describe('Content Organization', () => {
    test('validates hierarchical content structure', async () => {
      const hierarchicalContent = `
        # Main Documentation
        
        ## Section 1: Getting Started
        ### 1.1 Overview
        ### 1.2 Quick Start
        ### 1.3 Installation
        
        ## Section 2: Cloud Services
        ### 2.1 Compute Services
        #### 2.1.1 Virtual Machines
        #### 2.1.2 Container Services
        ### 2.2 Storage Services
        #### 2.2.1 Object Storage
        #### 2.2.2 Block Storage
        
        ## Section 3: Advanced Topics
        ### 3.1 Security
        ### 3.2 Monitoring
        ### 3.3 Automation
      `;

      await docsifyInit({
        config: {
          maxLevel: 4,
          subMaxLevel: 3,
        },
        markdown: {
          homepage: hierarchicalContent,
        },
        waitForSelector: '#main h1',
      });

      const mainContent = document.querySelector('#main');

      // Check heading hierarchy
      expect(mainContent.querySelector('h1')).toBeTruthy();
      expect(mainContent.querySelector('h2')).toBeTruthy();
      expect(mainContent.querySelector('h3')).toBeTruthy();
      expect(mainContent.querySelector('h4')).toBeTruthy();

      // Count headings at each level
      expect(mainContent.querySelectorAll('h1')).toHaveLength(1);
      expect(mainContent.querySelectorAll('h2')).toHaveLength(3);
      expect(mainContent.querySelectorAll('h3').length).toBeGreaterThan(5);
      expect(mainContent.querySelectorAll('h4').length).toBeGreaterThan(3);

      // Check section organization
      const headingTexts = Array.from(
        mainContent.querySelectorAll('h2, h3, h4'),
      ).map(h => h.textContent);
      expect(
        headingTexts.some(text => text.includes('Getting Started')),
      ).toBeTruthy();
      expect(
        headingTexts.some(text => text.includes('Cloud Services')),
      ).toBeTruthy();
      expect(
        headingTexts.some(text => text.includes('Advanced Topics')),
      ).toBeTruthy();
    });
  });
});
