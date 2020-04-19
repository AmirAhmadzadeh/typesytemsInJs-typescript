import 'reflect-metadata';
import { Methods } from './Methods';
import { MethaDataKeys } from './MetaDataKeys';

// Search for this problem Soon !!!
export function get(path: string) {
  return function (target: any, key: string, des: PropertyDescriptor) {
    Reflect.defineMetadata(MethaDataKeys.path, path, target, key);
    Reflect.defineMetadata(MethaDataKeys.method, Methods.get, target, path);
  };
}
export function post(path: string) {
  return function (target: any, key: string, des: PropertyDescriptor) {
    Reflect.defineMetadata(MethaDataKeys.path, path, target, key);
    Reflect.defineMetadata(MethaDataKeys.method, Methods.post, target, path);
  };
}

// function routeBinder(method: string) {
//   return function (path: string) {
//     return function (target: any, key: string, des: PropertyDecorator) {
//       Reflect.defineMetadata(MethaDataKeys.path, path, target, key);
//       Reflect.defineMetadata(MethaDataKeys.method, method, target, path);
//     };
//   };
// }
// // export const get = routeBinder(Methods.get);
// // export const post = routeBinder(Methods.post);
// export const del = routeBinder(Methods.del);
// export const put = routeBinder(Methods.put);
// export const patch = routeBinder(Methods.patch);
