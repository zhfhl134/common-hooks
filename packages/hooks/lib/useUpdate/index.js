"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
//
var useUpdate = function useUpdate() {
  // 会更新 react 组件 调用re-render
  var _a = (0, _tslib.__read)((0, _react.useState)({}), 2),
    setStateUpdate = _a[1];
  return (0, _react.useCallback)(function () {
    return setStateUpdate({});
  }, []);
};
var _default = exports["default"] = useUpdate;