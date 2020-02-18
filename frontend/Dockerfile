FROM alpine

RUN apk add --update npm

RUN npm install -g ionic

COPY . .

RUN npm install

ENTRYPOINT ["ionic", "serve"]