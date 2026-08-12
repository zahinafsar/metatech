FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/server/package.json apps/server/package.json
COPY lib/data/package.json lib/data/package.json
COPY lib/state/package.json lib/state/package.json
COPY lib/ui/package.json lib/ui/package.json

RUN npm install --omit=dev --ignore-scripts -w metatech-server --include-workspace-root

COPY lib/data lib/data
COPY apps/server apps/server

ENV NODE_ENV=production
ENV PORT=8082

EXPOSE 8082

CMD ["node", "--experimental-strip-types", "apps/server/src/index.ts"]
