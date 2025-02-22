// Reverse Without String Methods – Ask the user for a number
// and reverse it without using .split(), .reverse(), or .join().

var num=Number(prompt("Enter the number!"));

var reverse=0,
  rem;
while (num > 0) {
  rem = num % 10;
  reverse= reverse * 10 + rem;
  num = parseInt(num / 10);
}
console.log("reversal is =" + reverse);