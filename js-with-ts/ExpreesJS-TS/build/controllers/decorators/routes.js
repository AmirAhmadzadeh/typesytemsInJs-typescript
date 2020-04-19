"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetaDataKeys_1 = require("./MetaDataKeys");
// Search for this problem Soon !!!
function get(path) {
    return function (target, key, des) {
        Reflect.defineMetadata(MetaDataKeys_1.MethaDataKeys.path, path, target, key);
        Reflect.defineMetadata(MetaDataKeys_1.MethaDataKeys.method, Methods_1.Methods.get, target, path);
    };
}
exports.get = get;
function post(path) {
    return function (target, key, des) {
        Reflect.defineMetadata(MetaDataKeys_1.MethaDataKeys.path, path, target, key);
        Reflect.defineMetadata(MetaDataKeys_1.MethaDataKeys.method, Methods_1.Methods.post, target, path);
    };
}
exports.post = post;
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
