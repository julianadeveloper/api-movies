FROM node:16-alpine

USER root

WORKDIR /home/api-movies

COPY . .

EXPOSE 3333