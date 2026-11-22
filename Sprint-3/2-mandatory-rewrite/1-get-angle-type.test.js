const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

const right = getAngleType(90);

//console.log(right);

const acute = getAngleType(45);

//console.log(acute);
test("should identify acute angle (50°)", () => {
  expect(getAngleType(50)).toEqual("Acute angle");
});
//

const obtuse = getAngleType(120);

//console.log(obtuse);
test("should identify obtuse angle (130°)", () => {
  expect(getAngleType(130)).toEqual("Obtuse Angle");
});

//

const straightAngle = getAngleType(180);

//console.log(straightAngle);
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight Angle");
});

//

const reflexAngle = getAngleType(220);

//console.log(reflexAngle);
test("should identify reflex angle (230°)", () => {
  expect(getAngleType(230)).toEqual("Reflex Angle");
});
