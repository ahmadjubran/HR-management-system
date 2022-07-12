"use strict";

const allEmployee = [];
const perentEl = document.getElementById("cards");

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
  return ((noTaxSalary * 100) / 107.5).toFixed(0);
};

Employee.prototype.printEmployeeCard = function () {
  // 1. create Element
  const divEl = document.createElement("div");
  divEl.classList.add("card");
  const img = document.createElement("img");
  divEl.classList.add("card-img");
  const pEl = document.createElement("p");
  divEl.classList.add("card-text");

  // 2. add content or attributes
  img.src = `${this.image}`;
  pEl.textContent = `Name: ${this.fullName} - ID: ${this.employeeID} \n`;
  pEl.textContent += `Department: ${this.department} - Level: ${this.level} \n`;
  pEl.textContent += `$${this.salary()}`;

  // 3. append to the DOM
  divEl.appendChild(img);
  divEl.appendChild(pEl);
  perentEl.appendChild(divEl);
};

const ghazi = new Employee(
  "Ghazi Samer",
  "Administration",
  "Senior",
  "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Ghazi.jpg?raw=true"
);
const lana = new Employee(
  "Lana Ali",
  "Finance",
  "Senior",
  "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Lana.jpg?raw=true"
);
const tamara = new Employee(
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true"
);
const safi = new Employee(
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Safi.jpg?raw=true"
);
const omar = new Employee(
  "Omar Zaid",
  "Development",
  "Senior",
  "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Omar.jpg?raw=true"
);
const rana = new Employee(
  "Rana Saleh",
  "Development",
  "Junior",
  "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Rana.jpg?raw=true"
);
const hadi = new Employee(
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true"
);

for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].printEmployeeCard();
}
