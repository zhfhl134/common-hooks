import { debounce } from 'lodash-es';
export var isFunction = function (value) {
  return typeof value === 'function';
};
export function sleep(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, time);
  });
}
export function request(req) {
  return new Promise(function (resolve, reject) {
    return setTimeout(function () {
      if (req === 0) {
        reject(new Error('fail'));
      } else {
        resolve('success');
      }
    }, 1000);
  });
}
function isNodeOrWeb() {
  var freeGlobal = (typeof global === 'undefined' ? 'undefined' : typeof global) == 'object' && global && global.Object === Object && global;
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  return freeGlobal || freeSelf;
}
if (!isNodeOrWeb()) {
  global.Date = Date;
}
export { debounce };