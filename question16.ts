/*17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have
 space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names
 remain in your list. Each time you pop a name from your list, print a message to
  that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make
 sure you actually have an empty list at the end of your program.
 */


 let guest=["Muhammad Akbar"," Alp arsalan "," Ahmad shah abali"," Kaloo khan"];


 guest.forEach(guests => {
    console.log(`sorry dear ${guests} but i can only invite two people to dinner`);
    
 });

 console.log(`\n`);
 


 for(let i=1; i<=guest.length; i++){
    console.log(`sorry ${guest.pop()} you are not invited to dinner`);
 }

guest.forEach(element => {
    console.log(`Dear ${element} u are still invited to dinner`);
});

guest.shift();
guest.shift();

console.log(guest[0]);//and for this statement undefined will be printed cause position zero has no elements
guest.forEach(element => {
    //hello will not be printed cause array or list is empty
    console.log("hello");
});