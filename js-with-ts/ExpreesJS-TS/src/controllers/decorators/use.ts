import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MethaDataKeys } from './MetaDataKeys';

export function use(middleware: RequestHandler) {
  return (target: any, key: string, des: PropertyDescriptor) => {
    const middlewares =
      Reflect.getMetadata(MethaDataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MethaDataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
