FROM node:17-alpine3.12

WORKDIR /usr/src/app
COPY . .

RUN npm i

EXPOSE 8001:8001

CMD ["npm", "run", "start"]
