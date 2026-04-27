// if interested or wondering, this code is a rip-off of
// https://github.com/WebReflection/as-custom-element#readme
// https://github.com/WebReflection/element-notifier#readme

import { ShadowObserver, OPEN, CLOSED } from 'shadow-observer';

const attributeChangedCallback = 'attributeChangedCallback';
const connectedCallback = 'connectedCallback';
const disconnectedCallback = 'disconnectedCallback';

export default (document, {MutationObserver, Element}) => {
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

  const MO = MutationObserver || ShadowObserver;
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

  mo.observe(document, {subtree: true, childList: true, shadow: OPEN | CLOSED});

  return (element, isConnected) => {
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
      if (isConnected) queueMicrotask(() => connect?.call(element));
    }
    return element;
  };
};
