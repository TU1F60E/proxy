from node:16

WORKDIR /usr/src/app
COPY package*.json ./

RUN apt-get -q update && apt-get -qy install netcat
RUN npm install

COPY . .
EXPOSE 8000
