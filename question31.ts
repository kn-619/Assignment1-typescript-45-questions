/*32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need
 to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */


let usernames=["Faisal","khan","nawaz","Mehmood","abbas"];
let new_users=["FAISAL","safi","tauseef","MEHMOOD","maaz"];

let check:Boolean=true;
for(let i=0; i<new_users.length; i++){
    check=true;

   for(let j=0; j<usernames.length; j++){
    if(new_users[i].toLowerCase()==usernames[j].toLowerCase()){
      check=false;
    }
   }

   if(check==false){
    console.log(`sorry username ${new_users[i]} already exist please enter a new name`);
   }else if(check){
    console.log(`username ${new_users[i]} is available for use`);
    
   }

}