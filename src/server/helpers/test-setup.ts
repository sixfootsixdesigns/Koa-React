import { createServer } from '../lib/server';
import * as http from 'http';
let app: http.Server | null;

const getTestApp = async (): Promise<http.Server> => {
  if (!app) {
    app = createServer().listen();
  }
  return app;
};

const closeApp = async () => {
  if (app) {
    app.close();
  }
  app = null;
};

export { getTestApp, closeApp };
