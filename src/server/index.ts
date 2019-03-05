import * as dotenv from 'dotenv';
dotenv.config();

import { createServer } from './lib/server';

try {
  const port = process.env.PORT || 3333;
  createServer().listen(port, () => {
    const mode = process.env.NODE_ENV || 'development';
    console.log(`Server listening on ${port} in ${mode} mode`);
  });
} catch (err) {
  console.error('Error while starting up server', err);
  process.exit(1);
}
