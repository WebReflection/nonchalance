import('../esm/dummy.js').then(test);

function test({default: nonchalance}) {
  const {HTML} = nonchalance();

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

  console.assert(A.tag === 'a');
  console.assert(Anchor.tag === 'a');
}
