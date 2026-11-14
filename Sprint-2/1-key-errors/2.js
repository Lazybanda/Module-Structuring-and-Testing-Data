// we are suposed to calculate the square of a number acording to the nume of the function first thing is we have a defined paramater which is not a good practice => hard coding insted i would be better to have "num" as paramater to have more flexibility. and there is no call for the function

// this function should square any number but instead we're going to get an error

// =============> Syntaxerror

/*function square(3) {
    return num * num;
}*/

// =============> SyntaxError: Unexpected number

// =============> enum *num  is causing the error because num is not defined

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(4));
