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

import { Employee, Employees } from "./Employee.ts";

import { ZooKeeper } from "./Employee.ts";

import { Logger } from "./Logger.ts";

const logger = Logger.getInstance();

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

const zookeeper2 = new ZooKeeper("Mary", true, new Date("2024.03.21."));
zookeeper2.feedingAnimal("Hippo", "10:15");

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

const saveEmployeesToLocalStorage = (employees: Employee[]) => {
  localStorage.setItem("employees", JSON.stringify(employees));
};

const getEmployeesFromLocalStorage = () => {
  const employeesString = localStorage.getItem("employees");
  return employeesString ? JSON.parse(employeesString) : [];
};

addEmployeeButton.addEventListener("click", () => {
  logger.log("Employee Button is clicked");
  formContainer.innerHTML = "";
  containerWrapper.innerHTML = "";
  animalsContainer.innerHTML = "";
  employeesContainer.innerHTML = "";
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

const addAnimalButton = document.getElementById(
  "add-animal"
) as HTMLButtonElement;

const saveAnimalToLocalStorage = (animals: Animal[]) => {
  const plainAnimals = animals.map((animal) => ({
    name: animal.name,
    age: animal.age,
  }));
  localStorage.setItem("animals", JSON.stringify(plainAnimals));
};

const getAnimalsFromLocalStorage = () => {
  const animalsString = localStorage.getItem("animals");
  if (animalsString) {
    const plainAnimals = JSON.parse(animalsString);
    return plainAnimals.map(
      (animal: { name: string; age: number }) =>
        new Animal(animal.name, animal.age)
    );
  }
  return [];
};

const containerWrapper = document.getElementById(
  "container-wrapper"
) as HTMLDivElement;

addAnimalButton.addEventListener("click", () => {
  logger.log("Adding Animal Button is clicked");
  formContainer.innerHTML = "";
  containerWrapper.innerHTML = "";
  animalsContainer.innerHTML = "";
  employeesContainer.innerHTML = "";
  const animalNameInput = document.createElement("input") as HTMLInputElement;
  animalNameInput.placeholder = "Animal Name";
  animalNameInput.type = "text";

  const animalAgeInput = document.createElement("input") as HTMLInputElement;
  animalAgeInput.placeholder = "Animal Age";
  animalAgeInput.type = "number";
  animalAgeInput.min = "1";
  animalAgeInput.max = "100";
  animalAgeInput.pattern = "[1-9][0-9]?|100";
  animalAgeInput.title = "Please enter age between 1-100";

  const sleepingAndWalkingCheckbox = document.createElement(
    "input"
  ) as HTMLInputElement;
  sleepingAndWalkingCheckbox.type = "checkbox";
  sleepingAndWalkingCheckbox.id = "sleeping-walking-checkbox";
  const labelForSleepingAndWalking = document.createElement("label");
  labelForSleepingAndWalking.textContent = "Sleeping and Walking Animal";
  labelForSleepingAndWalking.setAttribute("for", "sleeping-walking-checkbox");

  const swimmingAndHuntingCheckbox = document.createElement(
    "input"
  ) as HTMLInputElement;
  swimmingAndHuntingCheckbox.type = "checkbox";
  swimmingAndHuntingCheckbox.id = "swimming-hunting-checkbox";
  const labelForSwimmingAndHunting = document.createElement("label");
  labelForSwimmingAndHunting.textContent = "Swimming and Hunting Animal";
  labelForSwimmingAndHunting.setAttribute("for", "swimming-hunting-checkbox");

  const jumppingAndRunningCheckbox = document.createElement(
    "input"
  ) as HTMLInputElement;
  jumppingAndRunningCheckbox.type = "checkbox";
  jumppingAndRunningCheckbox.id = "jumping-running-checkbox";
  const labelForJumpingAndRunning = document.createElement("label");
  labelForJumpingAndRunning.textContent = "Jumping and Running Animal";
  labelForJumpingAndRunning.setAttribute("for", "jumping-running-checkbox");

  formContainer.append(animalNameInput);
  formContainer.append(animalAgeInput);

  const checkboxContainer = document.createElement("div") as HTMLDivElement;
  checkboxContainer.classList.add("checkbox-container");
  formContainer.append(checkboxContainer);

  checkboxContainer.append(sleepingAndWalkingCheckbox);
  checkboxContainer.append(labelForSleepingAndWalking);
  checkboxContainer.append(swimmingAndHuntingCheckbox);
  checkboxContainer.append(labelForSwimmingAndHunting);
  checkboxContainer.append(jumppingAndRunningCheckbox);
  checkboxContainer.append(labelForJumpingAndRunning);

  const submitButton = document.createElement("button") as HTMLButtonElement;
  submitButton.textContent = "SUBMIT";
  submitButton.classList.add("btn");
  formContainer.append(submitButton);

  submitButton.addEventListener("click", () => {
    if (animalNameInput.value === "" || animalAgeInput.value === "") {
      alert("Please fill in all the fields!");
      return;
    }
    const infoContainer = document.createElement("div") as HTMLDivElement;
    infoContainer.classList.add("container");

    containerWrapper.append(infoContainer);
    const animalNameInfo = document.createElement("div");
    animalNameInfo.innerText = animalNameInput.value;
    infoContainer.append(animalNameInfo);
    const animalAgeInfo = document.createElement("div");
    animalAgeInfo.innerText = `Age: ${animalAgeInput.value}`;
    infoContainer.append(animalAgeInfo);

    let newAnimal;

    const sleepingAndWalkingChecked = sleepingAndWalkingCheckbox.checked;
    const swimmingAndHuntingChecked = swimmingAndHuntingCheckbox.checked;
    const jumpingAndRunningChecked = jumppingAndRunningCheckbox.checked;

    const animalAge = parseInt(animalAgeInput.value);

    if (sleepingAndWalkingChecked) {
      newAnimal = new SleepingAndWalkingAnimal(
        animalNameInput.value,
        animalAge
      );
    } else if (swimmingAndHuntingChecked) {
      newAnimal = new SwimmingAndHuntingAnimal(
        animalNameInput.value,
        animalAge
      );
    } else if (jumpingAndRunningChecked) {
      newAnimal = new JumpingAndRunningAnimal(animalNameInput.value, animalAge);
    } else {
      newAnimal = new Animal(animalNameInput.value, animalAge);
    }

    if (!document.querySelector(".message")) {
      const messageWrapper = document.createElement("div") as HTMLDivElement;
      messageWrapper.classList.add("message");
      messageWrapper.innerText = "This Data Was Successfully Added:";
      formContainer.append(messageWrapper);
    }

    allAnimals.addAnimal(newAnimal);
    console.log(allAnimals.getAnimals());

    animalNameInput.value = "";
    animalAgeInput.value = "";

    saveAnimalToLocalStorage(allAnimals.getAnimals());
  });
});

console.log(getAnimalsFromLocalStorage());

const listOfAnimals: Animal[] = [];
const animalsContainer = document.getElementById(
  "list-of-all-animals"
) as HTMLDivElement;

const showAllAnimalsButton = document.getElementById(
  "get-all-animals"
) as HTMLButtonElement;

function clearContainer() {
  containerWrapper.innerHTML = "";
  formContainer.innerHTML = "";
  animalsContainer.innerHTML = "";
  employeesContainer.innerHTML = "";
}

function showAllAnimals() {
  animalsContainer.innerHTML = "";

  const animalsString = localStorage.getItem("animals");
  if (animalsString) {
    const animals: Animal[] = JSON.parse(animalsString);
    animals.forEach((animal) => {
      const animalDiv = document.createElement("div") as HTMLDivElement;
      animalDiv.textContent = `${animal.name}, Age: ${animal.age}`;
      animalsContainer.append(animalDiv);
    });
  }
}

showAllAnimalsButton.addEventListener("click", () => {
  logger.log("Show All Animals Button is clicked");
  clearContainer();
  showAllAnimals();
});
console.log(listOfAnimals);

const listOfEmployees: Employee[] = [];
const employeesContainer = document.getElementById(
  "list-of-all-employees"
) as HTMLDivElement;

const showAllEmployeesButton = document.getElementById(
  "get-all-employees"
) as HTMLButtonElement;

function showAllEmployees() {
  employeesContainer.innerHTML = "";

  const employeesString = localStorage.getItem("employees");
  if (employeesString) {
    const employees: Employee[] = JSON.parse(employeesString);
    employees.forEach((employee) => {
      const employeeDiv = document.createElement("div") as HTMLDivElement;
      const isAtTheZooText = employee.isEmployeeAtZoo
        ? "Employee is at the Zoo"
        : "Employee is not at the Zoo";
      employeeDiv.textContent = `${employee.employeeName}, ${isAtTheZooText}, Safety Training End Date: ${employee.safetyTrainingCompletionDate}`;
      employeesContainer.append(employeeDiv);
    });
  }
}

showAllEmployeesButton.addEventListener("click", () => {
  logger.log("Show All Employees Button is clicked");
  clearContainer();
  showAllEmployees();
});
console.log(listOfEmployees);
