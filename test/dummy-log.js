import createRegistry from '../esm/dummy.js';
import createTag from '../esm/tag.js';

const {HTML} = createRegistry();

class HelloDiv extends HTML.Div {
  connectedCallback() {
    console.log('here I am');
  }
}

// create a namespace reusable to hydrate
const nmsp = {HelloDiv};

// create a tag transformer
const tag = createTag(nmsp);

// imagine a server response instead
// note: this code is for demo sake only
console.log(tag`
<!doctype html>
<script type="module">
import createRegistry from 'nonchalance/ce';
const {HTML} = createRegistry();
const nmsp = {};
for (const el of document.querySelectorAll('[data-comp]')) {
  const {comp} = el.dataset;
  delete el.dataset.comp;
  new nmsp[comp](el);
}
</script>
<HelloDiv>👋<HelloDiv>
`
  .join('')
  .trim()
  .replace(
    'const nmsp = {};',
    `const nmsp = {
      ${[...Object.entries(nmsp)].map(
        ([key, value]) => `${key}: ${value}`
      ).join(',\n')}
    };`
  ));