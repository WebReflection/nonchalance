/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {globalThis} [self=globalThis]
 * @returns {HTML}
 */
declare function _default({ document }?: typeof globalThis): HTML;
export default _default;
export type HTML = {
    A: new () => CustomHTMLAnchorElement;
    Abbr: new () => CustomHTMLElement;
    Acronym: new () => CustomHTMLElement;
    Address: new () => CustomHTMLElement;
    Applet: new () => CustomHTMLUnknownElement;
    Area: new () => CustomHTMLAreaElement;
    Article: new () => CustomHTMLElement;
    Aside: new () => CustomHTMLElement;
    Audio: new () => CustomHTMLAudioElement;
    B: new () => CustomHTMLElement;
    Base: new () => CustomHTMLBaseElement;
    Bdi: new () => CustomHTMLElement;
    Bdo: new () => CustomHTMLElement;
    BGSound: new () => CustomHTMLUnknownElement;
    Big: new () => CustomHTMLElement;
    Blink: new () => CustomHTMLUnknownElement;
    BlockQuote: new () => CustomHTMLQuoteElement;
    Body: new () => CustomHTMLBodyElement;
    BR: new () => CustomHTMLBRElement;
    Button: new () => CustomHTMLButtonElement;
    Canvas: new () => CustomHTMLCanvasElement;
    Caption: new () => CustomHTMLTableCaptionElement;
    Center: new () => CustomHTMLElement;
    Cite: new () => CustomHTMLElement;
    Code: new () => CustomHTMLElement;
    Col: new () => CustomHTMLTableColElement;
    ColGroup: new () => CustomHTMLTableColElement;
    Content: new () => CustomHTMLUnknownElement;
    Data: new () => CustomHTMLDataElement;
    DataList: new () => CustomHTMLDataListElement;
    DD: new () => CustomHTMLElement;
    Del: new () => CustomHTMLModElement;
    Details: new () => CustomHTMLDetailsElement;
    Dfn: new () => CustomHTMLElement;
    Dialog: new () => CustomHTMLDialogElement;
    Dir: new () => CustomHTMLDirectoryElement;
    Div: new () => CustomHTMLDivElement;
    DL: new () => CustomHTMLDListElement;
    DT: new () => CustomHTMLElement;
    Element: new () => CustomHTMLElement;
    Em: new () => CustomHTMLElement;
    Embed: new () => CustomHTMLEmbedElement;
    FieldSet: new () => CustomHTMLFieldSetElement;
    FigCaption: new () => CustomHTMLElement;
    Figure: new () => CustomHTMLElement;
    Font: new () => CustomHTMLFontElement;
    Footer: new () => CustomHTMLElement;
    Form: new () => CustomHTMLFormElement;
    Frame: new () => CustomHTMLFrameElement;
    FrameSet: new () => CustomHTMLFrameSetElement;
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
    Image: new () => CustomHTMLUnknownElement;
    Img: new () => CustomHTMLImageElement;
    Input: new () => CustomHTMLInputElement;
    Ins: new () => CustomHTMLModElement;
    Kbd: new () => CustomHTMLElement;
    Keygen: new () => CustomHTMLUnknownElement;
    Label: new () => CustomHTMLLabelElement;
    Legend: new () => CustomHTMLLegendElement;
    LI: new () => CustomHTMLLIElement;
    Link: new () => CustomHTMLLinkElement;
    Main: new () => CustomHTMLElement;
    Map: new () => CustomHTMLMapElement;
    Mark: new () => CustomHTMLElement;
    Marquee: new () => CustomHTMLMarqueeElement;
    Menu: new () => CustomHTMLMenuElement;
    MenuItem: new () => CustomHTMLUnknownElement;
    Meta: new () => CustomHTMLMetaElement;
    Meter: new () => CustomHTMLMeterElement;
    Nav: new () => CustomHTMLElement;
    NoBR: new () => CustomHTMLElement;
    NoEmbed: new () => CustomHTMLElement;
    NoFrames: new () => CustomHTMLElement;
    NoScript: new () => CustomHTMLElement;
    Object: new () => CustomHTMLObjectElement;
    OL: new () => CustomHTMLOListElement;
    OptGroup: new () => CustomHTMLOptGroupElement;
    Option: new () => CustomHTMLOptionElement;
    Output: new () => CustomHTMLOutputElement;
    P: new () => CustomHTMLParagraphElement;
    Param: new () => CustomHTMLParamElement;
    Picture: new () => CustomHTMLPictureElement;
    PlainText: new () => CustomHTMLElement;
    Portal: new () => CustomHTMLUnknownElement;
    Pre: new () => CustomHTMLPreElement;
    Progress: new () => CustomHTMLProgressElement;
    Q: new () => CustomHTMLQuoteElement;
    RB: new () => CustomHTMLElement;
    RP: new () => CustomHTMLElement;
    RT: new () => CustomHTMLElement;
    RTC: new () => CustomHTMLElement;
    Ruby: new () => CustomHTMLElement;
    S: new () => CustomHTMLElement;
    Samp: new () => CustomHTMLElement;
    Script: new () => CustomHTMLScriptElement;
    Section: new () => CustomHTMLElement;
    Select: new () => CustomHTMLSelectElement;
    Shadow: new () => CustomHTMLUnknownElement;
    Slot: new () => CustomHTMLSlotElement;
    Small: new () => CustomHTMLElement;
    Source: new () => CustomHTMLSourceElement;
    Spacer: new () => CustomHTMLUnknownElement;
    Span: new () => CustomHTMLSpanElement;
    Strike: new () => CustomHTMLElement;
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
    TT: new () => CustomHTMLElement;
    U: new () => CustomHTMLElement;
    UL: new () => CustomHTMLUListElement;
    Var: new () => CustomHTMLElement;
    Video: new () => CustomHTMLVideoElement;
    Wbr: new () => CustomHTMLElement;
    XMP: new () => CustomHTMLPreElement;
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

class CustomHTMLUnknownElement extends HTMLUnknownElement {
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

class CustomHTMLDirectoryElement extends HTMLDirectoryElement {
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

class CustomHTMLFontElement extends HTMLFontElement {
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

class CustomHTMLFrameElement extends HTMLFrameElement {
  static observedAttributes?: string[];
  attributeChangedCallback?(name:string, oldValue:string | null, newValue:string | null): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

class CustomHTMLFrameSetElement extends HTMLFrameSetElement {
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

class CustomHTMLMarqueeElement extends HTMLMarqueeElement {
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

class CustomHTMLParamElement extends HTMLParamElement {
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
