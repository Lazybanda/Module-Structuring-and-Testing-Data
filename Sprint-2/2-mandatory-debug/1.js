// Predict and explain first...
//  =============> we get undifined because the return statment undicate to exite the function before we do the sum

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> the function is suposed to do the sum of two paramaters we just need to return the coreect statment
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
