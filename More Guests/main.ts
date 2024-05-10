// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestArray: string[] = ["Sawera","Ayesha","Amna"];

let canNotAttend: string = "Sawera";
// console.log(`${canNotAttend} can't come for dinner.`);

let newGuest: string = "Iqra";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;
// console.log(guestArray);

// guestArray.map((guest)=> console.log(`Hello,${guest} you are invited for dinner.`));

console.log("Welcome we found a bigger dinner table!");

guestArray.unshift("Almas");
// console.log(guestArray);

let middleGuest: string = "Javeria";
let middleIndex = guestArray.length/2
guestArray.splice(middleIndex,0,middleGuest);

// console.log(guestArray);

guestArray.push("Salena");
// console.log(guestArray);

guestArray.map((item)=> console.log(`\nDear ${item} you are invited for dinner!`));