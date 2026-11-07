const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// a - there is 6 variables declarations.
// b - there is only 1 which is the console.log(result).
// c - movieLength is the total time of the movie in seconds, and % is the modulo operator, which returns the reminder of a division, so in our case the reminder of 8784 divided by 60 is 24.
// d - in our code we are looking for a final result in the following format hh:mm:ss, now that we now our final goal we can brake donn this one as such:
//  we have the total in seconds.
//  we need to now the ss part  which is the reminder after the devision by 60 (1min = 60s).
//  after that we can get the number of minuts by doing a simple dividion in our totalMinuts variable.
//  totalSeconds - remindre (in our remainingSeconds variable) / 60 = totalMinutes => for the mm part.
//  ** we follow the same logic to get the hh part aka totalHours.

// e - if we are still talking about line 4 the name seams appropriate.
// f - as long as it is a positive integer Yes it will always work.
