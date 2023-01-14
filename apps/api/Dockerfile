# syntax=docker/dockerfile:1
FROM node:18-alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /api
COPY dist/package.json ./
COPY dist/pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build

WORKDIR /api
COPY . .
COPY --from=dependencies /api/node_modules ./node_modules

FROM base AS deploy

WORKDIR /api
COPY dist/ ./
COPY ./entrypoint.sh ./
COPY prisma/ ./
COPY --from=build /api/node_modules ./node_modules
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/api/entrypoint.sh"]
CMD ["sh"]