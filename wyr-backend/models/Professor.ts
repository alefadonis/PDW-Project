class ProfessorCreate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

class Professor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string | null | undefined;

  constructor(id: number, firstName: string, lastName: string, email: string, password?:string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

export { ProfessorCreate, Professor };
