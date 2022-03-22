#!/bin/sh
cd .

git pull

npm install pm2@latest -g

npm install
npm run build
pm2 start npm -- start