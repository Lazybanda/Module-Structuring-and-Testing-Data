// trying to create an age variable and then reassign the value by 1

const age = 33;
//age = age + 1;

// in this case we can not change the originale age variable as it's declared by the key word const. and eill throw an error.
// we can either creat a new variable such as updatedAge or declare age using key word let.

const updatedAge = age + 1;
console.log(updatedAge);
