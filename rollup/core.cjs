const {join} = require('node:path');
const {readFileSync, writeFileSync} = require('node:fs');

const min = join(__dirname, '..', 'core.js');
writeFileSync(
  min,
  readFileSync(min).toString()
    .replace(/^const\{setPrototypeOf:(.+)\}=Object;let /, 'let{setPrototypeOf:$1}=Object,')
    .replace(';var ', ',')
);
