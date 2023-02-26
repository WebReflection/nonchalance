/*! (c) Andrea Giammarchi - ISC */
import custom from 'custom-function/factory';

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {globalThis} [self=globalThis]
 */
export default ({document} = globalThis) => new Proxy(new Map, {
  get(map, Namespace) {
    if (!map.has(Namespace)) {
      const create = document.createElementNS.bind(
        document,
        'http://www.w3.org/' + (
          Namespace === 'HTML' ?
            '1999/xhtml' : (Namespace === 'SVG' ?
              '2000/svg' : '1998/Math/MathML'))
      );
      const DOM = new Map;
      const set = (map, tag) => {
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
      return new Proxy(new Map, {
        get(map, tag) {
          const _ = tag.toLowerCase();
          return map.get(_) || set(map, _, tag);
        }
      });
    }
    return map.get(Namespace);
  }
});
