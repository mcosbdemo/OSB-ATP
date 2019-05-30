FROM kennethheung/pointbase:latest

# setup environment variables
#   This should be replaced by k8s
#   kubectl / docker run
#   arguments
ENV LD_LIBRARY_PATH="/opt/oracle/instantclient_19_3"
ENV TNS_ADMIN="/db-demo/creds"
ENV WALLET_LOCATION="/db-demo/creds"

# install all required dependencies and create subdir
RUN mkdir -p /reward

WORKDIR /reward
COPY . .

RUN cd /reward \
  && npm install
#  && grunt build:release
EXPOSE 80
CMD ["node","server.js"]
