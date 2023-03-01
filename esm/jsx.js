let i = 0;

const Classes = new WeakMap;
const set = Class => {
  const is = 'jsx-' + i++;
  Classes.set(Class, is);
  customElements.define(is, Class, {extends: Class.tag});
  return is;
};

const {assign} = Object;
export default createElement => (Class, props, ...children) => (
  typeof Class === 'function' && Class.tag ?
    createElement(
      Class.tag,
      assign(props || {}, {is: Classes.get(Class) || set(Class)}),
      ...children
    ) :
    createElement(Class, props, ...children)
);
