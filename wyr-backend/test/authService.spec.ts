import chai from 'chai';
import chaiHttp, { request } from 'chai-http';
import { app } from '../index' // Make sure your Express app is exported from here
import sinon from 'sinon';
import * as authRepo from '../repository/authRepository';

chai.use(chaiHttp);
const { expect } = chai;

describe('AuthService', () => {
  it('should return 200 and a token for valid student login', async () => {
    const mockLogin = sinon.stub(authRepo.AuthRepository.prototype, 'login').resolves({
      id: 1,
      token: 'mocked.jwt.token',
    });

    const res = await request.execute(app).post('/auth/login').send({
      email: 'student@example.com',
      password: '123456',
      role: 'student',
    });

    expect(res.status).to.equal(200);
    expect(res.body.token).to.exist;
    mockLogin.restore();
  });
});
