import 'reflect-metadata';
import { MethaDataKeys } from './MetaDataKeys';

export function bodyValidator(...keys: string[]) {
  return (target: any, key: string, des: PropertyDescriptor) => {
    Reflect.defineMetadata(MethaDataKeys.bodyValidator, keys, target, key);
  };
}
