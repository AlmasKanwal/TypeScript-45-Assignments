// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Define Variables
let pizza = "pizza";
let uppercasePizza = "PIZZA";
let nine = 9;
let ten = 10;
let junkFood = ["pizza", "sandwich", "burger"];

// Tests for equality and inequality with strings
console.log("Is pizza is equal to pizza?");
console.log(pizza == pizza);

console.log("\nIs pizza is not equal to pizza?");
console.log(pizza != pizza);

// Tests using the lower case function
console.log("\nIs PIZZA is equal to pizza after converting to lowercase?");
console.log(uppercasePizza.toLowerCase() == "pizza"); 

console.log("\nIs PIZZA is not equal to pizza after converting to lowercase?");
console.log(uppercasePizza.toLowerCase() != "pizza"); 

// Numerical Tests
// Equal to
console.log("\nIs nine is equal to ten?");
console.log(nine == ten);

// Not Equal to
console.log("\nIs nine is not equal to ten?");
console.log(nine != ten);

// Greater than
console.log("\nIS nine is greater than zero?");
console.log(9 > 0);

// Less than
console.log("\nIs ten is ten is less than nine");
console.log(ten < 9);

// Greater than or Equal to
console.log("\nIs Ten is greater than or equal to 9");
console.log(ten >= 9);

// Less than or Equal to
console.log("\nIs ten is less than or equal to 10");
console.log(10 <= nine);

// Tests using "and" and "or" operators
// Using && (and)
console.log("\nnine is not equal to 10 and ten is greater than 9");
console.log(nine != 10 && ten > 9);

console.log("\nnine is not equal to 10 and ten is greater than 9");
console.log(nine != 10 && ten > 19);

// Using || (OR)
console.log("\n 9 is greater than 50 OR 10 is equal to 10");
console.log(9 > 50 || 10 == 10);

console.log("\n 9 is greater than 50 OR 10 is not equal to 10");
console.log(9 > 50 || 10 != 10);

// Test whether an item is in a array
console.log("\nIs burger include in a array");
console.log(junkFood.includes("burger"));

// Test whether an item is not in a array
console.log("\nIs burger not include in a array");
console.log(!junkFood.includes("burger"));