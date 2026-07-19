# ---------- Stage 1: Build React App ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build React app
RUN npm run build

# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:1.27-alpine

# Copy custom nginx config (if present)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]