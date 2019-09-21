FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/www/* /usr/share/nginx/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]