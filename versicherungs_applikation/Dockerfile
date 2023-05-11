FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
