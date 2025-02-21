// Simple Login System – Set a predefined username and
// password. Ask the user to enter their credentials using
// prompt(). If correct, print “Login Successful”; otherwise, print
// “Incorrect username or password.”

var Name = "Prahlad Chouhan";
var password = "hello123";

var checkName = prompt("Enter your User-Name !");
var checkPassword = prompt("Enter your password!");

if (checkName === Name && checkPassword === password) {
  console.log("Login Successful");
} else {
  console.log("Incorrect username or password");
}
