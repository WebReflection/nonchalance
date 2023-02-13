/*! (c) Andrea Giammarchi - ISC */

const handler = {
  apply(target, _, [element]) {
    if (element && !(element instanceof target))
      new target(element);
  }
};

/**
 * @template T
 * @param {T} Class the Class to proxy for ref={Class} upgrades.
 * @returns {T}
 */
export default Class => new Proxy(Class, handler);
