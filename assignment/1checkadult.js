// Age Category Message – Ask the user for their age. If they are
// under 18, print “You are a minor.” If they are between 18 and 60,
// print “You are an adult.” If they are above 60, print “You are a
// senior citizen.
var age=Number(prompt("Enter your age!"));

if(age<18)
{
    console.log("You are Minor");  
}
else if(age >18 && age<60 )
{
    console.log("You are Adult!");
}
else{
    console.log("YOu are senior Citizen!")
}
