import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MethaDataKeys } from './MetaDataKeys';
import { RequestHandler, NextFunction, Request, Response } from 'express';

function bodyValidator(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('InValid Request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send('InValid Request');
        return;
      }
    }
    next();
  };
}

export const controller = (routePrefix: string) => {
  const router = AppRouter.getInstance();

  return (target: Function) => {
    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MethaDataKeys.path,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MethaDataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MethaDataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps = Reflect.getMetadata(
        MethaDataKeys.bodyValidator,
        target.prototype,
        key
      );
      const validator = bodyValidator(requiredBodyProps);
      if (path && validator) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
};
