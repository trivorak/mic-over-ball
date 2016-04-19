const test = require('tape');
const cotangent = require('./mob-formula.js');
const toRadians = require('./mob-formula.js');
const micOverBall = require('./mob-formula.js');

test('cotangent numbers', function(t) {
  t.plan(1);

  t.equals(cotangent(5), 11.43005230278135);
});
