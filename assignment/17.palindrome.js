// Palindrome Checker – Ask the user for a word. Check if it
// reads the same forward and backward. Print “Palindrome” or
// “Not a Palindrome.”

var word=prompt("Enter Word ");

let rev="";
for(let i=word.length-1;i>=0;i--)
{
    rev +=word[i];
}
if(rev==word)
{
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome");
}