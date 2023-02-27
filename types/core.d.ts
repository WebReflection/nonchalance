declare function _default(options?: Options): Map<any, any>;
export default _default;
/**
 * An object with a `document` and zero, one, or more custom namespaces.
 */
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
