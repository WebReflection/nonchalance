const {join} = require('node:path');
const {readFileSync, writeFileSync} = require('node:fs');

addTypes('index.js');
addTypes('all.js');

function addTypes(name) {
  const source = join(__dirname, '..', 'node_modules', 'proxied-html-constructors', 'esm', name);
  const dest = join(__dirname, '..', 'esm', name);
  const types = [];
  const re = /(\/\*\*[\s\S]+?\*\/)/g;
  let content = readFileSync(source).toString();
  let match;
  while (match = re.exec(content))
    types.push(match[1]);
  content = readFileSync(dest).toString();
  content = content.replace(re, '').replace(/[\r\n]{2,}/g, '\n\n');
  writeFileSync(
    dest,
    content.replace('export default', `${types.join('\n\n')}\nexport default`)
  );
}
