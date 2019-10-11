QUnit.module('MAIN MODULE', {calcTotal, calcTip})

QUnit.test( "TEST calcTotal", assert => {
    assert.equal(calcTotal(20, .05, 2),10.5, "Normal input");
    assert.equal(calcTotal(-20, .15, -10),2.3, "Negative inputs")
    assert.equal(calcTotal(30, .2, 2),18, "Normal input")
    assert.equal(calcTotal(40, .1, 4),11, "Normal input")
    assert.equal(calcTotal(50, .15, 5),11.5, "Normal input")
  });

  QUnit.test( "TEST calcTip", assert => {
    assert.equal(calcTip(20, .05, 1),1, "Normal input");
    assert.equal(calcTip(-20, .15, -10),0.3, "Negative inputs")
    assert.equal(calcTip(30, .2, 2),3, "Normal input")
    assert.equal(calcTip(40, .1, 4),1, "Normal input")
    assert.equal(calcTip(50, .15, 5),1.5, "Normal input")
  });
