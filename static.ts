class Company {
  static name: string = "Google";
  location = "Noida";
  static getName() {
    return "gurgaon";
  }
}

var c1 = new Company();
// console.log(c1.name);
// console.log(Company.name);
console.log(Company.getName());
