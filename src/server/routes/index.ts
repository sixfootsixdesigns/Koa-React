import * as Router from 'koa-router';
import { initStatusRoutes } from './status-check';

export const initRoutes = (rootRouter: Router) => {
  initStatusRoutes(rootRouter);

  const apiRouter = new Router();

  rootRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods());
};
