"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function create_car(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const mycar = create_car("Toyota Indus", "Corolla X", { color: "Black", year: "2024" });
console.log(mycar);
