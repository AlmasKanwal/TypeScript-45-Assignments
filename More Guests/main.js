// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestArray = ["Sawera", "Ayesha", "Amna"];
var canNotAttend = "Sawera";
// console.log(`${canNotAttend} can't come for dinner.`);
var newGuest = "Iqra";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
// guestArray.map((guest)=> console.log(`Hello,${guest} you are invited to dinner.`));
console.log("Welcome we found a bigger dinner table!");
guestArray.unshift("Almas");
console.log(guestArray);
var middleGuest = "Javeria";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
guestArray.push("Salena");
console.log(guestArray);
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited for dinner!")); });
