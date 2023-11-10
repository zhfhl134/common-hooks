"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
/**
 * const [state, [ toggle, setLeft, setRight }]] = useToggle('1','2');
 **/

// 1.2 定义方法
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  // 当前状态
  var _a = (0, _tslib.__read)((0, _react.useState)(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  // action 持久化，useMemo   action 只在第一次引用的时候进行初始化
  var action = (0, _react.useMemo)(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    var setLeft = function setLeft() {
      return setState(defaultValue);
    };
    var setRight = function setRight() {
      return setState(reverseValueOrigin);
    };
    var toggle = function toggle() {
      return setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    return {
      setLeft: setLeft,
      setRight: setRight,
      toggle: toggle
    };
  }, []);
  return [state, action];
}
var _default = exports["default"] = useToggle;