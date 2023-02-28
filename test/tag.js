import('../esm/tag.js').then(test);

function test({default: createTag}) {
  const tag = createTag({
    Test: class Test { static tag = 'div'; },
    Some: class Some { static tag = 'p'; },
    Component1: class Component1 { static tag = 'span'; }
  });

  console.assert(
    tag`<Test><Some attr="value">abc</Some><Component1 /></>`.join('') ===
    '<div data-comp="Test"><p data-comp="Some" attr="value">abc</p><span data-comp="Component1" /></>'
  );

  console.assert(
    tag`<div>nothing happened here</div>`.join('') ===
    '<div>nothing happened here</div>'
  );
}
