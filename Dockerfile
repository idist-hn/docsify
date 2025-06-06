# # Multi-stage build for Docsify documentation
# FROM node:18-alpine AS builder

# # Set working directory
# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm ci --only=production

# # Install docsify-cli globally
# RUN npm install -g docsify-cli

# Production stage
FROM node:24-alpine

# Install docsify-cli globally
RUN npm install -g docsify-cli

# Create app directory
WORKDIR /app

# Copy documentation files
COPY docs/ ./docs/
COPY *.md ./

# Expose port 3001
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3001 || exit 1

# Start docsify server
CMD ["docsify", "serve", "docs", "--port", "3001"]