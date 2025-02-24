class StudentCreate {
  enrollmentCode: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(enrollmentCode: string, firstName: string, lastName: string, email: string, password: string) {
    this.enrollmentCode = enrollmentCode;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

class Student {
  id: number;
  enrollmentCode: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(id: number, enrollmentCode: string, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.enrollmentCode = enrollmentCode;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

export { Student, StudentCreate };