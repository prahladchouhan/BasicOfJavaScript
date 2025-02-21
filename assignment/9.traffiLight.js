// Traffic Light System – Ask the user for a traffic light color (red,
//     yellow, green). Print appropriate messages:

//      Red: "Stop!"
//      Yellow: "Get Ready!"
//      Green: "Go!"

var askLight = prompt("Enter the light Color!");

if (askLight == "red") {
  console.log("Stop!");
} else if (askLight == "yellow") {
  console.log("GET READY!");
} else if (askLight == "green") {
  console.log("GO!");
} else {
  console.log("invalid entry!");
}
