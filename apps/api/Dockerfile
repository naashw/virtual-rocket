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
ENV DATABASE_URL=${DATABASE_URL}
RUN npx prisma generate
RUN npx prisma migrate deploy

FROM base AS deploy

WORKDIR /api
ENV DATABASE_URL=${DATABASE_URL}
COPY dist/ ./
COPY --from=build /api/node_modules ./node_modules
CMD node /api/main.js