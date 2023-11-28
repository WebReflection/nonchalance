import QSAO from 'qsa-observer';

let Classes = new Map;
let query = [];
let { parse } = QSAO({ query, document, handle(element, connected, selector) {
  if (connected) {
    let Class = Classes.get(selector);
    if (!(element instanceof Class))
      new Class(element);
  }
}});

export const define = (selector, Class) => {
  if (Classes.has(selector))
    throw new TypeError(`Duplicated selector: ${selector}`);
  Classes.set(selector, Class);
  query.push(selector);
  parse(document.querySelectorAll(selector));
  return Class;
};
