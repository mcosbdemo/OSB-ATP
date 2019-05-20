FROM node:6-slim
RUN apt-get update && apt-get install bzip2 && mkdir -p /reward && cd /reward
WORKDIR /reward
COPY . .
RUN npm install grunt-cli -g && npm install && grunt build:release
EXPOSE 8080
CMD ["node","server.js"]
