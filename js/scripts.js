// var re = /e/gi;
// var userText = function(input) {
// var newText = userText.replace(/e/gi, '3');
// console.log(newText);

var re = /e/gi
var userText = function(input)
var newText = .replace(re, '3');
console.log(newText);

};

$(document).ready(function() {
  $("form#leetspeak").submit(function(event) {
    var result = newText(input);
  $("#result").show();

  event.preventDefault();
  });

});



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

var input = prompt.val

get user input
split word into array
take array and loop through it with for each loop
(loop through every character in array) check each character to see if it matches
use else statements for any of the words or digits we want to change
then below use another array to push blank (replacement )values for any matches 
if they don't match still use else statement to join into word ( if it meet none of our criteria)

rejoin words then use that to return