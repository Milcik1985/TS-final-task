export class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log("Animal makes sound");
  }
}

export class SleepingAndWalkingAnimal extends Animal {
  sleep(): void {
    console.log(`${this.name} is sleeping`);
  }

  walk(): void {
    console.log(`${this.name} is walking`);
  }
}

export class JumpingAndRunningAnimal extends Animal {
  jump(): void {
    console.log(`${this.name} is jumping`);
  }

  run(): void {
    console.log(`${this.name} is running`);
  }
}

export class SwimmingAndHuntingAnimal extends Animal {
  swim(): void {
    console.log(`${this.name} is swimming`);
  }

  hunt(): void {
    console.log(`${this.name} is hunting`);
  }
}

export class Zebra extends JumpingAndRunningAnimal {
  maxSpeed: number;
  origin: string;

  constructor(name: string, age: number, maxSpeed: number, origin: string) {
    super(name, age);
    this.maxSpeed = maxSpeed;
    this.origin = origin;
  }

  run(): void {
    console.log(`${this.name}'s max speed is ${this.maxSpeed} km/h`);
  }
}

export class Elephant extends SleepingAndWalkingAnimal {
  weight: number;

  constructor(name: string, age: number, weight: number) {
    super(name, age);
    this.weight = weight;
  }

  weightOfElephant(): void {
    console.log(`${this.name}'s average weight is ${this.weight} tonns`);
  }
}

export class Tiger extends JumpingAndRunningAnimal {
  isOutside: boolean;

  constructor(name: string, age: number, isOutside: boolean) {
    super(name, age);
    this.isOutside = isOutside;
  }

  status(): void {
    console.log(
      `${this.name} is ${this.isOutside ? "outside" : "inside"} the cage`
    );
  }
}

export class Animals {
  private animals: Animal[] = [];

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  getAnimals(): Animal[] {
    return this.animals;
  }
}
