// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  const minuts = Number(time.slice(3));

  if (hours === 12) {
    return `12:${minuts < 10 ? `0${minuts}` : minuts} PM`;
  }
  if (hours > 12) {
    return `0${hours - 12}:${minuts < 10 ? `0${minuts}` : minuts} PM`;
  }

  return `0${hours}:${minuts < 10 ? `0${minuts}` : minuts} AM`;
}

console.log(formatAs12HourClock("20:20"));
console.log(formatAs12HourClock("08:09"));
console.log(formatAs12HourClock("21:01"));
console.log(formatAs12HourClock("12:06"));

// my apologies for all the mess Thank you for your time :)
