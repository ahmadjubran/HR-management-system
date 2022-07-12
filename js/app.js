"use strict";

const allEmployee = [];
let countID = 1000;
function Employee(fullName, department, level, image) {
  // this.employeeID = employeeID;
  this.employeeID = countID++;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.image = image;

  allEmployee.push(this);
}

Employee.prototype.salary = function () {
  let noTaxSalary;

  let min, max;
  if (this.level === "Senior") {
    min = 1500;
    max = 2000;
  } else if (this.level === "Mid-Senior") {
    min = 1000;
    max = 1500;
  } else if (this.level === "Junior") {
    min = 500;
    max = 1000;
  }

  noTaxSalary = Math.floor(Math.random() * (max - min + 1) + min);
  return (noTaxSalary * 100) / 107.5;
};

document.write(`<p class = "salary">Salary with the Tax ( Net Salary )</p>`);
Employee.prototype.printSalary = function () {
  document.write(`<p class = "salary">${this.fullName}: ${this.salary()}</p>`);
};

const ghazi = new Employee(
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./../assets/logo.png"
);
const lana = new Employee(
  "Lana Ali",
  "Finance",
  "Senior",
  "./../assets/logo.png"
);
const tamara = new Employee(
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./../assets/logo.png"
);
const safi = new Employee(
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./../assets/logo.png"
);
const omar = new Employee(
  "Omar Zaid",
  "Development",
  "Senior",
  "./../assets/logo.png"
);
const rana = new Employee(
  "Rana Saleh",
  "Development",
  "Junior",
  "./../assets/logo.png"
);
const hadi = new Employee(
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./../assets/logo.png"
);

for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].printSalary();
}
