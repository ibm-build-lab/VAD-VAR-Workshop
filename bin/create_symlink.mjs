#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const SYMLINK_FOLDER = 'content';

const root_dir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../'
);

console.log(root_dir);
const target = path.join(root_dir, 'public', SYMLINK_FOLDER);

if (fs.existsSync(target)) {
  process.exit(0);
}

console.log('creating symlink');
const source = path.join(root_dir, SYMLINK_FOLDER);
fs.symlinkSync(source, target, 'dir');

process.exit(0);
