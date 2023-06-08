FROM node:16.13.0-alpine3.12 
COPY . /app　
WORKDIR /app
CMD node /src/app.jsx