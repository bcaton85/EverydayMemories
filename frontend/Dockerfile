FROM node:13.5.0 as build

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Runtime
FROM node:13.5.0 

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

ENV NODE_ENV production

RUN ls

ENTRYPOINT [ "npm", "start" ]

