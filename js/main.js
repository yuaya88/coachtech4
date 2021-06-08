//問題１
const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function ( value, index, array) {
  return array.indexOf( value ) === index;
})
console.log(result);

//問題２
function leapYear(year) {
  if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
}
console.log(leapYear(2020));
console.log(leapYear(2021));
/*let checkYear = 2020;
if (leapYear(checkYear)) {
  console.log(checkYear + `年はうるう年です`);
} else {
  console.log(checkYear + `年はうるう年ではありません`);
}*/
