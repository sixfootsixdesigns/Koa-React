import * as cors from '@koa/cors';
import * as http from 'http';
import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import * as compress from 'koa-compress';
import * as helmet from 'koa-helmet';
import * as Router from 'koa-router';
import { corsRules } from '../middleware/cors';
import { initRoutes } from '../routes';
import * as jwt from 'koa-jwt';
import { logger } from '../middleware/logger';
import * as winston from 'winston';
import * as serveStatic from 'koa-static';
import * as path from 'path';

const errorHandler = require('koa-better-error-handler');
const koa404Handler = require('koa-404-handler');
const appRoot = __dirname
  .split(path.sep)
  .slice(0, -1)
  .join(path.sep);

export const createServer = (): http.Server => {
  const app = new Koa();
  const rootRouter = new Router();

  initRoutes(rootRouter);

  // override koa's undocumented error handler
  app.context.onerror = errorHandler;

  app
    // 404 handler
    .use(koa404Handler)

    // Security headers
    .use(helmet())

    // Handle CORS
    .use(
      cors({
        origin: corsRules
      })
    )

    // logging
    .use(logger(winston))

    // handle JWT (you can access the payload from ctx.state.user )
    .use(
      jwt({
        secret: process.env.AUTH_SECRET || ''
      }).unless({
        path: [/^\/status-check/, /^\//]
      })
    )

    // Parses request bodies
    .use(bodyParser())

    // Compress all responses.
    .use(compress())

    // mount rootRouter
    .use(rootRouter.routes())
    .use(rootRouter.allowedMethods())

    .use(serveStatic(path.join(appRoot)));

  const server = http.createServer(app.callback());

  server.on('close', () => {
    // server is closing you can do stuff
  });

  return server;
};
