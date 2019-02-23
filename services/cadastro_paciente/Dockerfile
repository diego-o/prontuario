FROM node:10.7
MAINTAINER diego_1souza@hotmail.com
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "run", "start"]