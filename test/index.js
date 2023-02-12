import nonchalance from '../esm/index.js';

const self = {
  document: {
    createElement: localName => ({localName})
  },
  HTMLAnchorElement: class HTMLAnchorElement {},
  HTMLDivElement: class HTMLDivElement {},
  HTMLElement: class HTMLElement {}
};

const HTML = nonchalance(self);

class A extends HTML.A {
  #a;
  constructor() {
    super().#a = 'A';
  }
  get a() { return this.#a }
}
class Anchor extends HTML.A {
  #a;
  constructor() {
    super().#a = 'Anchor';
  }
  get a() { return this.#a }}
class Div extends HTML.Div {}
class Element extends HTML.Element {}

console.assert((new A).a === 'A');
console.assert((new Anchor).a === 'Anchor');
console.assert(new A({}).localName === 'a');
