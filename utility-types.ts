//? In TypeScript, Utility Types are built-in types that help transform or manipulate other types in a convenient way.

interface CollegeType {
  name: string;
  location: string;
  students: number;
  branch?: number;
}

// let CollegeData3: Partial<CollegeType> = {
//   name: "iit delhi",
//   location: "delhi",
//   students: 600,
// };

function getCollegeData(data: Partial<CollegeType>) {
  return data;
}

getCollegeData({ name: "iit bombay", location: "bombay" });

function getCollegeData2(data: Required<CollegeType>) {
  return data;
}

getCollegeData2({
  name: "iit bombay",
  location: "bombay",
  students: 30,
  branch: 3,
});

var CollegeData4: Readonly<CollegeType> = {
  name: "iit delhi",
  location: "delhi",
  students: 400,
  branch: 5,
};

// CollegeData4.name = "iit gurgaon";

var CollegeData5: Pick<CollegeType, "name" | "location"> = {
  name: "iit delhi",
  location: "delhi",
};
