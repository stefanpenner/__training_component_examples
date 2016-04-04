import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-octicon-advanced', 'Integration | Component | github octicon advanced', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-octicon-advanced}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#github-octicon-advanced}}
      template block text
    {{/github-octicon-advanced}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
