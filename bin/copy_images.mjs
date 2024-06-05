#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';

const TARGET = './out';
const files = fg.globSync('./content/labs/**/*.{png,jpg,jpeg,webp,svg}');

files.forEach((image_path) => {
  const new_path = path.join(TARGET, image_path);
  const dir = path.dirname(new_path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(image_path, new_path);
});

console.log('Done copying images!');
