"use strict";
//? What is Symbol Data Type
//? How to use it
//? Example
//? Where we can use it
//? Interview Questions
Object.defineProperty(exports, "__esModule", { value: true });
var sym = Symbol();
var sym2 = Symbol();
var sym3 = Symbol("abc");
var sym4 = Symbol("abc");
// console.log(sym == sym2);
// console.log(sym3);
// console.log(sym4);
// console.log(sym3 == sym4);
const dId = Symbol("id");
const obj = {
    [dId]: 100,
    name: "anil siddhu",
};
console.log(obj[dId]);
