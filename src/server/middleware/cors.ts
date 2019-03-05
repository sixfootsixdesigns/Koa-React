import * as Koa from 'koa';

const isAllowedCorsOrigin = (origin: string) => {
  // origins using regex
  const dynamicOrigins: RegExp[] = [];

  // add additional static origin here
  const allowedOrigins: string[] = [];

  const isAllowedDomain = dynamicOrigins.some(
    domain => origin.match(domain) !== null
  );

  if (isAllowedDomain || allowedOrigins.includes(origin)) {
    return true;
  }

  return false;
};

export const corsRules = (ctx: Koa.Context): any => {
  if (isAllowedCorsOrigin(ctx.headers.origin)) {
    return ctx.headers.origin;
  }
  return false;
};
