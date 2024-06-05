#!/usr/bin/env bash

set -e

find ./content/labs -type f -name '*.jpg' -o \
  -name '*.png' -o \
  -name '*.jpeg' -o \
  -name '*.webp' -o \
  -name '*.svg' | xargs -tI % sh -c 'cp -r % ./out'
