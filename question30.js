var usernames = [];
if (usernames.length == 0) {
    console.log("Add new users");
}
else {
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] == "Admin") {
            console.log("Hello admin, would you like to see a status report");
        }
        else {
            console.log("hello ".concat(usernames[i], ", thank  you for loggin in again"));
        }
    }
}
