const {join} = require('node:path');
const {readFileSync, writeFileSync} = require('node:fs');

const target = join(__dirname, '..', 'types', 'ce.d.ts');
const classes = [];
const transformed = new Set;
const content = readFileSync(target).toString().replace(/((?:HTML|SVG)[a-z0-9]+)/ig, (_, $1) => {
  if (!transformed.has($1)) {
    transformed.add($1);
    classes.push(`class Custom${$1} extends ${$1} {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};
`);
  }
  return `Custom${$1}`;
});
writeFileSync(target, content.replace(/;\s*$/, `;\n\n${classes.join('\n')}`));
