/*37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

function make_shirt(size:string="Large",message:string="i love javascript"){

console.log(`The size of tshirt is ${size}`);
console.log(`The message on tshirt is ${message}`);

}


make_shirt();
make_shirt("medium");
make_shirt("Extra Large","this is just wasting time");