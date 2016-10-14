const test = require('tape');
const micOverBall = require('./mob-formula.js');

test('micOverBall results', function(t) {
  t.plan(2);

  t.equals(micOverBall(1,1),2.0176);
  t.equals(micOverBall(60,.125),0.5915);
});
