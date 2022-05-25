FROM node:17-alpine3.12
 
WORKDIR /backend-modules
COPY package.json package.json
RUN npm i 
RUN npm install -g nodemon 

WORKDIR /backend 
EXPOSE 8001:8001
 
CMD ["sh","-c","rm -rf ./node_modules && cp -rf /backend-modules/node_modules ./node_modules && cp -rf /backend-modules/package-lock.json ./package-lock.json && nodemon /backend/server.js"]