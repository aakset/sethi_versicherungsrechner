FROM node:14-alpine

WORKDIR /app

RUN git clone https://github.com/aakset/sethi_versicherungsrechner.git

WORKDIR /app/sethi_versicherungsrechner

RUN npm install

RUN npm install react-router-dom

CMD ["npm", "start"]
