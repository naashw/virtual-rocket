# syntax=docker/dockerfile:1
FROM node:18-alpine AS base

WORKDIR /api
RUN npm i -g pnpm
RUN npm install -g @nestjs/cli

FROM base AS dependencies

COPY dist/ .
RUN pnpm install --frozen-lockfile

FROM base AS deploy

COPY . .
COPY --from=dependencies /api/node_modules ./node_modules
