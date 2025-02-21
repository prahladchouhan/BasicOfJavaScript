// User Greeting – Ask for the user's name and time (24-hour
// format). Greet them accordingly:
//  5 AM–12 PM: "Good Morning, [Name]!"
//  12 PM–5 PM: "Good Afternoon, [Name]!"
//  5 PM–9 PM: "Good Evening, [Name]!"
//  9 PM–5 AM: "Good Night, [Name]!"

var Name = prompt("Enter Your Good Name!");
var time = Number(prompt("Enter Time in range of (00 to 24)"));

if (time > 5 && time <= 12) {
  //   console.log("Good Morning,[" + Name + "]!");
  alert("Good Morning, " + Name + "]!");
} else if (time > 12 && time <= 17) {
  //   console.log("Good Afternoon,[" + Name + "]!");
  alert("Good Afternoon, " + Name + "]!");
} else if (time > 17 && time <= 21) {
  //   console.log("Good Evening,[" + Name + "]!");
  alert("Good Evening, " + Name + "!");
} else {
  //   console.log("Good Night,[" + Name + "]!");
  alert("Good Night, " + Name + "!");
}
