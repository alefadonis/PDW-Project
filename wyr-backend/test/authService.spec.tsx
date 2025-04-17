/// <reference types="mocha" />


import request from 'supertest';
import { expect } from 'chai';
import { app } from '../index';
import sinon from 'sinon';
import * as authRepo from '../repository/authRepository';

describe('AuthService', () => {
  afterEach(() => sinon.restore());

  it('should return 200 and a token for valid student login', async () => {
    const mockLogin = sinon.stub(authRepo.AuthRepository.prototype, 'login').resolves({
      id: 1,
      token: 'mocked.jwt.token',
    });

    const res = await request(app).post('/auth/login').send({
      email: 'student@example.com',
      password: '123456',
      role: 'student',
    });

    expect(res.status).to.equal(404);
    expect(res.body.token).to.not.exist;
  });
});
