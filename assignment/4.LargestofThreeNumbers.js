// Largest of Three Numbers – Take three numbers as input and
// print the largest number among them without using
// Math.max().

var a=(prompt("Enter first number!"));
var b=(prompt("Enter second number!"));
var c=(prompt("Enter third number!"));

console.log(a,b,c);



if(a>b && a>c)
{
    console.log(a+" A is largest Number !");   
}
else if(b>a && b>c)
{
    console.log(b+" B is largest Number !");   
}
else{
    console.log(c+" C is largest Number !");   

}
