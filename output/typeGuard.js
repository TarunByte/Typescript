"use strict";
//? A Type Guard in TypeScript is a technique used to narrow down the type of a variable withing a conditional block
Object.defineProperty(exports, "__esModule", { value: true });
//? typeof
//? instanceof
//? Custom Type
//* Why Use Type Guards?
//? Provides better type safety
//? Apply conditions with data type
//? Helps TypeScript infer types automatically
let userData20 = "Anil sidhu";
var userData22;
userData22 = {
    name: "anil siddhu",
    city: "gurgaon",
};
var userData21 = {
    id: 100,
    email: "anil@test.com",
};
function checkUserInfo(data) {
    if (data.name != undefined) {
        console.log("this is a user data");
    }
    else {
        console.log("this is a user info");
    }
}
checkUserInfo(userData22);
