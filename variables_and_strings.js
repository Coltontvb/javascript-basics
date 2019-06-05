//JS Variables with Strings

var yourName = prompt("What is your name");
var tweet = prompt("You may enter 140 characters");
var charCount = 140 - tweet.length;
var limitedTweet = tweet.slice(0, 140);

if (charCount < 0) {
    alert(yourName + " wrote: " + limitedTweet + "...This got cut off");
} else {
    alert(yourName + " wrote: " + tweet);
}

// The Challenge - Capitalize a name using only what you've learned thus far

var yourName = prompt("What is your name?");
var capYourName = yourName[0].toUpperCase() + yourName.slice(1, yourName.length).toLowerCase();

alert("hello, " + capYourName);