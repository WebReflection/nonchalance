const {join} = require('node:path');
const {readFileSync, writeFileSync} = require('node:fs');

fixDefaultExport('index');
fixDefaultExport('all');
fixDefaultExport('runtime');
fixDefaultExport('ce');
fixDefaultExport('core');

function fixDefaultExport(name) {
  const target = join(__dirname, '..', 'types', name + '.d.ts');
  const content = readFileSync(target).toString();
  writeFileSync(
    target,
    content
      .replace(/\/\*\*[\s\S]+?\*\/[\n\r]/, '')
      .replace(/^export default function _default(.+)/m, 'declare function _default$1\nexport default _default;')
  );
}
