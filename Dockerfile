FROM node:6

# install all required dependencies and create subdir
RUN apt-get update \
  && apt-get install -y bzip2 \
  && apt-get install -y libaio1 \
  && apt-get install -y build-essential \
  && apt-get install -y unzip \
  && apt-get install -y curl \
  && mkdir -p /reward \
  && mkdir -p opt/oracle
# copy and unzip db libraries
ADD ./oracle/instantclient-basiclite-linux.x64-19.3.0.0.0dbru.zip .
RUN unzip instantclient-basiclite-linux.x64-19.3.0.0.0dbru.zip -d /opt/oracle

# setup environment variables
#   This should be replaced by k8s
#   kubectl / docker run
#   arguments
ENV LD_LIBRARY_PATH="/opt/oracle/instantclient_19_3"
ENV TNS_ADMIN="/db-demo/creds"
ENV WALLET_LOCATION="/db-demo/creds"

# 2nd round of copy & run
# this should copy the actual app and do the installation
WORKDIR /reward
COPY . .

#  && cd /reward

RUN cd /reward \
  && npm install grunt-cli -g \
  && npm install \
  && grunt build:release
EXPOSE 8080
CMD ["node","server.js"]
