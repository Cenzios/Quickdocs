# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build the app
RUN npm run build

# Install a static file server (like `serve`)
RUN npm install -g serve

# Expose desired port
EXPOSE 8082

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "8082"]
