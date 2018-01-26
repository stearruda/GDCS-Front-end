/*
 * Programming Quiz: Build A Triangle (5-3)
 * 
 * Create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle.
 *
 * We've given you one function makeLine() to start with.
 * 
 * You will need to call this makeLine() function in buildTriangle().
 *
 */


// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// my code
function buildTriangle(row) {
    var final = "";
    for (var i = 1; i <= row; i++) {
        final+=(makeLine(i));
    }
    return final;
}

console.log(buildTriangle(10));