FROM node:14.15-buster-slim

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . . 

EXPOSE 80

CMD ["npm", "run", "startlinux"]
