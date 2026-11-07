// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// Js is reading our code starting from the top (line 1), we are trying to use the cityOfBith variable before we declare it, this is why we get an error; simply switching the order of the two will fix that.
