FROM node:10-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install create-react-app -g && npm install

# Bundle app source
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
