//const 12HourClockTime = "20:53";
//const 24hourClockTime = "08:53";

// the naming convention is wrong in this case, and the names them self dont represent the values they are storing:
// we can either change the names of the variables or use a methode to get the correct time in our desired format as shown below:

let timeIn12HourFormat = "08:53 PM";
let timeIn24HourFormat = "20:53";

let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();

timeIn12HourFormat =
  hours >= 12 ? `${hours - 12}:${minutes} PM` : `${hours}:${minutes} AM`;
timeIn24HourFormat = `${hours}:${minutes}`;

console.log(timeIn24HourFormat);
