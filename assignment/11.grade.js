// Grade Calculator – Ask the user for their marks (0-100).
// Assign grades based on the range:
//  90-100: A
//  80-89: B
//  70-79: C
//  60-69: D
//  Below 60: F

var marks = Number(prompt("Enter Your marks (0-100)"));
if (marks >= 90 && marks <= 100) {
  console.log("You got 'A' Grade");
} else if (marks >= 80 && marks <= 89) {
  console.log("You got 'B' Grade");
} else if (marks >= 70 && marks <= 79) {
  console.log("You got 'C' Grade");
} else if (marks >= 60 && marks <= 69) {
  console.log("You got 'D' Grade");
} else if (marks < 60) {
  console.log("You got 'F' Grade");
} else {
  console.log("Invalid entry!");
}
