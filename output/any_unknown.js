"use strict";
//! Any Data Type
//? Which allows a variable to hold values of any type.
//? If you are not sure about data type of variable you can use any.
Object.defineProperty(exports, "__esModule", { value: true });
//! Any Data Type Use
//? When migrating JavaScript code to TypeScript.
//? When dealing with dynamic values from APIs.
//? When working with third-party libraries that lack type definitions.
//! Unknow Data Type
//? The unknown type in TypeScript is similar to any, but it's safer because it forces type checking before performing operations on the value.
var value = "Anil";
value = ["anil"];
value = true;
value = {};
var value1 = "anil";
value1 = 100;
value1 = ["anil"];
value1 = {};
value1 = "Anil Siddhu";
if (typeof value1 == "string") {
    console.log(value1.toUpperCase());
}
