//! Union Types

//? What is Union Types.
//? Use union type with variable data type.
//? Use union type with function return type.
//? Use union type with function params type.
//? Type check with Union Type.

var studentData: string | number | [] = "Anil";

studentData = 9999;

studentData = [];

function fruitsData(): string | string[] | number {
  var item = 1;
  if (item > 1) {
    return ["apple", "banana"];
  } else {
    return "Apple";
  }
}

console.log(fruitsData());

function studentInfo(name: string | number | boolean) {
  if (typeof name == "string") {
    return "student name is " + name;
  }

  if (typeof name == "number") {
    return "student age is " + name;
  }
}
studentInfo("Anil siddhu");
studentInfo(999);
