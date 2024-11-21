
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8084

CMD ["npm", "start"]
