import * as supertest from 'supertest';
import * as http from 'http';
import { getTestApp, closeApp } from '../helpers/test-setup';

describe('GET /status-check', () => {
  let app: http.Server;

  beforeAll(async () => {
    app = await getTestApp();
  });

  afterAll(() => {
    closeApp();
  });

  it('should respond that it is Alive', async () => {
    await supertest(app)
      .get('/status-check')
      .expect(200, `It's Alive!`);
  });
});
