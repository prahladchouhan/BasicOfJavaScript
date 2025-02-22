// Find First Non-Repeating Character – Ask the user for a word
// and find the first character that does not repeat. Example: hello
// → h (since e, l, and o repeat)

var word = prompt("Enter word to check it!");

let charCount = {};
for (let i = 0; i < word.length; i++) {
  let char = word[i];
  charCount[char] = (charCount[char] || 0) + 1;
}

let firstNonReptaing = null;
for (let i = 0; i < word.length; i++) {
  if (charCount[word[i]] === 1) {
    firstNonReptaing = word[i];
    break;
  }
}
if (firstNonReptaing) {
  console.log("First Non-Repeating Character is '" ,firstNonReptaing,"'");
} else {
  console.log("No non-reapting character found!");
}
