FROM node:16

WORKDIR /usr/src/app

ENV REACT_BACKEND_URL="http://localhost:3000"

COPY . .

RUN npm install

CMD ["npm", "start"]