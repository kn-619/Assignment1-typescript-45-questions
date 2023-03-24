var guest = ["Muhammad Akbar", " Alp arsalan ", " Ahmad shah abali", " Kaloo khan"];
console.log("initail list");
guest.forEach(function (guests) {
    console.log("Aslam u alaikum ".concat(guests, " i would like to invite you to dinner "));
});
var cancelledguest = guest.splice(0, 1, "Muhammad karam", "Faisal khan");
console.log("".concat(cancelledguest, " will not make it to dinner"));
console.log("updated list");
guest.forEach(function (guests) {
    console.log("Aslam u alaikum ".concat(guests, " i would like to invite you to dinner "));
});
