/*37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "i love javascript"; }
    console.log("The size of tshirt is ".concat(size));
    console.log("The message on tshirt is ".concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("Extra Large", "this is just wasting time");
