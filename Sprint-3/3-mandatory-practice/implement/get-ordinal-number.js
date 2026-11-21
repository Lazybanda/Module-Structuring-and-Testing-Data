function getOrdinalNumber(num) {
  const strNumber = num.toString();
  if (
    strNumber.slice(-2) === "11" ||
    strNumber.slice(-2) === "12" ||
    strNumber.slice(-2) === "13"
  )
    return num + "th";
  if (strNumber.slice(-1) === "1") return num + "st";
  if (strNumber.slice(-1) === "2") return num + "nd";
  if (strNumber.slice(-1) === "3") return num + "rd";
  else return num + "th";
}

//console.log(getOrdinalNumber(911111111133))
module.exports = getOrdinalNumber;
