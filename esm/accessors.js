const {getPrototypeOf, ownKeys} = Reflect;

/**
 * Given an upgraded element, removes all own keys that are inherited
 * to then trigger their accessors (if any) and keep just own keys in place.
 * @property {Element} element the upgraded element
 * @property {Object} [proto=Object.getPrototypeOf(element)] the proto with accessors
 */
export default (element, proto = getPrototypeOf(element)) => {
  const keys = ownKeys(element);
  const after = [];
  for (const key of keys) {
    const value = element[key];
    if (key in proto) {
      delete element[key];
      after.push([key, value]);
    }
  }
  for (const [key, value] of after)
    element[key] = value;
  return element;
};
