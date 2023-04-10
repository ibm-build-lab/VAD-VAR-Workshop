import {
  blue,
  cyan,
  gray,
  green,
  orange,
  purple,
  red,
  teal,
  warmGray,
  yellow
} from '@carbon/colors';
import fs from 'fs';

const file = './static/theme-template.json';

const colors = {
  '--custom-theme-desaturated-gray': warmGray[40],
  '--custom-theme-dark-blue': blue[10],
  '--custom-theme-blue': blue[50],
  '--custom-theme-sky-blue': blue[100],
  '--custom-theme-cyan': cyan[50],
  '--custom-theme-red': red[50],
  '--custom-theme-dark-red': red[10],
  '--custom-theme-light-red': red[1000],
  '--custom-theme-yellow': yellow[50],
  '--custom-theme-orange': orange[50],
  '--custom-theme-dark-orange': '#fc7b7b',
  '--custom-theme-teal': teal[50],
  '--custom-theme-green': green[50],
  '--custom-theme-purple': purple[50],
  '--custom-theme-pink': '#fca7ea',
  '--custom-theme-indigo': '#7a88cf',
  '--custom-theme-bright-cyan': cyan[10],

  // gray[50]

  '--custom-theme-gray-10-alt': gray[50],
  '--custom-theme-gray-10': gray[50],
  '--custom-theme-gray-9': gray[50],
  '--custom-theme-gray-8': gray[50],
  '--custom-theme-gray-7': gray[50],
  '--custom-theme-gray-6': gray[40],
  '--custom-theme-gray-5': gray[40],
  '--custom-theme-gray-4': gray[30],
  '--custom-theme-gray-3': gray[20],
  '--custom-theme-gray-2': gray[10],
  '--custom-theme-gray-1': gray[10]
};

const createTheme = () => {
  let rawText = fs.readFileSync(file, 'utf8');

  Object.entries(colors).forEach(([colorVar, hexStr]) => {
    rawText = rawText.replace(new RegExp(`\\${colorVar}`, 'g'), hexStr);
  });

  return JSON.parse(rawText);
};

export default createTheme;
