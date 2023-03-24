/*29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */
var favorite_fruits = ["banana", "mango", "grapes"];
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] == "apple") {
        console.log("you really like apples");
    }
    if (favorite_fruits[i] == "strawberry") {
        console.log("you really like strawberry");
    }
    if (favorite_fruits[i] == "mango") {
        console.log("you really like mango");
    }
    if (favorite_fruits[i] == "banana") {
        console.log("you really like banana");
    }
    if (favorite_fruits[i] == "grapes") {
        console.log("you really like grapes");
    }
}
