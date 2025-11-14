//? An index signature in TypeScript allows you to define objects with dynamic keys while specifying the type of their values.

// type userData7Type = {
//   [key: string]: number | string;
// };

// var userData7: userData7Type = {
//   mobile: 999,
//   id: 10,
//   marks: 90,
//   age: 19,
//   semester: 3,
//   name: "anil",
// };

type userData7Type = {
  name: string;
  id: number;
  mobile: number;
  readonly [key: string]: number | string;
};

var userData7: userData7Type = {
  name: "anil",
  mobile: 999,
  id: 10,
  marks: 90,
  age: 19,
  semester: 3,
};
