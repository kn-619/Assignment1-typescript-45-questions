"use strict";
/*24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want t
o try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
 */
let str = `FAISAL`;
//test for string
console.log("test for strings");
console.log(str == `FAISAL`); // output true
console.log(str != `safi`); //  output true
console.log(str == `khan`); // ouput false
console.log(str.toLowerCase() == `faisal`); // OUTPUT TRUE
//test for numbers
console.log("test for numbers ");
let a = 4;
let b = 9;
console.log(a < b); //true
console.log(b > a); //true
console.log(a == b); //false
console.log(a != b); //true
console.log(a + 9 >= b); //true
console.log(a + 5 <= b); // true
console.log("test using and and or operation");
let z = 5;
let Name = `faisal`;
console.log(z == 5 && Name == `faisal`); // true;
console.log(z == 5 && Name == `faiSal`); // false;
console.log(z != 5 || Name == `faisal`); // true cause one condition is true;
console.log(z != 5 || Name == `faiSal`); // false  cause both condition are wrongs
console.log("test for checking elements of array");
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.includes(3));
console.log(arr1.includes(9));
