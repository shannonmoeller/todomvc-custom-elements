FROM node:8
WORKDIR /src

COPY package.json .
RUN npm install
COPY . .

ENV NODE_ENV production
CMD npm run start
