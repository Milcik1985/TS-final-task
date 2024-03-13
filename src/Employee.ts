export abstract class Employee {
  employeeName: string;
  isEmployeeAtZoo: boolean;
  safetyTrainingCompletionDate: Date;

  constructor(
    employeeName: string,
    isEmployeeAtZoo: boolean,
    safetyTrainingCompletionDate: Date
  ) {
    this.employeeName = employeeName;
    this.isEmployeeAtZoo = isEmployeeAtZoo;
    this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
  }
  abstract eneterZoo(): void;

  abstract leaveZoo(): void;

  takeSafetyTrainings(): void {
    console.log(
      `${this.employeeName} takes safety trainings till ${this.safetyTrainingCompletionDate}`
    );
  }
}

export class ZooKeeper extends Employee {
  constructor(
    employeeName: string,
    isEmployeeAtZoo: boolean,
    safetyTrainingCompletionDate: Date
  ) {
    super(employeeName, isEmployeeAtZoo, safetyTrainingCompletionDate);
  }

  eneterZoo(): void {
    console.log(`${this.employeeName} enters the Zoo`);
  }

  leaveZoo(): void {
    console.log(`${this.employeeName} leaves the Zoo`);
  }

  takeSafetyTrainings(): void {
    console.log(
      `${this.employeeName} takes safety trainings till ${this.safetyTrainingCompletionDate}`
    );
  }

  feedingAnimal(animal: string, currentTime: string): void {
    console.log(`${this.employeeName} fed ${animal} at ${currentTime}`);
  }
}

export class Employees {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}
