/*40.	Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
 Use the function to make three dictionaries representing different albums. Print each return value to show that
  Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store
  the number of tracks on an album. If the calling line includes a value for the number of tracks,
 add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */
var obj = function (Name1, tittle, Numberoftracks) {
    if (Numberoftracks) {
        var sum1 = {
            "Name": Name1,
            "AlbumTittle": tittle,
            "Tracks": Numberoftracks
        };
        return sum1;
    }
    else {
        var sum = {
            "Name": Name1,
            "AlbumTittle": tittle
        };
        return sum;
    }
};
console.log(obj("Taylor swift", "1989"));
console.log(obj("No Doubt", "Tragic kingdom"));
console.log(obj("Beyonce", "Beyonce", 5));
