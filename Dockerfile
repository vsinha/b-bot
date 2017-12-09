FROM node:8.9.1

# hubot wants to use global coffee
RUN npm install -g coffee-script

# install packages
ADD package.json /opt
WORKDIR /opt
RUN npm install

# add the codes
ADD . /opt
RUN npm run build

# ship it
CMD ["/opt/run.sh"]
