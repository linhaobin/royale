FROM node:10.1.0-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# add npm package
COPY package.json /usr/src/app/package.json

# install
RUN yarn --registry=https://registry.npm.taobao.org

# copy code
COPY . /usr/src/app

# build
RUN yarn ci

ENV PORT=80

EXPOSE 80

CMD yarn start