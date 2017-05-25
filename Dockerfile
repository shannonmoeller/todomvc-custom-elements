FROM node:6
WORKDIR /src

COPY package.json .
RUN npm install
COPY . .

ENV NODE_ENV production
CMD npm run prod && npm run start
