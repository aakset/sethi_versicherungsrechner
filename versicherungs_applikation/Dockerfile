FROM node:16.7.0-bullseye-slim as builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM nginxinc/nginx-unprivileged

COPY --from=builder /app/build/. /usr/share/nginx/html/.

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
