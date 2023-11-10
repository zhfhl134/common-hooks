import { __read } from "tslib";
/**
 * const [state, [ toggle, setLeft, setRight }]] = useToggle('1','2');
 **/
import { useState, useMemo } from 'react';
// 1.2 定义方法
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  // 当前状态
  var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  // action 持久化，useMemo   action 只在第一次引用的时候进行初始化
  var action = useMemo(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    var setLeft = function () {
      return setState(defaultValue);
    };
    var setRight = function () {
      return setState(reverseValueOrigin);
    };
    var toggle = function () {
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
export default useToggle;