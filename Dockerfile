FROM node:alpine

LABEL MAINTAINER="Sriram Tanikella <sriram18981@gmail.com>"
EXPOSE 8888

WORKDIR /src
ADD . .

RUN mkdir -p /data/logs/
RUN npm install

CMD ["npm", "start"]
