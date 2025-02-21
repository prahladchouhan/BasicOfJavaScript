// Even or Odd Sum – Take two numbers from the user using
// prompt(). If the sum of both numbers is even, print “Even Sum”;
// otherwise, print “Odd Sum.”

var firstNo= Number(prompt("Enter first number!"));
var SecondNo= Number(prompt("Enter Second number!"));

var sum=firstNo+SecondNo;

if(sum%2==0)
{
    console.log("Even Sum"); 
}
else{
    console.log("Odd Sum");    
}