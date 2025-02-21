// Character Case Checker – Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

var char= prompt("enter One Character!");

if(char >= 'A'&& char<= 'Z')
{
    console.log(char +" is upper case!");
}
else if(char >= 'a'&& char<= 'z'){
    console.log(char +" is Lower case!");
}
else{
    console.log(char+" Not a letter!");

}
