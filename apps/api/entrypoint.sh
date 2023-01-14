#!/bin/sh
set -e

npx prisma generate
npx prisma migrate deploy
node ./main.js
