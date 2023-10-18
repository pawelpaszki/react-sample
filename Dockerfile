FROM node:slim

WORKDIR /react-counter-app

COPY . .
RUN npm cache clean --force
RUN npm i

CMD npm start