/*
 * Programming Quiz: Laugh (5-4)
 * 
 * Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 *
 */

var laugh = function (num) {
    var message = "";
    for (var i = 1; i <= num; i++) {
        message += "ha";
    }
    return message + "!";
}

console.log(laugh(10));