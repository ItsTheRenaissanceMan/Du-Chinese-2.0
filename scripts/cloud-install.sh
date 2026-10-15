#!/usr/bin/env bash
set -euo pipefail
cd /workspace/Du-Chinese-2.0
export npm_config_cache=/workspace/.cache/npm
export XDG_CACHE_HOME=/workspace/.cache
export electron_config_cache=/workspace/.cache/electron
export ELECTRON_BUILDER_CACHE=/workspace/.cache/electron-builder
export NODE_USE_ENV_PROXY=1
node -e "if (Number(process.versions.node.split('.')[0]) < 24) { console.error('Hanlin cloud setup requires Node.js 24 or later.'); process.exit(1); }"
npm ci
npm run install:electron
npm run prepare:data
npm run prepare:speech
npm run prepare:tts
npm run prepare:windows-speech
npm run build
