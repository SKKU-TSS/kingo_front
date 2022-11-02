FROM node:16.10.0-alpine

WORKDIR /frontend

EXPOSE 3000

COPY ./package*.json ./
RUN npm cache clean --force
RUN npm install -g react-scripts
RUN npm install

COPY ./ ./
