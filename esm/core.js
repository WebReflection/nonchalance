/*! (c) Andrea Giammarchi - ISC */
import custom from 'custom-function/factory';

/**
 * @typedef {Object} Options An object with a `document` and zero, one, or more custom namespaces.
 * @property {Document} [document] the document to use, defaults to the global one.
 * @property {'http://www.w3.org/1999/xhtml'} [HTML] the namespace to use for HTML classes.
 * @property {'http://www.w3.org/2000/svg'} [SVG] the namespace to use for SVG classes.
 * @property {'...'} [CustomML] any desired extra namespace.
 */

/** @type {Options} */
let W3 = {
  HTML: 'http://www.w3.org/1999/xhtml',
  SVG: 'http://www.w3.org/2000/svg',
};

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {Options} [options]
 */
export default (options = W3) => new Proxy(new Map, {
  get(map, Namespace) {
    let Proxied = map.get(Namespace);
    if (!Proxied) {
      map.set(Namespace, Proxied = new Proxy(new Map, {
        get(map, tag) {
          let _ = tag.toLowerCase();
          return map.get(_) || set(map, _);
        }
      }));
      let DOM = new Map;
      let doc = options.document || document;
      let create = doc.createElementNS.bind(
        doc, options[Namespace] || W3[Namespace]
      );
      let set = (map, tag) => {
        let Class = DOM.get(tag);
        if (!Class)
          DOM.set(tag, Class = create(tag).constructor);
        class CustomElement extends custom(Class) {
          constructor(element) {
            super(element || create(tag));
          }
        }
        map.set(tag, CustomElement);
        return CustomElement;
      };
    }
    return Proxied;
  }
});
