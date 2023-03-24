/* Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by
adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
var magicians = ["Dynamo", "David Copperfield", "Paul Daniels", "David blaine", "Derren Brown"];
function make_great(Name) {
    for (var i = 0; i < Name.length; i++) {
        Name[i] = "Great ".concat(Name[i]);
    }
}
make_great(magicians);
function show_magicians(Name) {
    for (var i = 0; i < Name.length; i++) {
        console.log(Name[i]);
    }
}
show_magicians(magicians);
