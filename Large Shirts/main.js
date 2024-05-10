"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Large", printMessage = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Default message
make_shirt();
// function with medium size and default message
make_shirt("Medium");
// function with small size and different message
make_shirt("Small", "I love JavaScript");
