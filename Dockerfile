# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Preview Stage (Serving with Vite Preview for "App Service")
# We use this instead of Nginx here because the request asked for a separate Webserver service.
FROM node:20-alpine AS app

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/vite.config.js ./

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "--port", "4173"]
