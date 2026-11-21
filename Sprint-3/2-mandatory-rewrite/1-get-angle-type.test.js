const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

const right = getAngleType(90);
assertEquals(right, "Right angle");
//console.log(right);

const acute = getAngleType(45);
assertEquals(acute, "Acute angle");
//console.log(acute);

const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse Angle");
//console.log(obtuse);

const straightAngle = getAngleType(180);
assertEquals(straightAngle, "Straight Angle");
//console.log(straightAngle);

const reflexAngle = getAngleType(220);
assertEquals(reflexAngle, "Reflex Angle");
//console.log(reflexAngle);
