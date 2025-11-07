"use strict";
//? A tuple is a fix-length,
//? Order collection of different types.
//? Each element in a tuple has a specific type.
Object.defineProperty(exports, "__esModule", { value: true });
var emp = ["anil", "sam", "peter"];
var empData = ["anil", 20, true, 100000];
empData.push("noida");
console.log(empData);
//* 🔹 .push() runtime pe chalti hai (TypeScript compile time pe uska control nahi hota)
//* 🔹 .push() bas type union check karti hai (string | number | boolean | ...)
//* 🔹 Tuple internally ek array object hi hota hai — bas TypeScript us par ek fixed pattern/type impose karta hai at compile time
//* 🔹 Aur manual assignment compile-time par check hota hai — isliye wahaan error milta hai
//todo readonly banane se .push() error dega
