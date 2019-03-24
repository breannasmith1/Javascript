/*global document, alert, console*/
/*jslint devel: true*/
/*eslint no-console: 0*/
/*eslint no-unused-vars: 0*/

/*jslint devel: true*/
/*global document, console*/
/*eslint no-console: 0*/
document.getElementById("paraOne").style.color = "blue";
console.log("Hello, world!");

// MODULE 2 CHALLENGES!
// Create a series of console.log messages and assignment statements that
// display the following pieces of JS code. Each answer should be just one line of code.
// Try to figure out as much of this as you can on your own!

// CHALLENGE 1
// A console.log() message that displays your full name
console.log("Breanna Smith");

// CHALLENGE 2
// A console.log() message that displays the number 49
// (hint: Be careful! This is a number, not text. It will be used in a calculation).
console.log("49");

// CHALLENGE 3
// A console.log() message that displays the result of 49 times 2
// (hint: Use * for multiplication)
console.log(49 * 2);

// CHALLENGE 4
// A console.log() message that displays the text in the heading
// (hint: This must read the text in the actual heading, between the h1 and /h1 tags)
console.log(document.getElementById("headingOne").innerHTML);

// CHALLENGE 5
// A console.log() message that displays the address in the link
// (not the text in the link, but the address in the link. 
// This must read the actual address in the HTML tag for the link)
console.log(document.getElementById("linkOne").href);

// CHALLENGE 6
// An Assignment Statement that changes the text between the span tags to anything of your choice.
document.getElementById("spanOne").innerHTML = "I am learning JavaScript";

// CHALLENGE 7
// An Assignment Statement that changes the color of the text in the first paragraph to any color you want.
document.getElementById("paraOne").style.color = "#a52a2a";

// CHALLENGE 8
// An Assignment Statement that changes the text inside the link to any text you want 
// (note: do not change the address of the link. Only change the text. 
document.getElementById("linkOne").innerHTML = "Away we go!";