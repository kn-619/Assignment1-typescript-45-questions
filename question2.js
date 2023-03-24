var person = "fAisAl";
console.log("Lowercase = ".concat(person.toLowerCase()));
console.log("Uppercase= ".concat(person.toUpperCase()));
function toTitleCase(str) {
    var y = str.slice(1).toLowerCase();
    var x = str.slice(0, 1).toUpperCase();
    return x + y;
}
console.log("Titlecase = ".concat(toTitleCase(person)));
