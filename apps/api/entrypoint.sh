#!/bin/sh
set -e

if [ $1 = "DEV" ]; then 
    echo "Running in $1 mode"
    npx prisma generate --schema="./apps/api/prisma/schema.prisma"
    npx prisma migrate deploy --schema="./apps/api/prisma/schema.prisma"
    nx serve api
else
    echo "Running in production mode"
    npx prisma generate
    npx prisma migrate deploy
    node ./dist/main.js
fi

