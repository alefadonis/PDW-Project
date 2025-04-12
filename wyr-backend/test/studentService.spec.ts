import chai from 'chai';
import chaiHttp, { request } from 'chai-http';
import { app } from '../index';
import sinon from 'sinon';
import { StudentRepository } from '../repository/StudentRepository';

chai.use(chaiHttp);
const { expect } = chai;

describe('StudentService', () => {
  it('should create a new student', async () => {
    sinon.stub(StudentRepository.prototype, 'getStudentByEmail').resolves(null);
    sinon.stub(StudentRepository.prototype, 'createNewStudent').resolves({
      id: 1,
      enrollmentCode: '1',
      firstName: 'Tom',
      lastName: 'Hanks',
      email: 'tom@example.com',
    });

    const res = await request.execute(app).post('/student').send({
      data: {
        enrollmentCode: '123ABC',
        firstName: 'Tom',
        lastName: 'Hanks',
        email: 'tom@example.com',
        password: 'password123',
      },
    });

    expect(res.status).to.equal(201);
    sinon.restore();
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

    const res = await request.execute(app).get('/student/all');
    expect(res.status).to.equal(200);
    expect(res.body.length).to.be.greaterThan(0);

    sinon.restore();
  });
});
