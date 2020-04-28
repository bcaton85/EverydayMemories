# Build
FROM node:13.5.0 as build

USER root

WORKDIR /app

COPY . .

RUN npm install 

RUN npm run build

# Runtime
FROM node:13.5.0 as production

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=build /app/dist dist

COPY --from=build /app/node_modules node_modules

COPY --from=build /app/src/secrets /usr/src/app/dist/secrets

COPY --from=build /app/.env.production .env.production

COPY --from=build /app/.env.local .env.local

ENTRYPOINT [ "node", "dist/main.js" ]
