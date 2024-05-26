"use strict";
// Day 12
//Question 34
let pizza = ["pepporoni", "marghirita", "chicken tikka"];
for (let pizzas of pizza) {
    console.log(`I really like ${pizzas} pizza.`);
}
console.log(`I love pizza`);
//Question 35
let animals = ["rabbit", "cat", "spider"];
animals.forEach(animals => {
    console.log(`A ${animals} would make a great pet.`);
});
console.log(`I love animal.`);
// Question 36
function customizeShirts(size, color) {
    console.log(`I would like to have a ${size} size shirt in ${color} color.`);
}
customizeShirts("small", "blue");
