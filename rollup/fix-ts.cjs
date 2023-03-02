const {join} = require('node:path');
const {readFileSync, writeFileSync} = require('node:fs');

fixDefaultExport('builtin');
fixDefaultExport('ce');
fixDefaultExport('core');
fixDefaultExport('dummy');
fixDefaultExport('jsx');

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
