"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmpInfo {
    _name = "Anil";
    _email = "anil@test.com";
    get name() {
        return "MR. " + this._name;
    }
    set email(val) {
        this._email = "emp_" + val;
    }
}
var emp1 = new EmpInfo();
emp1.email = "peter@test.com";
console.log(emp1._email);
