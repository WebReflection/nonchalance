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
    HTML?: "http://www.w3.org/1999/xhtml";
    /**
     * the namespace to use for SVG classes.
     */
    SVG?: "http://www.w3.org/2000/svg";
    /**
     * any desired extra namespace.
     */
    CustomML?: "...";
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

declare class CustomHTMLAnchorElement extends HTMLAnchorElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLElement extends HTMLElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLAreaElement extends HTMLAreaElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLAudioElement extends HTMLAudioElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLBaseElement extends HTMLBaseElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLQuoteElement extends HTMLQuoteElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLBodyElement extends HTMLBodyElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLBRElement extends HTMLBRElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLButtonElement extends HTMLButtonElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLCanvasElement extends HTMLCanvasElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTableCaptionElement extends HTMLTableCaptionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTableColElement extends HTMLTableColElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLDataElement extends HTMLDataElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLDataListElement extends HTMLDataListElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLModElement extends HTMLModElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLDetailsElement extends HTMLDetailsElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLDialogElement extends HTMLDialogElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLDivElement extends HTMLDivElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLDListElement extends HTMLDListElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLEmbedElement extends HTMLEmbedElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLFieldSetElement extends HTMLFieldSetElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLFormElement extends HTMLFormElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLHeadingElement extends HTMLHeadingElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLHeadElement extends HTMLHeadElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLHRElement extends HTMLHRElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLHtmlElement extends HTMLHtmlElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLIFrameElement extends HTMLIFrameElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLImageElement extends HTMLImageElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLInputElement extends HTMLInputElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLLabelElement extends HTMLLabelElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLLegendElement extends HTMLLegendElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLLIElement extends HTMLLIElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLLinkElement extends HTMLLinkElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLMapElement extends HTMLMapElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLMenuElement extends HTMLMenuElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLMetaElement extends HTMLMetaElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLMeterElement extends HTMLMeterElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLObjectElement extends HTMLObjectElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLOListElement extends HTMLOListElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLOptGroupElement extends HTMLOptGroupElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLOptionElement extends HTMLOptionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLOutputElement extends HTMLOutputElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLParagraphElement extends HTMLParagraphElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLPictureElement extends HTMLPictureElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLUnknownElement extends HTMLUnknownElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLPreElement extends HTMLPreElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLProgressElement extends HTMLProgressElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLScriptElement extends HTMLScriptElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLSelectElement extends HTMLSelectElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLSlotElement extends HTMLSlotElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLSourceElement extends HTMLSourceElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLSpanElement extends HTMLSpanElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLStyleElement extends HTMLStyleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTableElement extends HTMLTableElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTableSectionElement extends HTMLTableSectionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTableCellElement extends HTMLTableCellElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTemplateElement extends HTMLTemplateElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTextAreaElement extends HTMLTextAreaElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTimeElement extends HTMLTimeElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTitleElement extends HTMLTitleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTableRowElement extends HTMLTableRowElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLTrackElement extends HTMLTrackElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLUListElement extends HTMLUListElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomHTMLVideoElement extends HTMLVideoElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGAElement extends SVGAElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGAnimateElement extends SVGAnimateElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGAnimateMotionElement extends SVGAnimateMotionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGAnimateTransformElement extends SVGAnimateTransformElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGAnimationElement extends SVGAnimationElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGCircleElement extends SVGCircleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGClipPathElement extends SVGClipPathElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGComponentTransferFunctionElement extends SVGComponentTransferFunctionElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGDefsElement extends SVGDefsElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGDescElement extends SVGDescElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGElement extends SVGElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGEllipseElement extends SVGEllipseElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEBlendElement extends SVGFEBlendElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEColorMatrixElement extends SVGFEColorMatrixElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEComponentTransferElement extends SVGFEComponentTransferElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFECompositeElement extends SVGFECompositeElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEConvolveMatrixElement extends SVGFEConvolveMatrixElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEDiffuseLightingElement extends SVGFEDiffuseLightingElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEDisplacementMapElement extends SVGFEDisplacementMapElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEDistantLightElement extends SVGFEDistantLightElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEDropShadowElement extends SVGFEDropShadowElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEFloodElement extends SVGFEFloodElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEFuncAElement extends SVGFEFuncAElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEFuncBElement extends SVGFEFuncBElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEFuncGElement extends SVGFEFuncGElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEFuncRElement extends SVGFEFuncRElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEGaussianBlurElement extends SVGFEGaussianBlurElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEImageElement extends SVGFEImageElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEMergeElement extends SVGFEMergeElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEMergeNodeElement extends SVGFEMergeNodeElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEMorphologyElement extends SVGFEMorphologyElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEOffsetElement extends SVGFEOffsetElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFEPointLightElement extends SVGFEPointLightElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFESpecularLightingElement extends SVGFESpecularLightingElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFESpotLightElement extends SVGFESpotLightElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFETileElement extends SVGFETileElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFETurbulenceElement extends SVGFETurbulenceElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGFilterElement extends SVGFilterElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGForeignObjectElement extends SVGForeignObjectElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGGElement extends SVGGElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGGeometryElement extends SVGGeometryElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGGradientElement extends SVGGradientElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGGraphicsElement extends SVGGraphicsElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGImageElement extends SVGImageElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGLineElement extends SVGLineElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGLinearGradientElement extends SVGLinearGradientElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGMPathElement extends SVGMPathElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGMarkerElement extends SVGMarkerElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGMaskElement extends SVGMaskElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGMetadataElement extends SVGMetadataElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGPathElement extends SVGPathElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGPatternElement extends SVGPatternElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGPolygonElement extends SVGPolygonElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGPolylineElement extends SVGPolylineElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGRadialGradientElement extends SVGRadialGradientElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGRectElement extends SVGRectElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGSVGElement extends SVGSVGElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGScriptElement extends SVGScriptElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGSetElement extends SVGSetElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGStopElement extends SVGStopElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGStyleElement extends SVGStyleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGSwitchElement extends SVGSwitchElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGSymbolElement extends SVGSymbolElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGTSpanElement extends SVGTSpanElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGTextContentElement extends SVGTextContentElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGTextElement extends SVGTextElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGTextPathElement extends SVGTextPathElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGTextPositioningElement extends SVGTextPositioningElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGTitleElement extends SVGTitleElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGUseElement extends SVGUseElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}

declare class CustomSVGViewElement extends SVGViewElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
}
