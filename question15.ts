
let guest=["Muhammad Akbar"," Alp arsalan "," Ahmad shah abali"," Kaloo khan"];


guest.forEach((guests)=>{
 console.log(`hello ${guests} i have found a bigger dining table and will be inviting more people`);
});

guest.unshift("Faisal khan");
guest.splice(3,0,"Naveed khan");

guest.push("Muhammad karam");
console.log(`\n`);

guest.forEach((guests)=>{
    console.log(`hello ${guests} you all are invited to dinner`);
   });

