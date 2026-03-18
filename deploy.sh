#!/bin/bash

# Load NVM so the script knows where npm is
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd ci-cd-class
git pull origin main
npm install
npm run build

# Install PM2 globally (it's fine if it's already installed)
npm install -g pm2

# Restart the app if it's already running, otherwise start a new background process
pm2 restart ci-cd-app || pm2 start npm --name "ci-cd-app" -- start