# Nonchalance

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/nonchalance/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/nonchalance?branch=main) [![build status](https://github.com/WebReflection/nonchalance/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/nonchalance/actions)

<sup>**Social Media Photo by [Andre Taissin](https://unsplash.com/@andretaissin) on [Unsplash](https://unsplash.com/)**</sup>

The easiest way to augment DOM builtin elements:

  * **No polyfills needed**, all modern browsers just work™️
  * elements can be either created from scratch or upgraded on demand for **graceful hydration**
  * fits into 226 bytes (runtime) or 655 bytes (default) once served minified via default brotli settings (283 runtime or 751 via default gzip settings)

### Example - A more secure password field:

This example [can be tested live](https://webreflection.github.io/nonchalance/test/) and it just scratches the surface of what is possible to do with this extremely tiny, yet powerful, module.

```js
// const createRegistry = require('nonchalance');
import createRegistry from 'nonchalance';

// the default export accepts optionally a `globalThis` like
// context for all those environments that don't have a native DOM.
// Such registry can expose qualified classes names plus a `document` reference
// that will be used to create elements.
const HTML = createRegistry();

// extend any element to create, or upgrade, custom elements
// from a registry that shares nothing with the global context
class Password extends HTML.Input {
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

Combining the [custom-function](https://github.com/WebReflection/custom-function#readme) module and optionally the [proxied-html-constructors](https://github.com/WebReflection/proxied-html-constructors#readme) one, it is possible to *upgrade* any sort of element without ever facing the *Illegal Constructor* error that shows up any time a natural `class extends HTMLSomethingElement {}` intent causes, when such class is not defined as globally shared `customElements` registry.

Not only there's nothing globally shared through this module on the global context, every awkward extra work to have builtin extends is completely unnecessary:

  * new or passed elements always preserve their prototype root chain
  * no extra attributes or clashing names can ever happen

On top of that, because any *HTML registry* can be created per each module or project to share among its components, it's also possible to pass to such *registry* creation any fake or mocked `globalThis` like environment, with at least a `document` field that exposes a `createElement(tagName)` method, and one or more classes the project is meant to test, such as `HTMLElement` and/or any other needed for such project to succeed.

However, since this module primary target is the *DOM*, the `globalThis` reference is used as sensible default but that still does not mean anything is shared around registries created through the default export.

  </div>
</details>
<details>
  <summary><strong>What's the difference between default, all and runtime exports?</strong></summary>
  <div>

The `nonchalance` default export (brotli 655, gzip 751) uses a pre-compiled/defined *Map* of all known, and *not deprecated* HTML tags directly from [proxied-html-constructors](https://github.com/WebReflection/proxied-html-constructors#readme) module, while the `nonchalance/all` export (brotli 678, gzip 782) exposes also obsolete or deprecated tags, still using `proxied-html-constructors` as reference.

The strength of `proxied-html-constructors` module is that *it actually throws an error* when a not-known element is being created, so that it's easier to spot errors at build or testing time, because the related *Class* might not exist or be known ahead of time.

However, this pre-compiled *Map* doesn't come for free in terms of bytes, but it's surely the fastest and less heap greedy way to use this module.

On the other hand, if you are a "*bytes saver maniac*", the `nonchalance/runtime` alternative (brotli 226, gzip 283) doesn't use a pre-compiled *Map* and it simply retrieves once the constructor related to the desired *tag*.

That means that `HTML.Shenanigan` won't ever throw an error, but it will silently create an extend of `HTMLUnknownElement`, also allocating extra heap to access such constructor via `document.createElement(anyTag).constructor`.

If *vaporware* or *minimal working code* is your code, and you are confident you don't need any guard other variants provide, then `nonchalance/runtime` will kinda always work forever, with slighter extra *GC* pressure than others, and without guarantees a typo written in the extend will possibly show-up at integration testing time ... and if that's your cup of tea, go ahead with this even smaller variant 🦄

Last, but not least, please note that `nonchalance/runtime` types include all known *HTML* elements, including deprecated and obsolete ones, simply because it cannot guard anything, so that any element would be automatically enabled, even the non standard, or not existent one, beside legacy.

  </div>
</details>
<details>
  <summary><strong>Why using a default export instead of a named one?</strong></summary>
  <div>

Unrelated to this module but worth clarifying here why, this *dual module* simply does the right thing: it exposes a `default export` in *ESM* and a `module.exports = ...` in the *CJS* world, without ugly `__esModule` workarounds or similar tricks.

The reason I didn't go for a named export in pretty much any of this module, or this module dependencies, is that everyone is *free* to decide how to name the ability to create a scoped registry, among the way to name imports from its submodule within this code.

As example, `custom-function` module is imported as `custom` callback, as it's very semantic for this module purpose, while `proxied-html-constructors` is imported as `create`, which is still very semantic for this module goal but it could be confusing to some other project when `Object.create` or `createSignal`, as example, is meant instead.

That is: this module exports a single callback used to create a *registry* that can be used to extend any *HTML* element, so that having the freedom to name such registry felt like a good use case, and an improved DX, to offer.

Yes, you can alias named imports with ease in *JS*, but why even bothering when the export is meant to be just one and implicitly cover all your possible naming conventions around your code? 😉

  </div>
</details>
<details>
  <summary><strong>Aren't builtin extends hostile or not supported in Safari?</strong></summary>
  <div>

I've talked ad nauseam [about this topic](https://webreflection.medium.com/in-favor-of-custom-elements-built-ins-bae3f40f27d5) but here the thing:

  * the success of *jQuery*, which is still the most deployed and used library out there, is based on native elements manipulation and augmentation
  * every browser but Safari/WebKit supports builtin extends and use it in the wild, signaling WebKit concerns are somehow not so relevant
  * the API specification [still mention builtin extends](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example), implying it's not really a blocker for the Web
  * with ES2015 and classes, the only troublesome constructors have always been DOM classes and their *Illegal Constructor* error ... well, it's time to say goodbye to thos legacy constraints

In short, if you read again the most basic `Passord` class example, it's clear that builtin extends can go way beyond, and with ease, any complex and verbose and slower *ShadowDOM* based solution, so that keep being stubborn about avoiding graceful enhancement on what's the Web we surf daily is just counter-productive, and years have to pass before everyone can actually benefit from latest overly-complicated *Shadow DOM* realm, which includes [accessibility issues](https://github.com/WebKit/standards-positions/issues/97#issuecomment-1424415317), constraints, limited use cases compared to builtin extends, and so on ... so here there's something that's meant to work as *ECMAScript* specification compliant, without bothering legacy DOM world and all these distracting and time consuming debates around builtin extends while the Web move forward.

This module goal is to provide a choice that doesn't suffer any of the problems developers love to talk about builtin extends:

  * "*do I need a polyfill forever?*" no, you need 655 bytes plus the rest to forget about this issue
  * "*will builtin extends be removed from specs?*" who cares, with just 655 bytes libary helper you're good to go

  </div>
</details>
