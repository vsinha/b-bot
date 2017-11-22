FROM node:8.9.1

RUN npm install -g coffee-script

ADD scripts /opt/scripts
ADD package.json /opt
ADD run.sh /opt
WORKDIR /opt

RUN npm install --production

CMD ["/opt/run.sh"]
