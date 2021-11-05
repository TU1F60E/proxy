from node:16

WORKDIR /code
COPY package*.json ./

RUN apt-get -q update && apt-get -qy install netcat
RUN npm install

COPY . .
EXPOSE 8000
