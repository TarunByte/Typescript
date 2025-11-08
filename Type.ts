//? Define Custom data type for Object, function etc

type DataType = { name: string; email: string };

// type a = {
//   name: string;
// };
// type b = {
//   email: string;
// };

interface a {
  name: string;
}

interface b extends a {
  email: string;
}

var empData1: DataType = {
  name: "anil",
  email: "anil@test.com",
};

var studentData1: DataType = {
  name: "sam",
  email: "sam@college.com",
};
