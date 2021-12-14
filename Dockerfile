FROM node:14

WORKDIR /back

COPY package.json ./

COPY yarn.lock ./

COPY ./ ./

RUN yarn install

CMD ["yarn", "start"]
