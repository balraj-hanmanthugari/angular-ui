FROM node:14.16.1

ENV NODE_ENV=production

WORKDIR /src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci

COPY . .

CMD [ "node", "server.js" ]