/**
 * Given an optional namespace to recognize components, returns a template
 * literal `tag` function able to make `<Comp />` => `<tag data-comp="Comp" />`.
 * @param {object} [nmsp={}] a namespace containing components to transform.
 */
export default (nmsp = {}) => (
  /**
   * Transform a template with components as tags into respective
   * elements with a `data-comp` attribute usable for hydration.
   * @param {string[]} template
   */
  template =>
    template
      .join('\x00')
      .replace(
        /(<(\/)?(\S*?)>)|(<(\S+)([^>]*?)>)/g,
        (content, _1, closing, other, _4, name, attrs) => {
          const data = ` data-comp="${other || name}"`;
          if (other in nmsp)
            return `<${closing || ''}${nmsp[other].tag}${closing ? '' : data}>`;
          if (name in nmsp)
            return `<${nmsp[name].tag}${data}${attrs}>`;
          return content;
      })
      .split('\x00')
);
