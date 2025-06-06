# Docsify Testing

## Environment

- [Jest](https://jestjs.io): A test framework used for assertions, mocks, spies, etc.
- [Playwright](https://playwright.dev): A test automation tool for launching browsers and manipulating the DOM.

## Test files

- Unit tests located in `/test/unit/` and use [Jest](https://jestjs.io).
- Integration tests are located in `/test/integration/` and use [Jest](https://jestjs.io).
- E2E tests are located in `/test/e2e/` and use [Jest](https://jestjs.io) + [Playwright](https://playwright.dev).

## Unit Tests for Page Documentation

The following unit tests have been added to ensure comprehensive coverage of page functionality:

### Page Rendering Tests (`test/unit/page-rendering.test.js`)

- Tests basic page rendering functionality
- Validates markdown to HTML conversion
- Checks proper HTML structure generation
- Tests error handling for malformed content
- Validates page metadata rendering

### Page Navigation Tests (`test/unit/page-navigation.test.js`)

- Tests navigation between pages
- Validates hash-based and history-based routing
- Tests sidebar navigation functionality
- Tests navbar rendering and behavior
- Validates route handling and 404 pages

### Page Content Tests (`test/unit/page-content.test.js`)

- Tests markdown table rendering
- Validates code block syntax highlighting
- Tests blockquotes and alerts
- Validates image and media content
- Tests content structure and hierarchy
- Validates accessibility features

### Page Structure Tests (`test/unit/page-structure.test.js`)

- Tests sidebar hierarchy and nested structure
- Validates navbar layout and responsive behavior
- Tests complete page layout with all components
- Validates page metadata and SEO structure
- Tests custom plugin integration

### Cloud Pages Tests (`test/unit/cloud-pages.test.js`)

- Tests cloud service documentation pages
- Validates vCloud Server specifications
- Tests storage services documentation
- Validates container services (vOKS) pages
- Tests service category organization

## CLI commands

```bash
# Run all tests
npm t

# Run test types
npm run test:e2e
npm run test:integration
npm run test:unit
```

### Unit / Integration (Jest)

```bash
# Run test file(s)
npm run test:unit -- -i ./path/to/file.test.js
npm run test:unit -- -i ./path/to/*.test.js

# Run test name(s)
npm run test:unit -- -t "my test"

# Run test name(s) in file
npm run test:unit -- -i ./path/to/file.test.js -t "my test"

# ------------------------------------------------------------------------------

# Update snapshots
npm run test:unit -- -u

# Update snapshots for test file(s)
npm run test:unit -- -u -i ./path/to/file.test.js
npm run test:unit -- -u -i ./path/to/*.test.js

# Update snapshots for test name(s)
npm run test:unit -- -u -t "my test"

# Update snapshots for test name(s) in file
npm run test:unit -- -u -i ./path/to/file.test.js -t "my test"
```

### E2E (Playwright)

```bash
# Run test file(s)
npm run test:e2e -- ./path/to/file.test.js
npm run test:e2e -- ./path/to/*.test.js

# Run test name(s)
npm run test:e2e -- -g "my test"

# Run test name(s) in file
npm run test:e2e -- ./path/to/file.test.js -g "my test"

# ------------------------------------------------------------------------------

# Update snapshots
npm run test:e2e -- -u

# Update snapshots for test file(s)
npm run test:e2e -- -u ./path/to/file.test.js
npm run test:e2e -- -u ./path/to/*.test.js

# Update snapshots for test name(s)
npm run test:e2e -- -u -g "my test"

# Update snapshots for test name(s) in file
npm run test:e2e -- -u ./path/to/file.test.js -g "my test"
```
