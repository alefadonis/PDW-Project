class ClassCreate {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Class {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export {ClassCreate, Class}