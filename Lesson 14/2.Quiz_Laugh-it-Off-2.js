/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 * 
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */


function laugh(num) {
    var finalMessage = "";
    for (var i = 0; i < num; i++){
     finalMessage += "ha"; 
    }
    return finalMessage + "!";
}

console.log(laugh(3));