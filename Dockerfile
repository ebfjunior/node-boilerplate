FROM node
MAINTAINER Edson Júnior
COPY . /var/application/current
WORKDIR /var/application/current
RUN npm install
EXPOSE 3000
ENTRYPOINT npm run start
