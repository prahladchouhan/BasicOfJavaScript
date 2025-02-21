// Multiplication Table – Ask the user for a number and print its
// multiplication table up to 10.

var NumTable = Number(prompt("Enter the number for table"));

for (var i = 1; i <= 10; i++) {
  console.log(NumTable+"*"+i+"="+ NumTable * i);
}
