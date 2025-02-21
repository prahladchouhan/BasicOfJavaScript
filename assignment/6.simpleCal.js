// Simple Calculator – Ask the user for two numbers and an
// operator (+, -, *, /). Perform the operation and display the result.

var firstNo = Number(prompt("Enter first Number"));
var SecondNo = Number(prompt("Enter Second Number"));

var operation = prompt("Enter the operator sign +,-,*,/");

console.log("1st number = "+firstNo);
console.log("2nd number = "+SecondNo);

console.log("Sign = "+ operation);


if (operation == "+") {
  console.log(firstNo + SecondNo);
} else if (operation == "-") {
  console.log(firstNo - SecondNo);
} else if (operation == "*") {
  console.log(firstNo * SecondNo);
} else if (operation == "-") {
  console.log(firstNo - SecondNo);
}else{
    console.log("involid sign");
    
}
