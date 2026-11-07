const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. line 3 is to clean our string from the trailing currency part as described in the variable name; subString method extracts a part of the original string and assigns it to a new one; in our case for example:
// (0, penceString.length - 1) => .length is a method to ge the length, and the key part to omit the curensy is the -1.
// 3. line 8 is adding a padding to our string using the method padStart which takes two parameters the final length and the desired padding, in our case we add a "0" * until we reach the length of three. this to ensure that we have the right length to determine the amount in pounds.

//4. line 9 is to extract the pounds from the padded string, we use the same subString method as before but this time we omit the last two characters which represent the pence. this why the padding is important otherwise we could get an error in our case.

//5. line 14we extract the string using the substring (paddedPenceNumberString.length - 2) will get the pence amount in this case it will be 3 - 2 = 1 which will be 99 and same logic with the paddind to ensure a two number format at the end we also used method chaining to achive the final result £ amount of pounds .amount of pence.
