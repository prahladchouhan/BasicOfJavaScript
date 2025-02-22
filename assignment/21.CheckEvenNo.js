// Even Digit Counter – Take a number from the user and count
// how many even digits it has

let userInput = Number(prompt("Enter a number:"));
let count = 0;

let numStr = userInput.toString(); // Convert number to string for iteration

for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]); // Convert character to number
    if (digit % 2 === 0) { // Check if digit is even
        count++;
    }
}

console.log(`The number of even digits: ${count}`);
