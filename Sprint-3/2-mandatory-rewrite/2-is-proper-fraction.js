function isProperFraction(numerator, denominator) {
  return (
    numerator < denominator &&
    typeof numerator === "number" &&
    typeof denominator === "number"
  );
}

module.exports = isProperFraction;
