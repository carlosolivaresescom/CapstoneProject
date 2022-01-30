FROM node:14.15-buster-slim

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . . 

RUN pip install -r requirements.txt

EXPOSE 80

CMD ["npm", "start"]
