let guest=["Muhammad Akbar"," Alp arsalan "," Ahmad shah abali"," Kaloo khan"];
console.log("initail list");
guest.forEach((guests)=>{
    console.log(`Aslam u alaikum ${guests} i would like to invite you to dinner `);
});


let cancelledguest=guest.splice(0,1,"Muhammad karam","Faisal khan");

console.log(`${cancelledguest} will not make it to dinner`);

console.log("updated list");
guest.forEach((guests)=>{
    console.log(`Aslam u alaikum ${guests} i would like to invite you to dinner `);
});