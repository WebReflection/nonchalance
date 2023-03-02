'use strict';
// if interested or wondering, this code is a rip-off of
// https://github.com/WebReflection/as-custom-element#readme
// https://github.com/WebReflection/element-notifier#readme

const attributeChangedCallback = 'attributeChangedCallback';
const connectedCallback = 'connectedCallback';
const disconnectedCallback = 'disconnectedCallback';

module.exports = (document, {MutationObserver, Element}) => {
  const observed = new WeakSet;

  const loop = (nodes, added, removed, connected, pass) => {
    for (const node of nodes) {
      if (pass || ('querySelectorAll' in node)) {
        if (connected) {
          if (!added.has(node)) {
            added.add(node);
            removed.delete(node);
            if (observed.has(node))
              node[connectedCallback]?.();
          }
        }
        else if (!removed.has(node)) {
          removed.add(node);
          added.delete(node);
          if (observed.has(node))
            node[disconnectedCallback]?.();
        }
        if (!pass)
          loop(node.querySelectorAll('*'), added, removed, connected, true);
      }
    }
  };

  const parseRecords = records => {
    const added = new Set, removed = new Set;
    for (const {addedNodes, removedNodes} of records) {
      loop(removedNodes, added, removed, false, false);
      loop(addedNodes, added, removed, true, false);
    }
  };

  const MO = MutationObserver || globalThis.MutationObserver;
  const mo = new MO(parseRecords);
  const attributesObserver = new MO(records => {
    for (const {target, attributeName, oldValue} of records) {
      target[attributeChangedCallback](
        attributeName,
        oldValue,
        target.getAttribute(attributeName)
      );
    }
  });

  const observe = node => {
    mo.observe(node, {subtree: true, childList: true});
  };

  observe(document);

  const El = Element || globalThis.Element;
  if (El) {
    const $attachShadow = El.prototype.attachShadow;
    El.prototype.attachShadow = function attachShadow(init) {
      const shadowRoot = $attachShadow.call(this, init);
      return observe(shadowRoot), shadowRoot;
    };
  }

  return element => {
    const {
      [attributeChangedCallback]: attributes,
      [connectedCallback]: connect,
      [disconnectedCallback]: disconnect
    } = element;
    if (attributes) {
      attributesObserver.observe(element, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: element.constructor.observedAttributes.map(
          attributeName => {
            const value = element.getAttribute(attributeName);
            if (value != null)
              attributes.call(element, attributeName, null, value);
            return attributeName;
          }
        )
      });
    }
    if (connect || disconnect) {
      const records = mo.takeRecords();
      if (records.length)
        parseRecords(records);
      observed.add(element);
      if (element.isConnected)
        connect?.call(element);
    }
  };
};
