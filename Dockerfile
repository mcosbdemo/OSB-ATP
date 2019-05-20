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
ADD ./oracle .
RUN unzip instantclient-basiclite-linux.x64-12.2.0.1.0 -d /opt/oracle

# setup environment variables
#   This should be replaced by k8s
#   kubectl / docker run
#   arguments
ENV LD_LIBRARY_PATH="/opt/oracle/instantclient_12_2"
ENV TNS_ADMIN="/usr/src/app/Wallet_ATPDemoDB"
ENV WALLET_LOCATION="/usr/src/app/Wallet_ATPDemoDB"

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
