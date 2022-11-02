FROM node:16.10.0-alpine

WORKDIR /frontend

COPY . .

EXPOSE 3000

RUN npm cache clean --force
RUN npm install -g react-scripts
RUN npm install
