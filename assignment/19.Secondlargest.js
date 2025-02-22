// Find Second Largest – Take three numbers as input and find
// the second largest number (without using sort() or Math.max()).

var num1 = Number(prompt("Enter 1st number!"));
var num2 = Number(prompt("Enter 2nd number!"));
var num3 = Number(prompt("Enter 3rd number!"));

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
  console.log(" the secondlargest is  " + num1);
} else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
  console.log(" the secondlargest is  " + num2);
} else {
  console.log(" the secondlargest is  " + num3);
}
