export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

class Animal {
  constructor(
    public name: string = "lion",
    public ability: string = "running"
  ) {}

  get getName(): string {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }
}

export const animal = new Animal();
console.log("animal:",animal)
