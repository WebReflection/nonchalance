# Nonchalance

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/nonchalance/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/nonchalance?branch=main) [![build status](https://github.com/WebReflection/nonchalance/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/nonchalance/actions)

<sup>**Social Media Photo by [Andre Taissin](https://unsplash.com/@andretaissin) on [Unsplash](https://unsplash.com/)**</sup>

The easiest way to augment any DOM builtin element:

  * **No polyfills needed**, all modern browsers just work™️
  * it's possible to extend *HTML*, *SVG*, or any other custom namespace, such as *MathML*, without issues
  * elements can be either created from scratch or upgraded on demand for **graceful hydration**
  * fits into *313 bytes* (core) or *774 bytes* with Custom Elements lifecycle callbacks included (nothing new to learn)

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
  <summary><strong>Can I use this with React or other fameworks?</strong></summary>
  <div>

**Yes**, either via `/jsx` export or through the `/ref` one.

**About /jsx**
Please see *What's the /jsx export?* section.

**About /ref**
Please see *What's the /ref export?* section.

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
  <summary><strong>What's the /builtin export?</strong></summary>
  <div>

The `/builtin` export (248 bytes) is exactly like `/core` *except* it doesn't use `custom-function` behind the scene, meaning that:

  * it's not possible to `new BuiltIn()` or to `new BuiltIn(element)` as that would throw an error, unless not already registered as *customElement builtin extend*
  * it can be used to automate components registration, as shown in this [live demo on CodePen](https://codepen.io/WebReflection/pen/ExeWxLy?editors=0011)

The only major caveat around this export is that, because it's based on real standard custom elements, the builtin polyfill might be needed for Safari or WebKit, example:

```html
<!-- top most page script for Safari only polyfill -->
<script>
self.chrome ||
self.netscape ||
document.write('<script src="//unpkg.com/@webreflection/custom-elements-builtin"><\x2fscript>');
</script>
```

**Please note** that while both `HTML` and `SVG` namespaces are allowed by default as builtin extends, custome elements do not accept *SVG* extends so that practically only *HTML* extends are possible with the current `/builtin` export.

  </div>
</details>
<details>
  <summary><strong>What's the /dummy export?</strong></summary>
  <div>

The `./dummy` export is mostly meant for *SSR*, providing an exact same utility to extend classes that will carry only a static `tag` field.

Combined with the `/tag` it is possible to do 100% SSR with *nonchalance* and hydrate at distance.

```js
import createRegistry from 'https://unpkg.com/nonchalance/dummy';
import createTag from 'https://unpkg.com/nonchalance/tag';

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

// imagine a server response instead
// note: this code is for demo sake only
console.log(tag`
<!doctype html>
<script type="module">
import createRegistry from 'https://unpkg.com/nonchalance/ce';
const {HTML} = createRegistry();
const nmsp = {};
for (const el of document.querySelectorAll('[data-comp]')) {
  const {comp} = el.dataset;
  delete el.dataset.comp;
  new nmsp[comp](el);
}
</script>
<HelloDiv>👋</HelloDiv>
`
  .join('')
  .trim()
  .replace(
    'const nmsp = {};',
    `const nmsp = {
      ${[...Object.entries(nmsp)].map(
        ([key, value]) => `${key}: ${value}`
      ).join(',\n')}
    };`
  ));
```

  </div>
</details>
<details>
  <summary><strong>What's the /jsx export?</strong></summary>
  <div>

The `/jsx` export (986 bytes) allows accepts an extra `createElement` option and returns a `jsx` function that can be used as *@jsx pragma* to transform, among everything else already working by default in *React* or *Preact*, also classes extended via the *HTML* or *SVG* registry, including all features that `/ce` brings to those classes: Custom Elements like lifecycle with some spice on top:

  * classes will receive in their constructor the *props* passed along the element, enabling signals, other functions, or handling anything already possible to be handled by default *JSX* components.
  * when the constructor is called, the element would be already filled with its children, avoiding possible shenanigans known with standard custom elements when classes are defined/registered before the document is parsed.
  * similar to `/builtin` extend though, it's not possible to `new Component(props)` but it's also possible to `<Component {...props} />`.

See it used in practice with *React* [live on CodePen](https://codepen.io/WebReflection/pen/VwGpLBv?editors=0011).

  </div>
</details>
<details>
  <summary><strong>What's the /ref export?</strong></summary>
  <div>

The *DOM* is the *DOM*, no matter how many indirections there are in between. Your DX might vary, accordingly with the framework features, but if *React* is what you are after, there is a tiny yet elegant and `ref` based way to promote regular JSX nodes with *nonchalance/core* or *nonchalance/ce*:

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
  <summary><strong>What's the /tag export?</strong></summary>
  <div>

The `./tag` export (188 bytes) allows templates transformation in a hydration friendly way.

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
document.body.innerHTML = tag`<HelloDiv />`.join('');

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
  <summary><strong>Can I extend also SVG and MathML or other elements?</strong></summary>
  <div>

**Yes**. Both `/core` and `/ce` exports make it possible to create, by default, both *HTML* and *SVG* registries:

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

I had a very long answer to this before but the summary is that this module uses **standards** as provided by *W3C*, *WHATWG*, or *ECMAScript*, and it requires less than 1KB to work everywhere.

This is no polyfill, it's a utility to help you write components in the JS world and worry zero these will clash, require tools, or be not portable across any target project you like/need/prefer.

In short, if you're OK adding less than 1K bytes to deliver universal components for both Front End and Back End world, you've hit the right module 🥳

  </div>
</details>
<details>
  <summary><strong>What's with the social image?</strong></summary>
  <div>

There's nothing more liberating than being a careless kid that plays in the mud against all "*don't do that!*" thinkers.

This module somehow represents that feeling through the freedom modern JS features offer, showing an elegant, portable, and super lightweight alternative to the ever-increasing complexity offered instead by browser vendors and modern specifications, all necessary to force developers workaround the ability to simply extend builtins and preserve both simplicity and the great accessibility the Web is famous for.

  </div>
</details>
