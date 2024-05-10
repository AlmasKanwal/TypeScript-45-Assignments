"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy The Sandwich!");
}
// Call teh function 3 times using different number of arguments 
makeSandwich("Chicken", "Full Fat Yogurt", "Red Chilli Powder", "Turmeric Powder", "Coriander Powder", "Salt", "Garlic Paste", "Ginger Paste", "Lemons");
makeSandwich("Mayonnaise", "Bread", "Butter", "Salt+Pepper", "Carrot", "Cabbage");
makeSandwich("Egg", "Cheese", "Tomato", "Onion");
