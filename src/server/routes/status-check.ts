import * as Router from 'koa-router';

const statusCheck = (ctx: any): void => {
  ctx.body = `It's Alive!`;
};

export const initStatusRoutes = (router: Router) => {
  router.get('/status-check', statusCheck);
};
