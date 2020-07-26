#!/bin/bash

# Force exit error
set -eo pipefail

echo "[INFO] Building the app"
npm run compile

echo "[INFO] Mounting the build package at $(pwd)/build"
mkdir build \
  && cp -R lib/* build \
  && cp -R node_modules build/node_modules \
  && cp package.json build \
  && cp package-lock.lock build \
  && cp Dockerfile build
echo "[INFO] The build is completed"