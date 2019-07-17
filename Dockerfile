FROM node:8

WORKDIR ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "src/index.js"]