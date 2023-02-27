// TO BE COPIED AND PASTED ON A MODERN BROWSER

const types = [];
for (const Class of Reflect.ownKeys(globalThis)) {
  if (/^SVG(.*?)Element$/.test(Class))
      types.push(` * @property {new () => ${Class}} ${RegExp.$1}`);
}

console.log(`
/**
 * @typedef {Object} SVG
${types.reverse().join('\n')}
 */`);