FROM node:10.15.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

WORKDIR /app

CMD ["npm", "start"]
