FROM mhart/alpine-node:10.15.1
WORKDIR /srv
ADD . .
RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]