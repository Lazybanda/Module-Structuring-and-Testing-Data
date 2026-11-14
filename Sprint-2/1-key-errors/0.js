// Predict and explain first...
//  =============> the function it self looks okay and functional the issues are in the way we call the function and using the same name as the paramater, we need to call it like so capitalise("parameter/str"), and change the variable name in our function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise */

// =============> the code return the string after capitalising the first letter and it's doing that by declaring a new varible that combines the first letter to uppercase by using the function toUpperCase()and add the rest of the string by using the function slice()from index 1.

// =============> write your new code here

function capitalise(str) {
  let correctedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return correctedStr;
}
const result = capitalise("oussama");

console.log(result);
