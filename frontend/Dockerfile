FROM node:17-alpine3.12

WORKDIR /usr/src/app
COPY . .

RUN npm i
RUN ["npm", "run", "build"]

EXPOSE 8000:8000

CMD ["npm", "run", "start"]
