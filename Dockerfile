FROM node:10-alpine

RUN apk add --no-cache git

EXPOSE 8000

WORKDIR /app