class EmpInfo {
  _name: string = "Anil";
  _email: string = "anil@test.com";

  get name(): string {
    return "MR. " + this._name;
  }

  set email(val: string) {
    this._email = "emp_" + val;
  }
}

var emp1 = new EmpInfo();

emp1.email = "peter@test.com";
console.log(emp1._email);
