/// <reference types="mocha" />

import request from 'supertest';
import { expect } from 'chai';
import { app } from '../index';
import sinon from 'sinon';
import { StudentRepository } from '../repository/StudentRepository';

describe('StudentService', () => {
  afterEach(() => sinon.restore());

  it('should create a new student', async () => {
    sinon.stub(StudentRepository.prototype, 'getStudentByEmail').resolves(null);
    sinon.stub(StudentRepository.prototype, 'createNewStudent').resolves({
      id: 1,
      enrollmentCode: '1',
      firstName: 'Tom',
      lastName: 'Hanks',
      email: 'tom@example.com',
    });

    const res = await request(app).post('/student').send({
      data: {
        enrollmentCode: '123ABC',
        firstName: 'Tom',
        lastName: 'Hanks',
        email: 'tom@example.com',
        password: 'password123',
      },
    });

    expect(res.status).to.equal(201);
  });

  it('should return all students', async () => {
    sinon.stub(StudentRepository.prototype, 'getAllStudents').resolves([
      {
        id: 1,
        enrollmentCode: '1',
        firstName: 'Tom',
        lastName: 'Hanks',
        email: 'tom@example.com',
      },
    ]);

    const res = await request(app).get('/student/all');
    expect(res.status).to.equal(200);
    expect(res.body.length).to.be.greaterThan(0);
  });
});
