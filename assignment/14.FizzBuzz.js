// FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a
// multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if
// only 5, print “Buzz”; otherwise, print the number itself.

var Num = Number(prompt("Enter any number!"));

if (Num % 3 == 0 && Num % 5 == 0) {
  console.log("FizzBuzz");
} else if (Num % 3 == 0) {
  console.log("Fizz");
} else if (Num % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(Num);
}
