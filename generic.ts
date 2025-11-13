//? Generics in TypeScript allow you to creqate resuable components that work with a variety of data types while maintaining type safety

function fruits10<T>(name: T): T {
  return name;
}

function fruitsAny<T>(name: any): any {
  return name;
}

// let onlyFruit = fruitsAny("apple");
// let onlyNum = fruitsAny(100);
// let onlyBool = fruitsAny(true);

// let onlyFruit = fruits10("apple");
// let onlyNum = fruits10(100);
// let onlyBool = fruits10(true);

function Users20<T>(data: T[]): T | undefined {
  return data[0];
}

let userCollection = Users20([10, 20, 21]);
