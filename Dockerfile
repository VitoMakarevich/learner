FROM node:12-alpine

RUN apk add g++ make python
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build
EXPOSE 7000

CMD [ "npm", "run", "start:prod" ]
