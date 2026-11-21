function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  // read to the end, complete line 36, then pass your test here
  if (angle < 90) return "Acute angle";
  if (angle < 180) return "Obtuse Angle";
  if (angle === 180) return "Straight Angle";
  if (angle < 360) return "Reflex Angle";

  return "Please submit a valid number";
}

// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;
