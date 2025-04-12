import chai from 'chai';
import chaiHttp, { request } from 'chai-http';
import { app }  from '../index';
import sinon from 'sinon';
import { ProfessorRepository } from '../repository/ProfessorRepository';

chai.use(chaiHttp);
const { expect } = chai;

describe('ProfessorService', () => {
  it('should create a new professor', async () => {
    sinon.stub(ProfessorRepository.prototype, 'getProfessorByEmail').resolves(null);
    sinon.stub(ProfessorRepository.prototype, 'createNewProfessor').resolves({
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'hashed_password',
    });

    const res = await request.execute(app).post('/professor').send({
      data: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: '123456',
      },
    });

    expect(res.status).to.equal(201);
    expect(res.body.firstName).to.equal('John');

    sinon.restore();
  });

  it('should return all professors', async () => {
    sinon.stub(ProfessorRepository.prototype, 'getAllProfessors').resolves([
      {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        password: 'hashed_password',
      },
    ]);

    const res = await request.execute(app).get('/professor/all');
    expect(res.status).to.equal(200);
    expect(res.body.length).to.be.greaterThan(0);

    sinon.restore();
  });
});
