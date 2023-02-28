# Nonchalance

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/nonchalance/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/nonchalance?branch=main) [![build status](https://github.com/WebReflection/nonchalance/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/nonchalance/actions)

<sup>**Social Media Photo by [Andre Taissin](https://unsplash.com/@andretaissin) on [Unsplash](https://unsplash.com/)**</sup>

The easiest way to augment any DOM builtin element:

  * **No polyfills needed**, all modern browsers just work™️
  * it's possible to extend *HTML*, *SVG*, or any other custom namespace, such as *MathML*, without issues
  * elements can be either created from scratch or upgraded on demand for **graceful hydration**
  * fits into *313 bytes* (core) or *745 bytes* with Custom Elements lifecycle callbacks included (nothing new to learn)

### Example - A more secure password field:

This example [can be tested live](https://webreflection.github.io/nonchalance/test/) and it just scratches the surface of what is possible to do with this extremely tiny, yet powerful, module.

```js
// const createRegistry = require('nonchalance');
import createRegistry from 'nonchalance/core';

// the default export accepts optionally a `globalThis` like
// context for all those environments that don't have a native DOM.
// Such registry can expose qualified classes names plus a `document` reference
// that will be used to create elements.
const {HTML} = createRegistry();

// extend any element to create, or upgrade, custom elements
// from a registry that shares nothing with the global context
class Password extends HTML.Input {
  // will inherit a static tag field = "input"
  constructor(...args) {
    super(...args);
    this.type = 'password';
  }
  // avoid malicious scripts easily retrieving any password
  get value() {
    return '********';
  }
  // demo case: still use the native `value` when password is set
  set value(secret) {
    super.value = secret;
  }
}

document.body.innerHTML = `
  <form>
    <input type="text" name="user" placeholder="user">
    <input type="password" name="password" placeholder="password">
    <input type="submit">
  </form>
`;

// upgrade the desired element via new ClassType
new Password(document.querySelector('[type="password"]'));

// or create a new instance
const secret = Object.assign(new Password, {
  name: 'pass',
  value: Math.random(),
  placeholder: 'runtime password'
});

const form = document.querySelector('form');
form.insertBefore(secret, form.lastElementChild);
```

## F.A.Q.

<details>
  <summary><strong>How does it work?</strong></summary>
  <div>

Using the [custom-function](https://github.com/WebReflection/custom-function#readme) module, it is possible to *upgrade* any sort of element without ever facing the *Illegal Constructor* error that shows up any time a natural `class extends HTMLSomethingElement {}` intent causes, when such class is not defined globally as an entry in the `customElements` registry.

Not only there's nothing globally shared through this module on the global context, every awkward extra work to have any builtin extend working is completely unnecessary:

  * new or passed elements always preserve their prototype root chain
  * no extra attributes or clashing names can ever happen

On top of that, because any *HTML registry* can be created per each module or project to share among its components, it's also possible to pass to such *registry* creation any fake or mocked `globalThis` like environment, with at least a `document` field that exposes a `createElementNS(namespace, tagName)` method, and one or more classes the project is meant to test, such as `HTMLElement` and/or any other needed for such project to succeed.

However, since this module primary target is the *DOM*, the `globalThis` reference is used as sensible default but that still does not mean anything is shared around registries created through the default export.

  </div>
</details>
<details>
  <summary><strong>Does hydration affect the element state?</strong></summary>
  <div>

**No**. The way `custom-function` works can be summarized as such:

```
# a native <p> protoype chain
HTMLParagraphElement -> HTMLElement -> Element -> Node

# a <p> passed to new (class CustomP extends HTML.P {})
CustomP -> HTMLParagraphElement -> HTMLElement -> Element -> Node

# a <p> passed to class AnotherP extends CustomP {}
AnotherP -> CustomP -> HTMLParagraphElement -> HTMLElement -> Element -> Node
```

In a few words, creating an element through `new AnotherP` or upgrading an element via `new AnotherP(liveParagraph)` simply updates the prototype chain, without requiring the element to ever leave the DOM or change its native nature, as that's preserved down the prototypal inheritance chain.

Summary: *nonchalance* registries simply upgrade elements without changing their nature, exactly the same way native builtin extends work under the hood.

  </div>
</details>
<details>
  <summary><strong>What's in the default module export?</strong></summary>
  <div>

Currently, the default / main export for this module points at the very same `/core` export.

Becuase this module opens a Pandora's box with its simplicity and vaporware code size, and mostly because it's still behind a `0.` semver version, I am trying to consider what should be included in the index, and here some of my thoughts:

  * wouldn't it be cool to have an [ESX](https://github.com/ungap/esx#readme) based module that understands components defined this way?
  * wouldn't it be cool to have a *JSX* pragma function that creates components through this module?
  * wouldn't it be cool to have ... (your place holder here) ... ?

Yes, it would be cool, and if I can make up my mind around how the default export should be named, I'm game to bring that name among other goodness as default entry for this module ... stay tuned or please give me thoughts and hints on how to do that 🙏

Until then though, please use explicit exports to be sure future updates won't mess up with your logic, and I apology if recent changes caused you troubles, but I am pretty sure you can easily related or understand that was for good!

  </div>
</details>
<details>
  <summary><strong>Can I use this with React or other fameworks?</strong></summary>
  <div>

**Yes**. The *DOM* is the *DOM*, no matter how many indirections there are in between. Your DX might vary, accordingly with the framework features, but if *React* is what you are after, there is a tiny yet elegant and `ref` based way to promote regular JSX nodes with *nonchalance*:

```js
import referenced from 'nonchalance/ref';

// indicate the Component will be passed as reference
// Note: this is just a light Proxy that grants class integrity
// regardless of its usage in the wild
const Component = referenced(class extends HTML.Div {
  constructor(...args) {
    super(...args);
    this.addEventListener('click', console.log);
  }
});

ReactDOM.render(
  <div ref={Component}>click me</div>,
  document.body
);
```

The `ref` utility could also be used as a decorator and without affecting any feature of regular *nonchalance* classes. Plus, each element is upgraded only once so that it's safe to add listeners or logic in the constructor.

See this demo [live on codepen](https://codepen.io/WebReflection/pen/gOdYvag?editors=0011) to play around it.

  </div>
</details>
<details>
  <summary><strong>What about Custom Elements callbacks?</strong></summary>
  <div>

The `/ce` export automatically upgrades elements in a way compatible with classes' `connectedCallback`, `disconnectedCallback`, and `attributeChangedCallback` methods, together with their static `observedAttributes` field.

The module uses a fine-tuned version of the already well working [as-custom-element](https://github.com/WebReflection/as-custom-element#readme) module.

See this [live demo on codepen](https://codepen.io/WebReflection/pen/vYzBQEe?editors=0011) to have an idea of how that works.

  </div>
</details>
<details>
  <summary><strong>Can any element become any other?</strong></summary>
  <div>

**No**. Metaphorically speaking, *HTML* elements have both a semantic meaning and a well defined, and desired, utility once live, the same way a *JS* function will be, forever, a *JS* function, even if `Object.setPrototypeOf(() => {}, Number.prototype)` happens ... can you see, or agree, how wrong is that?

This module doesn't want to (and likely also cannot) guard against misusage of its features, so be sure that whenever an element gets upgraded, it preserves its native prototype chain behind the scene, or you're alone fighting against the *DOM* ... which is quite inconvenient, if you ask me 😅

In short, same way `customElements.define('my-link', class extends HTMLDivElement {}, {extends: 'a'})` makes no sense, this module trust its users non-sense classes will be hopefully avoided.

  </div>
</details>
<details>
  <summary><strong>What's the /tag export?</strong></summary>
  <div>

The `./tag` export (182 bytes) allows templates transformation in a hydration friendly way.

It can be used as intermediate value behind full capable template literal tags and hydration can happen once those elements land on the *DOM*.

```js
import createRegistry from 'nonchalance/ce';
import createTag from 'nonchalance/tag';

const {HTML} = createRegistry();

class HelloDiv extends HTML.Div {
  connectedCallback() {
    console.log('here I am');
  }
}

// create a namespace reusable to hydrate
const nmsp = {HelloDiv};

// create a tag transformer
const tag = createTag(nmsp);

// quick and dirty demo
document.body.innerHTML = tag`<HelloDiv />`;

// hydration example
for (const el of document.querySelectorAll('[data-comp]')) {
  const {comp} = el.dataset;
  delete el.dataset.comp;
  // upgrade the element once
  new nmsp[comp](el);
}
```

See it [live on CodePen](https://codepen.io/WebReflection/pen/qBMRrKQ?editors=0010).

  </div>
</details>
<details>
  <summary><strong>What's the /accessor export?</strong></summary>
  <div>

When elements are upgraded at distance it's possible that these had some property attached that didn't get a chance to pass through their accessors.

This helper simply ensures that inherited properties are removed as own element keys to then be triggered as accessors right after.

```js
import createRegistry from 'nonchalance/ce';
import accessors from 'nonchalance/accessors';

const {HTML} = createRegistry();

class WithAccessors extends HTML.Div {
  constructor(...args) {
    accessors(super(...args));
  }
  get value() {
    console.log('get value', this._value);
    return this._value;
  }
  set value(_value) {
    this._value = _value;
    console.log('set value', this._value);
  }
}

// native div element
const div = document.createElement('div');
div.value = 123;

// upgraded
new WithAccessors(div);

// re-check
console.log(div.value);
```

See it [live to test more](https://codepen.io/WebReflection/pen/eYLNrLB?editors=0011).

  </div>
</details>
<details>
  <summary><strong>What's the /ref export?</strong></summary>
  <div>

Please check the *Can I use this with React or other fameworks?* entry of this list 😉

  </div>
</details>
<details>
  <summary><strong>Can I extend also SVG and MathML or other elements?</strong></summary>
  <div>

**Yes**. The `/core` runtime export makes it possible to create, by default, both *HTML* and *SVG* registries:

```js
import createRegistry from 'nonchalance/core';
const {HTML, SVG} = createRegistry();

class Circle extends SVG.Circle {
  constructor(options) {
    Object
      .assign(super(), options)
      .setAttribute('fill', 'gold');
  }
  set cx(value) { this.setAttribute('cx', value) }
  set cy(value) { this.setAttribute('cy', value) }
  set r(value) { this.setAttribute('r', value) }
}

document.querySelector('svg').append(
  new Circle({cx: 100, cy: 100, r: 50})
);
```

See it [live on codepen](https://codepen.io/WebReflection/pen/abaBKyo?editors=0010).

It is also possible to pass any *namespace* to the `createRegistry(options)`, using `{MathML: "http://www.w3.org/1998/Math/MathML"}` as example.

Any namespace that has a meaning to `document.createElementNS` is allowed, there's no limitation in what kind of *DOM* elements we can upgrade.

  </div>
</details>

<details>
  <summary><strong>Aren't builtin extends hostile or not supported in Safari?</strong></summary>
  <div>

I've talked ad nauseam [about this topic](https://webreflection.medium.com/in-favor-of-custom-elements-built-ins-bae3f40f27d5), but as a summary:

  * the success of *jQuery*, which is still the most deployed and used library out there, is based on native elements manipulation and augmentation
  * every browser but Safari/WebKit supports builtin extends and uses it in the wild, signaling WebKit concerns are somehow not so relevant
  * the API specification [still mention builtin extends](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example), implying it's not really a blocker for the Web
  * with ES2015 and classes, the only troublesome constructors have always been DOM classes and their *Illegal Constructor* error ... well, it's time to say goodbye to those legacy constraints
  * with modern ES2019 features, such as private fields, the Liskov substitution argument is less of a concern, as extra logic can be confined within private fields and methods, lowering the risk of collision for future elements updates

In short, if you read again the most basic `Password` class example, it's clear that builtin extends can go way beyond, and with ease, any complex and verbose and slower *ShadowDOM* based solution, so that keeping on being stubborn about avoiding graceful enhancement on what's the Web we surf daily is just counter-productive, and years have to pass before everyone can actually benefit from latest overly-complicated *Shadow DOM* realm, which includes [accessibility issues](https://github.com/WebKit/standards-positions/issues/97#issuecomment-1424415317), constraints, limited use cases compared to builtin extends, and so on ... so here there's something that's meant to work as *ECMAScript* specification compliant, without bothering legacy DOM world and all these distracting and time-consuming debates around builtin extends while the Web moves forward.

This module's goal is to provide a choice that doesn't suffer any of the problems developers love to talk about builtin extends:

  * "*do I need a polyfill forever?*" no, you need 576 bytes (or just 228) plus your code to forget about this issue
  * "*will builtin extends be removed from specs?*" who cares, with a library helper of only 576 bytes (or 228), you're good to go

And the strawberry on top, this module would work even within opened or closed ShadowDOM content, as long as the logic provides upgrades or uses classes programmatically.

  </div>
</details>
<details>
  <summary><strong>What's with the social image?</strong></summary>
  <div>

There's nothing more liberating than being a careless kid that plays in the mud against all "*don't do that!*" thinkers.

This module somehow represents that feeling through the freedom modern JS features offer, showing an elegant, portable, and super lightweight alternative to the ever-increasing complexity offered instead by browser vendors and modern specifications, all necessary to force developers workaround the ability to simply extend builtins and preserve both simplicity and the great accessibility the Web is famous for.

  </div>
</details>
