"use strict";
//? Generics in TypeScript allow you to creqate resuable components that work with a variety of data types while maintaining type safety
Object.defineProperty(exports, "__esModule", { value: true });
function fruits10(name) {
    return name;
}
function fruitsAny(name) {
    return name;
}
// let onlyFruit = fruitsAny("apple");
// let onlyNum = fruitsAny(100);
// let onlyBool = fruitsAny(true);
// let onlyFruit = fruits10("apple");
// let onlyNum = fruits10(100);
// let onlyBool = fruits10(true);
function Users20(data) {
    return data[0];
}
let userCollection = Users20([10, 20, 21]);
