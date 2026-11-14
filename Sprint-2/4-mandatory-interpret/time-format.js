function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3

console.log(formatTimeDisplay(61));
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0
console.log(pad(0));
// c) What is the return value of pad is called for the first time?
// =============> 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 because the remainingSeconds variable is the result of 61 % 60

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 01 because we are using the padStart function we fix the length to 2 and cover the space at the start with "0" so in our case 1 => "1" => "0" +"1" => "01"
