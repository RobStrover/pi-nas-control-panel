#!/usr/bin/env bash

SCRIPT_DIR=$(dirname "$0")

cd "$SCRIPT_DIR"/../

git pull

npm install pm2@latest -g

npm install
npm run build
pm2 start npm -- start