let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// a - There are 4 function calls in this file. The lines are: 2, 3, 5, 6;
// b - we get a syntax error on line 5 because of the missing comma "," we add this on to fix our code.
// c - reassignment are on lines 4, 5.
// d - declarations are on lines 1, 2, 7, 8.
// e - first we delete the commas using replaceAll (it's important to use the following parameters 1_"," the character we want to replace, and 2_"" the character we want to replace it with"); after that Number function will convert our string into a number to use it for calculations afterwards.
