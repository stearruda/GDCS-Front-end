/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 *	Use the sizing chart, create a series of logical expressions that prints the
 * size of a t-shirt based on the measurements of shirtWidth, shirtLength, and 
 * shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.
 *
 *	For example, if...
 *
 *	var shirtWidth = 23; // size L (large)
 *	var shirtLength = 30; // size L (large)
 *	var shirtSleeve = 8.71; // size L (large)
 *	
 *	Then print L to the console.
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;


if((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");  
} else if ((shirtWidth >= 28 && shirtWidth < 30) && (shirtLength >= 34 && shirtLength < 35) && (shirtSleeve >= 10.13 && shirtSleeve < 10.63)) {
    console.log("3XL");  
}else {
    console.log("N\/A");
}