FROM node

WORKDIR /driveroo-driver-ms

COPY ./package.json .
COPY ./packages/gql-rest-server/package.json ./packages/gql-rest-server/
COPY ./packages/mappings/package.json ./packages/mappings/
COPY ./packages/sockets/package.json ./packages/sockets/
COPY ./packages/utils/package.json ./packages/utils/

RUN npm i -g yarn
RUN npm i -g reflect-metadata
RUN yarn install

COPY ./packages/gql-rest-server/build  ./packages/gql-rest-server/build
COPY ./packages/gql-rest-server/.env  ./packages/gql-rest-server/.env
COPY ./packages/mappings/build ./packages/mappings/build
COPY ./packages/sockets/build ./packages/sockets/build
COPY ./packages/utils/build ./packages/utils/build


WORKDIR ./packages/gql-rest-server

ENV NODE_ENV production

EXPOSE 4000
EXPOSE 5000

CMD ["node", "build/index.js"]