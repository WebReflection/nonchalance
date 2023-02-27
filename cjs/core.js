'use strict';
/*! (c) Andrea Giammarchi - ISC */
const custom = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('custom-function/factory'));

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
 * @typedef {Object} HTML
 * @property {new () => HTMLAnchorElement} A
 * @property {new () => HTMLElement} Abbr
 * @property {new () => HTMLElement} Address
 * @property {new () => HTMLAreaElement} Area
 * @property {new () => HTMLElement} Article
 * @property {new () => HTMLElement} Aside
 * @property {new () => HTMLAudioElement} Audio
 * @property {new () => HTMLElement} B
 * @property {new () => HTMLBaseElement} Base
 * @property {new () => HTMLElement} Bdi
 * @property {new () => HTMLElement} Bdo
 * @property {new () => HTMLQuoteElement} BlockQuote
 * @property {new () => HTMLBodyElement} Body
 * @property {new () => HTMLBRElement} BR
 * @property {new () => HTMLButtonElement} Button
 * @property {new () => HTMLCanvasElement} Canvas
 * @property {new () => HTMLTableCaptionElement} Caption
 * @property {new () => HTMLElement} Cite
 * @property {new () => HTMLElement} Code
 * @property {new () => HTMLTableColElement} Col
 * @property {new () => HTMLTableColElement} ColGroup
 * @property {new () => HTMLDataElement} Data
 * @property {new () => HTMLDataListElement} DataList
 * @property {new () => HTMLElement} DD
 * @property {new () => HTMLModElement} Del
 * @property {new () => HTMLDetailsElement} Details
 * @property {new () => HTMLElement} Dfn
 * @property {new () => HTMLDialogElement} Dialog
 * @property {new () => HTMLDivElement} Div
 * @property {new () => HTMLDListElement} DL
 * @property {new () => HTMLElement} DT
 * @property {new () => HTMLElement} Element
 * @property {new () => HTMLElement} Em
 * @property {new () => HTMLEmbedElement} Embed
 * @property {new () => HTMLFieldSetElement} FieldSet
 * @property {new () => HTMLElement} FigCaption
 * @property {new () => HTMLElement} Figure
 * @property {new () => HTMLElement} Footer
 * @property {new () => HTMLFormElement} Form
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
 * @property {new () => HTMLImageElement} Img
 * @property {new () => HTMLInputElement} Input
 * @property {new () => HTMLModElement} Ins
 * @property {new () => HTMLElement} Kbd
 * @property {new () => HTMLLabelElement} Label
 * @property {new () => HTMLLegendElement} Legend
 * @property {new () => HTMLLIElement} LI
 * @property {new () => HTMLLinkElement} Link
 * @property {new () => HTMLElement} Main
 * @property {new () => HTMLMapElement} Map
 * @property {new () => HTMLElement} Mark
 * @property {new () => HTMLMenuElement} Menu
 * @property {new () => HTMLMetaElement} Meta
 * @property {new () => HTMLMeterElement} Meter
 * @property {new () => HTMLElement} Nav
 * @property {new () => HTMLElement} NoScript
 * @property {new () => HTMLObjectElement} Object
 * @property {new () => HTMLOListElement} OL
 * @property {new () => HTMLOptGroupElement} OptGroup
 * @property {new () => HTMLOptionElement} Option
 * @property {new () => HTMLOutputElement} Output
 * @property {new () => HTMLParagraphElement} P
 * @property {new () => HTMLPictureElement} Picture
 * @property {new () => HTMLUnknownElement} Portal
 * @property {new () => HTMLPreElement} Pre
 * @property {new () => HTMLProgressElement} Progress
 * @property {new () => HTMLQuoteElement} Q
 * @property {new () => HTMLElement} RP
 * @property {new () => HTMLElement} RT
 * @property {new () => HTMLElement} Ruby
 * @property {new () => HTMLElement} S
 * @property {new () => HTMLElement} Samp
 * @property {new () => HTMLScriptElement} Script
 * @property {new () => HTMLElement} Section
 * @property {new () => HTMLSelectElement} Select
 * @property {new () => HTMLSlotElement} Slot
 * @property {new () => HTMLElement} Small
 * @property {new () => HTMLSourceElement} Source
 * @property {new () => HTMLSpanElement} Span
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
 * @property {new () => HTMLElement} U
 * @property {new () => HTMLUListElement} UL
 * @property {new () => HTMLElement} Var
 * @property {new () => HTMLVideoElement} Video
 * @property {new () => HTMLElement} Wbr
 */

/**
 * @typedef {Object} SVG
 * @property {new () => SVGAElement} A
 * @property {new () => SVGAnimateElement} Animate
 * @property {new () => SVGAnimateMotionElement} AnimateMotion
 * @property {new () => SVGAnimateTransformElement} AnimateTransform
 * @property {new () => SVGAnimationElement} Animation
 * @property {new () => SVGCircleElement} Circle
 * @property {new () => SVGClipPathElement} ClipPath
 * @property {new () => SVGComponentTransferFunctionElement} ComponentTransferFunction
 * @property {new () => SVGDefsElement} Defs
 * @property {new () => SVGDescElement} Desc
 * @property {new () => SVGElement} Element
 * @property {new () => SVGEllipseElement} Ellipse
 * @property {new () => SVGFEBlendElement} FEBlend
 * @property {new () => SVGFEColorMatrixElement} FEColorMatrix
 * @property {new () => SVGFEComponentTransferElement} FEComponentTransfer
 * @property {new () => SVGFECompositeElement} FEComposite
 * @property {new () => SVGFEConvolveMatrixElement} FEConvolveMatrix
 * @property {new () => SVGFEDiffuseLightingElement} FEDiffuseLighting
 * @property {new () => SVGFEDisplacementMapElement} FEDisplacementMap
 * @property {new () => SVGFEDistantLightElement} FEDistantLight
 * @property {new () => SVGFEDropShadowElement} FEDropShadow
 * @property {new () => SVGFEFloodElement} FEFlood
 * @property {new () => SVGFEFuncAElement} FEFuncA
 * @property {new () => SVGFEFuncBElement} FEFuncB
 * @property {new () => SVGFEFuncGElement} FEFuncG
 * @property {new () => SVGFEFuncRElement} FEFuncR
 * @property {new () => SVGFEGaussianBlurElement} FEGaussianBlur
 * @property {new () => SVGFEImageElement} FEImage
 * @property {new () => SVGFEMergeElement} FEMerge
 * @property {new () => SVGFEMergeNodeElement} FEMergeNode
 * @property {new () => SVGFEMorphologyElement} FEMorphology
 * @property {new () => SVGFEOffsetElement} FEOffset
 * @property {new () => SVGFEPointLightElement} FEPointLight
 * @property {new () => SVGFESpecularLightingElement} FESpecularLighting
 * @property {new () => SVGFESpotLightElement} FESpotLight
 * @property {new () => SVGFETileElement} FETile
 * @property {new () => SVGFETurbulenceElement} FETurbulence
 * @property {new () => SVGFilterElement} Filter
 * @property {new () => SVGForeignObjectElement} ForeignObject
 * @property {new () => SVGGElement} G
 * @property {new () => SVGGeometryElement} Geometry
 * @property {new () => SVGGradientElement} Gradient
 * @property {new () => SVGGraphicsElement} Graphics
 * @property {new () => SVGImageElement} Image
 * @property {new () => SVGLineElement} Line
 * @property {new () => SVGLinearGradientElement} LinearGradient
 * @property {new () => SVGMPathElement} MPath
 * @property {new () => SVGMarkerElement} Marker
 * @property {new () => SVGMaskElement} Mask
 * @property {new () => SVGMetadataElement} Metadata
 * @property {new () => SVGPathElement} Path
 * @property {new () => SVGPatternElement} Pattern
 * @property {new () => SVGPolygonElement} Polygon
 * @property {new () => SVGPolylineElement} Polyline
 * @property {new () => SVGRadialGradientElement} RadialGradient
 * @property {new () => SVGRectElement} Rect
 * @property {new () => SVGSVGElement} SVG
 * @property {new () => SVGScriptElement} Script
 * @property {new () => SVGSetElement} Set
 * @property {new () => SVGStopElement} Stop
 * @property {new () => SVGStyleElement} Style
 * @property {new () => SVGSwitchElement} Switch
 * @property {new () => SVGSymbolElement} Symbol
 * @property {new () => SVGTSpanElement} TSpan
 * @property {new () => SVGTextContentElement} TextContent
 * @property {new () => SVGTextElement} Text
 * @property {new () => SVGTextPathElement} TextPath
 * @property {new () => SVGTextPositioningElement} TextPositioning
 * @property {new () => SVGTitleElement} Title
 * @property {new () => SVGUseElement} Use
 * @property {new () => SVGViewElement} View
 */

/**
 * @typedef {Object} Namespace
 * @property {HTML} HTML
 * @property {SVG} SVG
 */

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {Options} [options]
 * @returns {Namespace}
 */
module.exports = (options = W3) => new Proxy(new Map, {
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
