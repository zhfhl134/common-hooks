"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var DEFAULT_OPTIONS = {
  restorePrevTitle: false
};
// 解决闭包的问题
var useLatest = function useLatest(value) {
  var ref = (0, _react.useRef)(value);
  ref.current = value;
  return ref;
};
var useUnmount = function useUnmount(fn) {
  var fnRef = useLatest(fn);
  (0, _react.useEffect)(function () {
    return function () {
      return fnRef.current();
    };
  }, []);
};
var useTitle = function useTitle(title, option) {
  if (option === void 0) {
    option = DEFAULT_OPTIONS;
  }
  var titleRef = (0, _react.useRef)(document.title);
  (0, _react.useEffect)(function () {
    document.title = title;
  }, [title]);
  useUnmount(function () {
    if (option.restorePrevTitle) {
      document.title = titleRef.current;
    }
  });
};
var _default = exports["default"] = useTitle;