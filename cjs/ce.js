'use strict';
/*! (c) Andrea Giammarchi - ISC */
const custom = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('custom-function/factory'));
const {notify} = require('element-notifier');

// if interested or wondering, this code is a rip-off of
// https://github.com/WebReflection/as-custom-element#readme

const attributeChangedCallback = 'attributeChangedCallback';
const connectedCallback = 'connectedCallback';
const disconnectedCallback = 'disconnectedCallback';

const observed = new WeakSet;

const attributeChanged = records => {
  for (const {target, attributeName, oldValue} of records) {
    target[attributeChangedCallback](
      attributeName,
      oldValue,
      target.getAttribute(attributeName)
    );
  }
};

const upgrade = element => {
  const {
    [attributeChangedCallback]: attributes,
    [connectedCallback]: connect,
    [disconnectedCallback]: disconnect
  } = element;
  if (attributes) {
    new MutationObserver(attributeChanged).observe(element, {
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
    observed.add(element);
    if (element.isConnected)
      connect?.call(element);
  }
};

const {observe} = notify((element, connected) => {
  if (observed.has(element))
    element[connected ? connectedCallback : disconnectedCallback]?.();
});

const $attachShadow = Element.prototype.attachShadow;
Element.prototype.attachShadow = function attachShadow(init) {
  const shadowRoot = $attachShadow.call(this, init);
  return observe(shadowRoot), shadowRoot;
};

/**
 * @typedef {Object} HTML
 * @property {new () => HTMLAnchorElement} A
 * @property {new () => HTMLElement} Abbr
 * @property {new () => HTMLElement} Acronym
 * @property {new () => HTMLElement} Address
 * @property {new () => HTMLUnknownElement} Applet
 * @property {new () => HTMLAreaElement} Area
 * @property {new () => HTMLElement} Article
 * @property {new () => HTMLElement} Aside
 * @property {new () => HTMLAudioElement} Audio
 * @property {new () => HTMLElement} B
 * @property {new () => HTMLBaseElement} Base
 * @property {new () => HTMLElement} Bdi
 * @property {new () => HTMLElement} Bdo
 * @property {new () => HTMLUnknownElement} BGSound
 * @property {new () => HTMLElement} Big
 * @property {new () => HTMLUnknownElement} Blink
 * @property {new () => HTMLQuoteElement} BlockQuote
 * @property {new () => HTMLBodyElement} Body
 * @property {new () => HTMLBRElement} BR
 * @property {new () => HTMLButtonElement} Button
 * @property {new () => HTMLCanvasElement} Canvas
 * @property {new () => HTMLTableCaptionElement} Caption
 * @property {new () => HTMLElement} Center
 * @property {new () => HTMLElement} Cite
 * @property {new () => HTMLElement} Code
 * @property {new () => HTMLTableColElement} Col
 * @property {new () => HTMLTableColElement} ColGroup
 * @property {new () => HTMLUnknownElement} Content
 * @property {new () => HTMLDataElement} Data
 * @property {new () => HTMLDataListElement} DataList
 * @property {new () => HTMLElement} DD
 * @property {new () => HTMLModElement} Del
 * @property {new () => HTMLDetailsElement} Details
 * @property {new () => HTMLElement} Dfn
 * @property {new () => HTMLDialogElement} Dialog
 * @property {new () => HTMLDirectoryElement} Dir
 * @property {new () => HTMLDivElement} Div
 * @property {new () => HTMLDListElement} DL
 * @property {new () => HTMLElement} DT
 * @property {new () => HTMLElement} Em
 * @property {new () => HTMLEmbedElement} Embed
 * @property {new () => HTMLFieldSetElement} FieldSet
 * @property {new () => HTMLElement} FigCaption
 * @property {new () => HTMLElement} Figure
 * @property {new () => HTMLFontElement} Font
 * @property {new () => HTMLElement} Footer
 * @property {new () => HTMLFormElement} Form
 * @property {new () => HTMLFrameElement} Frame
 * @property {new () => HTMLFrameSetElement} FrameSet
 * @property {new () => HTMLHeadingElement} H1
 * @property {new () => HTMLHeadingElement} H2
 * @property {new () => HTMLHeadingElement} H3
 * @property {new () => HTMLHeadingElement} H4
 * @property {new () => HTMLHeadingElement} H5
 * @property {new () => HTMLHeadingElement} H6
 * @property {new () => HTMLHeadElement} Head
 * @property {new () => HTMLElement} Header
 * @property {new () => HTMLHRElement} HR
 * @property {new () => HTMLHtmlElement} Html
 * @property {new () => HTMLElement} I
 * @property {new () => HTMLIFrameElement} IFrame
 * @property {new () => HTMLUnknownElement} Image
 * @property {new () => HTMLImageElement} Img
 * @property {new () => HTMLInputElement} Input
 * @property {new () => HTMLModElement} Ins
 * @property {new () => HTMLElement} Kbd
 * @property {new () => HTMLUnknownElement} Keygen
 * @property {new () => HTMLLabelElement} Label
 * @property {new () => HTMLLegendElement} Legend
 * @property {new () => HTMLLIElement} LI
 * @property {new () => HTMLLinkElement} Link
 * @property {new () => HTMLElement} Main
 * @property {new () => HTMLMapElement} Map
 * @property {new () => HTMLElement} Mark
 * @property {new () => HTMLMarqueeElement} Marquee
 * @property {new () => HTMLMenuElement} Menu
 * @property {new () => HTMLUnknownElement} MenuItem
 * @property {new () => HTMLMetaElement} Meta
 * @property {new () => HTMLMeterElement} Meter
 * @property {new () => HTMLElement} Nav
 * @property {new () => HTMLElement} NoBR
 * @property {new () => HTMLElement} NoEmbed
 * @property {new () => HTMLElement} NoFrames
 * @property {new () => HTMLElement} NoScript
 * @property {new () => HTMLObjectElement} Object
 * @property {new () => HTMLOListElement} OL
 * @property {new () => HTMLOptGroupElement} OptGroup
 * @property {new () => HTMLOptionElement} Option
 * @property {new () => HTMLOutputElement} Output
 * @property {new () => HTMLParagraphElement} P
 * @property {new () => HTMLParamElement} Param
 * @property {new () => HTMLPictureElement} Picture
 * @property {new () => HTMLElement} PlainText
 * @property {new () => HTMLUnknownElement} Portal
 * @property {new () => HTMLPreElement} Pre
 * @property {new () => HTMLProgressElement} Progress
 * @property {new () => HTMLQuoteElement} Q
 * @property {new () => HTMLElement} RB
 * @property {new () => HTMLElement} RP
 * @property {new () => HTMLElement} RT
 * @property {new () => HTMLElement} RTC
 * @property {new () => HTMLElement} Ruby
 * @property {new () => HTMLElement} S
 * @property {new () => HTMLElement} Samp
 * @property {new () => HTMLScriptElement} Script
 * @property {new () => HTMLElement} Section
 * @property {new () => HTMLSelectElement} Select
 * @property {new () => HTMLUnknownElement} Shadow
 * @property {new () => HTMLSlotElement} Slot
 * @property {new () => HTMLElement} Small
 * @property {new () => HTMLSourceElement} Source
 * @property {new () => HTMLUnknownElement} Spacer
 * @property {new () => HTMLSpanElement} Span
 * @property {new () => HTMLElement} Strike
 * @property {new () => HTMLElement} Strong
 * @property {new () => HTMLStyleElement} Style
 * @property {new () => HTMLElement} Sub
 * @property {new () => HTMLElement} Summary
 * @property {new () => HTMLElement} Sup
 * @property {new () => HTMLTableElement} Table
 * @property {new () => HTMLTableSectionElement} TBody
 * @property {new () => HTMLTableCellElement} TD
 * @property {new () => HTMLTemplateElement} Template
 * @property {new () => HTMLTextAreaElement} TextArea
 * @property {new () => HTMLTableSectionElement} TFoot
 * @property {new () => HTMLTableCellElement} TH
 * @property {new () => HTMLTableSectionElement} THead
 * @property {new () => HTMLTimeElement} Time
 * @property {new () => HTMLTitleElement} Title
 * @property {new () => HTMLTableRowElement} TR
 * @property {new () => HTMLTrackElement} Track
 * @property {new () => HTMLElement} TT
 * @property {new () => HTMLElement} U
 * @property {new () => HTMLUListElement} UL
 * @property {new () => HTMLElement} Var
 * @property {new () => HTMLVideoElement} Video
 * @property {new () => HTMLElement} Wbr
 * @property {new () => HTMLPreElement} XMP
 */

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {globalThis} [self=globalThis]
 * @returns {HTML}
 */
module.exports = function ({document} = globalThis) {
  const HTML = new Map;
  const set = (map, tag) => {
    let Class = HTML.get(tag);
    if (!Class)
      HTML.set(tag, Class = document.createElement(tag).constructor);
    class CustomElement extends custom(Class) {
      constructor(element) {
        upgrade(super(element || document.createElement(tag)));
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
};
