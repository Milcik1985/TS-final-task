import {
  Animal,
  SleepingAndWalkingAnimal,
  JumpingAndRunningAnimal,
  SwimmingAndHuntingAnimal,
  Zebra,
  Elephant,
  Tiger,
  Animals,
} from "./Animal.ts";

import { Employees } from "./Employee.ts";

import { ZooKeeper } from "./Employee.ts";

const giraffe = new Animal("Giraffe", 1);

const cheetah = new JumpingAndRunningAnimal("Cheetah", 5);
cheetah.jump();
cheetah.run();

const hippo = new SwimmingAndHuntingAnimal("Hippo", 2);
hippo.swim();
hippo.hunt();

const monkey = new SleepingAndWalkingAnimal("Monkey", 3);
monkey.sleep();
monkey.walk();

const zebra = new Zebra("Zebra", 4, 64, "Africa");
zebra.jump();
zebra.run();

const elephant = new Elephant("Elephant", 7, 5);
elephant.weightOfElephant();
elephant.sleep();
elephant.walk();

const tiger = new Tiger("Tiger", 5, true);
tiger.status();

const zookeeper = new ZooKeeper("John", false, new Date("2024.03.20"));
console.log(zookeeper);
zookeeper.eneterZoo();
zookeeper.leaveZoo();
zookeeper.feedingAnimal("Tiger", "11:30");

const allEmployees = new Employees();

allEmployees.addEmployee(zookeeper);
console.log(allEmployees);
const listofEmployees = allEmployees.getEmployees();
console.log(listofEmployees);

const allAnimals = new Animals();

allAnimals.addAnimal(giraffe);
allAnimals.addAnimal(hippo);
allAnimals.addAnimal(cheetah);
allAnimals.addAnimal(monkey);
allAnimals.addAnimal(elephant);
allAnimals.addAnimal(zebra);
console.log(allAnimals);
const listofAnimals = allAnimals.getAnimals();
console.log(listofAnimals);

const addEmployeeButton = document.getElementById(
  "add-employee"
) as HTMLButtonElement;
const formContainer = document.getElementById(
  "form-container"
) as HTMLDivElement;

const saveEmployeesToLocalStorage = (employees) => {
  localStorage.setItem("employees", JSON.stringify(employees));
};

const getEmployeesFromLocalStorage = () => {
  const employeesString = localStorage.getItem("employees");
  return employeesString ? JSON.parse(employeesString) : [];
};

addEmployeeButton.addEventListener("click", () => {
  const nameInput = document.createElement("input") as HTMLInputElement;
  nameInput.placeholder = "Employee Name";
  nameInput.type = "text";

  const isAtTheZooInput = document.createElement("select") as HTMLSelectElement;
  isAtTheZooInput.id = "is-at-the-zoo";
  const optionTrue = document.createElement("option");
  optionTrue.value = "true";
  optionTrue.textContent = "Yes";
  const optionFalse = document.createElement("option");
  optionFalse.value = "false";
  optionFalse.textContent = "No";

  isAtTheZooInput.append(optionTrue);
  isAtTheZooInput.append(optionFalse);

  const isAtTheZooInputLabel = document.createElement("label");
  isAtTheZooInputLabel.textContent = "Is Employee at the Zoo?";
  isAtTheZooInputLabel.setAttribute("for", "is-at-the-zoo");

  const safetyTrainingDate = document.createElement(
    "input"
  ) as HTMLInputElement;
  safetyTrainingDate.id = "Safety Training Date";
  safetyTrainingDate.type = "date";
  safetyTrainingDate.type = "date";

  const safetyTrainingDateLabel = document.createElement("label");
  safetyTrainingDateLabel.textContent = "Safety Training Till The Date";
  safetyTrainingDateLabel.setAttribute("for", "safety-training-date");

  formContainer.append(nameInput);
  formContainer.append(isAtTheZooInputLabel);
  formContainer.append(isAtTheZooInput);
  formContainer.append(safetyTrainingDateLabel);
  formContainer.append(safetyTrainingDate);

  const submitButton = document.createElement("button") as HTMLButtonElement;
  submitButton.textContent = "SUBMIT";
  submitButton.classList.add("btn");
  formContainer.append(submitButton);

  submitButton.addEventListener("click", () => {
    if (
      nameInput.value === "" ||
      isAtTheZooInput.value === "" ||
      safetyTrainingDate.value === ""
    ) {
      alert("Please fill in all the fields!");
      return;
    }
    const infoContainer = document.createElement("div") as HTMLDivElement;
    infoContainer.classList.add("container");
    const containerWrapper = document.getElementById(
      "container-wrapper"
    ) as HTMLDivElement;
    containerWrapper.append(infoContainer);
    const employeeNameInfo = document.createElement("div");
    employeeNameInfo.innerText = nameInput.value;
    infoContainer.append(employeeNameInfo);
    const isAtZooInfo = document.createElement("div") as HTMLDivElement;
    if (
      isAtTheZooInput.options[isAtTheZooInput.selectedIndex].value === "true"
    ) {
      isAtZooInfo.innerText = "Employee is at the Zoo";
    } else {
      isAtZooInfo.innerText = "Employee is not at the Zoo";
    }
    isAtTheZooInput.value;
    infoContainer.append(isAtZooInfo);
    const safetyTrainingInfo = document.createElement("div") as HTMLDivElement;
    safetyTrainingInfo.innerText = `Safety Trainings End Date: ${safetyTrainingDate.value}`;
    infoContainer.append(safetyTrainingInfo);

    if (!document.querySelector(".message")) {
      const messageWrapper = document.createElement("div") as HTMLDivElement;
      messageWrapper.classList.add("message");
      messageWrapper.innerText = "This Data Was Successfully Added:";
      formContainer.append(messageWrapper);
    }

    const isEmployeeAtZoo: boolean =
      isAtTheZooInput.value === "true" || isAtTheZooInput.value === "false";

    const newEmployee = new ZooKeeper(
      nameInput.value,
      isEmployeeAtZoo,
      new Date(safetyTrainingDate.value)
    );

    allEmployees.addEmployee(newEmployee);
    console.log(allEmployees.getEmployees());

    nameInput.value = "";
    isAtTheZooInput.value = "";
    safetyTrainingDate.value = "";

    saveEmployeesToLocalStorage(allEmployees.getEmployees());
  });
});
console.log(getEmployeesFromLocalStorage());
