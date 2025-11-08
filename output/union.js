"use strict";
//! Union Types
Object.defineProperty(exports, "__esModule", { value: true });
//? What is Union Types.
//? Use union type with variable data type.
//? Use union type with function return type.
//? Use union type with function params type.
//? Type check with Union Type.
var studentData = "Anil";
studentData = 9999;
studentData = [];
function fruitsData() {
    var item = 1;
    if (item > 1) {
        return ["apple", "banana"];
    }
    else {
        return "Apple";
    }
}
console.log(fruitsData());
function studentInfo(name) {
    if (typeof name == "string") {
        return "student name is " + name;
    }
    if (typeof name == "number") {
        return "student age is " + name;
    }
}
studentInfo("Anil siddhu");
studentInfo(999);
