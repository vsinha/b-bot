FROM node:8.9.1

RUN npm install -g coffee-script

WORKDIR /opt

ADD package.json /opt
RUN npm install --production

ADD run.sh /opt

ADD scripts /opt/scripts
ADD util /opt/util

CMD ["/opt/run.sh"]
