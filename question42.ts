/*Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() 
with each array to show 
that you have one array of the original names and one array with the Great added to each magician’s name. */


let magicians=["Dynamo","David Copperfield","Paul Daniels","David blaine","Derren Brown"];
let copy=[...magicians];
function make_great(Name:string[]): string[]{

    for(let i=0; i<Name.length; i++){
        Name[i]=`Great ${Name[i]}`;
    }

    return Name;
}

copy=make_great(copy);

function show_magicians(Name:string[]){

    for(let i=0; i<Name.length; i++){
        console.log(Name[i]);
    }
}


show_magicians(magicians);
show_magicians(copy);