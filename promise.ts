interface resultType {
  name: string;
  id: number;
  email: string;
}

function complexLogic(): Promise<resultType> {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved({
        name: "anil",
        id: 10,
        email: "anil@codestepbystep",
      });
    }, 2000);
  });
}

complexLogic().then((data: resultType) => {
  console.log(data);
});

// function complexLogic(): Promise<string> {
//   return new Promise((resolved) => {
//     setTimeout(() => {
//       resolved("result is here");
//     }, 2000);
//   });
// }

// complexLogic().then((data: string) => {
//   console.log(data);
// });
