/*! (c) Andrea Giammarchi - ISC */

const handler = {
  apply(target, _, [element]) {
    if (element && !(element instanceof target))
      new target(element);
  }
};

/**
 * Return a light `Proxy` of the given class which allows the class
 * to be called through the JSX `ref={Class}` witohut needing `new.target`.
 * @template T
 * @param {T} Class the Class to proxy for ref={Class} upgrades.
 * @returns {T}
 */
export default Class => new Proxy(Class, handler);
