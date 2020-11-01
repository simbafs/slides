FROM node:12

# build environment
WORKDIR /app
COPY package*.json ./
RUN npm i --only=production

COPY . ./
EXPOSE 3300
CMD ["node", "bin/www"]

