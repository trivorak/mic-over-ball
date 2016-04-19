const test = require('tape');
const cotangent = require('../mob-formula.js');

test('cotangent numbers', function(t) {
  t.plan(1);

  t.equals(cotangent(5), 0.087488663525924);
});
