"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return _lodashEs.debounce;
  }
});
exports.isFunction = void 0;
exports.request = request;
exports.sleep = sleep;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _lodashEs = require("lodash-es");
var isFunction = exports.isFunction = function isFunction(value) {
  return typeof value === 'function';
};
function sleep(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, time);
  });
}
function request(req) {
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
  var freeGlobal = (typeof global === 'undefined' ? 'undefined' : typeof global === "undefined" ? "undefined" : (0, _typeof2["default"])(global)) == 'object' && global && global.Object === Object && global;
  var freeSelf = (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) == 'object' && self && self.Object === Object && self;
  return freeGlobal || freeSelf;
}
if (!isNodeOrWeb()) {
  global.Date = Date;
}