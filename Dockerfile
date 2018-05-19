FROM node:10.1.0-alpine

# Create app directory
WORKDIR /usr/src/app

# add npm package
COPY package.json /usr/src/app/

# install
RUN npm install --registry=https://registry.npm.taobao.org

# copy code
COPY . /usr/src/app

# build
RUN npm run ci

ENV PORT=80

EXPOSE 80

CMD yarn start