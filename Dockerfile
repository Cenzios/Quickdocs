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
    COPY --from=build /app/dist /usr/share/nginx/html
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    