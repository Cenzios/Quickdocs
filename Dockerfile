# --- Build Stage ---
    FROM node:18 AS build
    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm install
    
    # Copy project files and build
    COPY . .
    RUN npm run build
    
    # --- Production Stage ---
    FROM nginx:alpine
    
    # Copy the built files from the build stage
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Copy custom Nginx config for SPA routing
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Expose port 8080
    EXPOSE 8080
    
    # Start Nginx
    CMD ["nginx", "-g", "daemon off;"]
    
