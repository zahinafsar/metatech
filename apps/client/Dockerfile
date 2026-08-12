FROM node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/client/package.json apps/client/package.json
COPY apps/server/package.json apps/server/package.json
COPY lib/data/package.json lib/data/package.json
COPY lib/state/package.json lib/state/package.json
COPY lib/ui/package.json lib/ui/package.json

RUN npm install

COPY lib lib
COPY apps/client apps/client

ENV VITE_API_URL=https://api.metatech.zahinafsar.com/api

RUN npm run build --workspace metatech-client

FROM nginx:alpine

COPY apps/client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/client/dist /usr/share/nginx/html

EXPOSE 8081
