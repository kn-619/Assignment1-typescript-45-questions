/*41.	Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
var magicians = ["Dynamo", "David Copperfield", "Paul Daniels", "David blaine", "Derren Brown"];
function show_magicians(Name) {
    for (var i = 0; i < Name.length; i++) {
        console.log(Name[i]);
    }
}
show_magicians(magicians);
