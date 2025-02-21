// Number Reversal – Take a three-digit number from the user
// and print its reverse. (Example: 123 → 321).

var number = Number(prompt("Enter any number !"));
var sum = 0,
  rem;
while (number > 0) {
  rem = number % 10;
  sum = sum * 10 + rem;
  number = parseInt(number / 10);
}
console.log("reversal is =" + sum);
