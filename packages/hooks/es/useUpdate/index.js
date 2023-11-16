import { __read } from "tslib";
import { useState, useCallback } from 'react';
//
var useUpdate = function () {
  // 会更新 react 组件 调用re-render
  var _a = __read(useState({}), 2),
    setStateUpdate = _a[1];
  return useCallback(function () {
    return setStateUpdate({});
  }, []);
};
export default useUpdate;