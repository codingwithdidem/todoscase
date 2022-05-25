FROM node:17-alpine3.12

WORKDIR /frontend-modules
COPY package.json package.json
RUN npm i 
 
WORKDIR /frontend 
EXPOSE 8000:8000
 
CMD ["sh","-c","rm -rf ./node_modules && cp -rf /frontend-modules/node_modules ./node_modules && cp -rf /frontend-modules/package-lock.json ./package-lock.json && npm run dev"]