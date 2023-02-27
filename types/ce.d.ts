declare function _default(options?: Options): Namespace;
export default _default;
export type Options = {
    /**
     * the document to use, defaults to the global one.
     */
    document?: Document;
    /**
     * the namespace to use for HTML classes.
     */
    HTML?: 'http://www.w3.org/1999/xhtml';
    /**
     * the namespace to use for SVG classes.
     */
    SVG?: 'http://www.w3.org/2000/svg';
    /**
     * any desired extra namespace.
     */
    CustomML?: '...';
};
export type HTML = {
    A: new () => CustomHTMLAnchorElement;
    Abbr: new () => CustomHTMLElement;
    Address: new () => CustomHTMLElement;
    Area: new () => CustomHTMLAreaElement;
    Article: new () => CustomHTMLElement;
    Aside: new () => CustomHTMLElement;
    Audio: new () => CustomHTMLAudioElement;
    B: new () => CustomHTMLElement;
    Base: new () => CustomHTMLBaseElement;
    Bdi: new () => CustomHTMLElement;
    Bdo: new () => CustomHTMLElement;
    BlockQuote: new () => CustomHTMLQuoteElement;
    Body: new () => CustomHTMLBodyElement;
    BR: new () => CustomHTMLBRElement;
    Button: new () => CustomHTMLButtonElement;
    Canvas: new () => CustomHTMLCanvasElement;
    Caption: new () => CustomHTMLTableCaptionElement;
    Cite: new () => CustomHTMLElement;
    Code: new () => CustomHTMLElement;
    Col: new () => CustomHTMLTableColElement;
    ColGroup: new () => CustomHTMLTableColElement;
    Data: new () => CustomHTMLDataElement;
    DataList: new () => CustomHTMLDataListElement;
    DD: new () => CustomHTMLElement;
    Del: new () => CustomHTMLModElement;
    Details: new () => CustomHTMLDetailsElement;
    Dfn: new () => CustomHTMLElement;
    Dialog: new () => CustomHTMLDialogElement;
    Div: new () => CustomHTMLDivElement;
    DL: new () => CustomHTMLDListElement;
    DT: new () => CustomHTMLElement;
    Element: new () => CustomHTMLElement;
    Em: new () => CustomHTMLElement;
    Embed: new () => CustomHTMLEmbedElement;
    FieldSet: new () => CustomHTMLFieldSetElement;
    FigCaption: new () => CustomHTMLElement;
    Figure: new () => CustomHTMLElement;
    Footer: new () => CustomHTMLElement;
    Form: new () => CustomHTMLFormElement;
    H1: new () => CustomHTMLHeadingElement;
    H2: new () => CustomHTMLHeadingElement;
    H3: new () => CustomHTMLHeadingElement;
    H4: new () => CustomHTMLHeadingElement;
    H5: new () => CustomHTMLHeadingElement;
    H6: new () => CustomHTMLHeadingElement;
    Head: new () => CustomHTMLHeadElement;
    Header: new () => CustomHTMLElement;
    HR: new () => CustomHTMLHRElement;
    Html: new () => CustomHTMLHtmlElement;
    I: new () => CustomHTMLElement;
    IFrame: new () => CustomHTMLIFrameElement;
    Img: new () => CustomHTMLImageElement;
    Input: new () => CustomHTMLInputElement;
    Ins: new () => CustomHTMLModElement;
    Kbd: new () => CustomHTMLElement;
    Label: new () => CustomHTMLLabelElement;
    Legend: new () => CustomHTMLLegendElement;
    LI: new () => CustomHTMLLIElement;
    Link: new () => CustomHTMLLinkElement;
    Main: new () => CustomHTMLElement;
    Map: new () => CustomHTMLMapElement;
    Mark: new () => CustomHTMLElement;
    Menu: new () => CustomHTMLMenuElement;
    Meta: new () => CustomHTMLMetaElement;
    Meter: new () => CustomHTMLMeterElement;
    Nav: new () => CustomHTMLElement;
    NoScript: new () => CustomHTMLElement;
    Object: new () => CustomHTMLObjectElement;
    OL: new () => CustomHTMLOListElement;
    OptGroup: new () => CustomHTMLOptGroupElement;
    Option: new () => CustomHTMLOptionElement;
    Output: new () => CustomHTMLOutputElement;
    P: new () => CustomHTMLParagraphElement;
    Picture: new () => CustomHTMLPictureElement;
    Portal: new () => CustomHTMLUnknownElement;
    Pre: new () => CustomHTMLPreElement;
    Progress: new () => CustomHTMLProgressElement;
    Q: new () => CustomHTMLQuoteElement;
    RP: new () => CustomHTMLElement;
    RT: new () => CustomHTMLElement;
    Ruby: new () => CustomHTMLElement;
    S: new () => CustomHTMLElement;
    Samp: new () => CustomHTMLElement;
    Script: new () => CustomHTMLScriptElement;
    Section: new () => CustomHTMLElement;
    Select: new () => CustomHTMLSelectElement;
    Slot: new () => CustomHTMLSlotElement;
    Small: new () => CustomHTMLElement;
    Source: new () => CustomHTMLSourceElement;
    Span: new () => CustomHTMLSpanElement;
    Strong: new () => CustomHTMLElement;
    Style: new () => CustomHTMLStyleElement;
    Sub: new () => CustomHTMLElement;
    Summary: new () => CustomHTMLElement;
    Sup: new () => CustomHTMLElement;
    Table: new () => CustomHTMLTableElement;
    TBody: new () => CustomHTMLTableSectionElement;
    TD: new () => CustomHTMLTableCellElement;
    Template: new () => CustomHTMLTemplateElement;
    TextArea: new () => CustomHTMLTextAreaElement;
    TFoot: new () => CustomHTMLTableSectionElement;
    TH: new () => CustomHTMLTableCellElement;
    THead: new () => CustomHTMLTableSectionElement;
    Time: new () => CustomHTMLTimeElement;
    Title: new () => CustomHTMLTitleElement;
    TR: new () => CustomHTMLTableRowElement;
    Track: new () => CustomHTMLTrackElement;
    U: new () => CustomHTMLElement;
    UL: new () => CustomHTMLUListElement;
    Var: new () => CustomHTMLElement;
    Video: new () => CustomHTMLVideoElement;
    Wbr: new () => CustomHTMLElement;
};
export type SVG = {
    A: new () => CustomSVGAElement;
    Animate: new () => CustomSVGAnimateElement;
    AnimateMotion: new () => CustomSVGAnimateMotionElement;
    AnimateTransform: new () => CustomSVGAnimateTransformElement;
    Animation: new () => CustomSVGAnimationElement;
    Circle: new () => CustomSVGCircleElement;
    ClipPath: new () => CustomSVGClipPathElement;
    ComponentTransferFunction: new () => CustomSVGComponentTransferFunctionElement;
    Defs: new () => CustomSVGDefsElement;
    Desc: new () => CustomSVGDescElement;
    Element: new () => CustomSVGElement;
    Ellipse: new () => CustomSVGEllipseElement;
    FEBlend: new () => CustomSVGFEBlendElement;
    FEColorMatrix: new () => CustomSVGFEColorMatrixElement;
    FEComponentTransfer: new () => CustomSVGFEComponentTransferElement;
    FEComposite: new () => CustomSVGFECompositeElement;
    FEConvolveMatrix: new () => CustomSVGFEConvolveMatrixElement;
    FEDiffuseLighting: new () => CustomSVGFEDiffuseLightingElement;
    FEDisplacementMap: new () => CustomSVGFEDisplacementMapElement;
    FEDistantLight: new () => CustomSVGFEDistantLightElement;
    FEDropShadow: new () => CustomSVGFEDropShadowElement;
    FEFlood: new () => CustomSVGFEFloodElement;
    FEFuncA: new () => CustomSVGFEFuncAElement;
    FEFuncB: new () => CustomSVGFEFuncBElement;
    FEFuncG: new () => CustomSVGFEFuncGElement;
    FEFuncR: new () => CustomSVGFEFuncRElement;
    FEGaussianBlur: new () => CustomSVGFEGaussianBlurElement;
    FEImage: new () => CustomSVGFEImageElement;
    FEMerge: new () => CustomSVGFEMergeElement;
    FEMergeNode: new () => CustomSVGFEMergeNodeElement;
    FEMorphology: new () => CustomSVGFEMorphologyElement;
    FEOffset: new () => CustomSVGFEOffsetElement;
    FEPointLight: new () => CustomSVGFEPointLightElement;
    FESpecularLighting: new () => CustomSVGFESpecularLightingElement;
    FESpotLight: new () => CustomSVGFESpotLightElement;
    FETile: new () => CustomSVGFETileElement;
    FETurbulence: new () => CustomSVGFETurbulenceElement;
    Filter: new () => CustomSVGFilterElement;
    ForeignObject: new () => CustomSVGForeignObjectElement;
    G: new () => CustomSVGGElement;
    Geometry: new () => CustomSVGGeometryElement;
    Gradient: new () => CustomSVGGradientElement;
    Graphics: new () => CustomSVGGraphicsElement;
    Image: new () => CustomSVGImageElement;
    Line: new () => CustomSVGLineElement;
    LinearGradient: new () => CustomSVGLinearGradientElement;
    MPath: new () => CustomSVGMPathElement;
    Marker: new () => CustomSVGMarkerElement;
    Mask: new () => CustomSVGMaskElement;
    Metadata: new () => CustomSVGMetadataElement;
    Path: new () => CustomSVGPathElement;
    Pattern: new () => CustomSVGPatternElement;
    Polygon: new () => CustomSVGPolygonElement;
    Polyline: new () => CustomSVGPolylineElement;
    RadialGradient: new () => CustomSVGRadialGradientElement;
    Rect: new () => CustomSVGRectElement;
    SVG: new () => CustomSVGSVGElement;
    Script: new () => CustomSVGScriptElement;
    Set: new () => CustomSVGSetElement;
    Stop: new () => CustomSVGStopElement;
    Style: new () => CustomSVGStyleElement;
    Switch: new () => CustomSVGSwitchElement;
    Symbol: new () => CustomSVGSymbolElement;
    TSpan: new () => CustomSVGTSpanElement;
    TextContent: new () => CustomSVGTextContentElement;
    Text: new () => CustomSVGTextElement;
    TextPath: new () => CustomSVGTextPathElement;
    TextPositioning: new () => CustomSVGTextPositioningElement;
    Title: new () => CustomSVGTitleElement;
    Use: new () => CustomSVGUseElement;
    View: new () => CustomSVGViewElement;
};
export type Namespace = {
    HTML: HTML;
    SVG: SVG;
};

class CustomHTMLAnchorElement extends HTMLAnchorElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLElement extends HTMLElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLAreaElement extends HTMLAreaElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLAudioElement extends HTMLAudioElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLBaseElement extends HTMLBaseElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLQuoteElement extends HTMLQuoteElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLBodyElement extends HTMLBodyElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLBRElement extends HTMLBRElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLButtonElement extends HTMLButtonElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLCanvasElement extends HTMLCanvasElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTableCaptionElement extends HTMLTableCaptionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTableColElement extends HTMLTableColElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLDataElement extends HTMLDataElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLDataListElement extends HTMLDataListElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLModElement extends HTMLModElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLDetailsElement extends HTMLDetailsElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLDialogElement extends HTMLDialogElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLDivElement extends HTMLDivElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLDListElement extends HTMLDListElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLEmbedElement extends HTMLEmbedElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLFieldSetElement extends HTMLFieldSetElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLFormElement extends HTMLFormElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLHeadingElement extends HTMLHeadingElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLHeadElement extends HTMLHeadElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLHRElement extends HTMLHRElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLHtmlElement extends HTMLHtmlElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLIFrameElement extends HTMLIFrameElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLImageElement extends HTMLImageElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLInputElement extends HTMLInputElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLLabelElement extends HTMLLabelElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLLegendElement extends HTMLLegendElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLLIElement extends HTMLLIElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLLinkElement extends HTMLLinkElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLMapElement extends HTMLMapElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLMenuElement extends HTMLMenuElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLMetaElement extends HTMLMetaElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLMeterElement extends HTMLMeterElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLObjectElement extends HTMLObjectElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLOListElement extends HTMLOListElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLOptGroupElement extends HTMLOptGroupElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLOptionElement extends HTMLOptionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLOutputElement extends HTMLOutputElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLParagraphElement extends HTMLParagraphElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLPictureElement extends HTMLPictureElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLUnknownElement extends HTMLUnknownElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLPreElement extends HTMLPreElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLProgressElement extends HTMLProgressElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLScriptElement extends HTMLScriptElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLSelectElement extends HTMLSelectElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLSlotElement extends HTMLSlotElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLSourceElement extends HTMLSourceElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLSpanElement extends HTMLSpanElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLStyleElement extends HTMLStyleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTableElement extends HTMLTableElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTableSectionElement extends HTMLTableSectionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTableCellElement extends HTMLTableCellElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTemplateElement extends HTMLTemplateElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTextAreaElement extends HTMLTextAreaElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTimeElement extends HTMLTimeElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTitleElement extends HTMLTitleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTableRowElement extends HTMLTableRowElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLTrackElement extends HTMLTrackElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLUListElement extends HTMLUListElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLVideoElement extends HTMLVideoElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGAElement extends SVGAElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGAnimateElement extends SVGAnimateElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGAnimateMotionElement extends SVGAnimateMotionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGAnimateTransformElement extends SVGAnimateTransformElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGAnimationElement extends SVGAnimationElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGCircleElement extends SVGCircleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGClipPathElement extends SVGClipPathElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGComponentTransferFunctionElement extends SVGComponentTransferFunctionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGDefsElement extends SVGDefsElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGDescElement extends SVGDescElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGElement extends SVGElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGEllipseElement extends SVGEllipseElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEBlendElement extends SVGFEBlendElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEColorMatrixElement extends SVGFEColorMatrixElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEComponentTransferElement extends SVGFEComponentTransferElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFECompositeElement extends SVGFECompositeElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEConvolveMatrixElement extends SVGFEConvolveMatrixElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEDiffuseLightingElement extends SVGFEDiffuseLightingElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEDisplacementMapElement extends SVGFEDisplacementMapElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEDistantLightElement extends SVGFEDistantLightElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEDropShadowElement extends SVGFEDropShadowElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEFloodElement extends SVGFEFloodElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEFuncAElement extends SVGFEFuncAElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEFuncBElement extends SVGFEFuncBElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEFuncGElement extends SVGFEFuncGElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEFuncRElement extends SVGFEFuncRElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEGaussianBlurElement extends SVGFEGaussianBlurElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEImageElement extends SVGFEImageElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEMergeElement extends SVGFEMergeElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEMergeNodeElement extends SVGFEMergeNodeElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEMorphologyElement extends SVGFEMorphologyElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEOffsetElement extends SVGFEOffsetElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFEPointLightElement extends SVGFEPointLightElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFESpecularLightingElement extends SVGFESpecularLightingElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFESpotLightElement extends SVGFESpotLightElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFETileElement extends SVGFETileElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFETurbulenceElement extends SVGFETurbulenceElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGFilterElement extends SVGFilterElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGForeignObjectElement extends SVGForeignObjectElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGGElement extends SVGGElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGGeometryElement extends SVGGeometryElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGGradientElement extends SVGGradientElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGGraphicsElement extends SVGGraphicsElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGImageElement extends SVGImageElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGLineElement extends SVGLineElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGLinearGradientElement extends SVGLinearGradientElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGMPathElement extends SVGMPathElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGMarkerElement extends SVGMarkerElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGMaskElement extends SVGMaskElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGMetadataElement extends SVGMetadataElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGPathElement extends SVGPathElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGPatternElement extends SVGPatternElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGPolygonElement extends SVGPolygonElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGPolylineElement extends SVGPolylineElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGRadialGradientElement extends SVGRadialGradientElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGRectElement extends SVGRectElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGSVGElement extends SVGSVGElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGScriptElement extends SVGScriptElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGSetElement extends SVGSetElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGStopElement extends SVGStopElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGStyleElement extends SVGStyleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGSwitchElement extends SVGSwitchElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGSymbolElement extends SVGSymbolElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGTSpanElement extends SVGTSpanElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGTextContentElement extends SVGTextContentElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGTextElement extends SVGTextElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGTextPathElement extends SVGTextPathElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGTextPositioningElement extends SVGTextPositioningElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGTitleElement extends SVGTitleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGUseElement extends SVGUseElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomSVGViewElement extends SVGViewElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};
