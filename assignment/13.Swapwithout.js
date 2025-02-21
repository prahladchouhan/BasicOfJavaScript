// Swapping Without Third Variable – Take two numbers from the
// user and swap their values without using a third variable.

var firstNo = Number(prompt("enter first number!"));
var SecondNo = Number(prompt("enter Second number!"));

console.log("Number before Swaping!");
console.log("1st number  =" + firstNo);
console.log("2nd number =" + SecondNo);

//swaping without third variable !

firstNo = firstNo + SecondNo;
SecondNo = firstNo - SecondNo;
firstNo = firstNo - SecondNo;

console.log("Number after Swaping!");
console.log("1st number =" + firstNo);
console.log("2nd number =" + SecondNo);
