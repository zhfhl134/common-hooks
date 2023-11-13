import { useRef, useEffect } from 'react';
var DEFAULT_OPTIONS = {
  restorePrevTitle: false
};
// 解决闭包的问题
var useLatest = function (value) {
  var ref = useRef(value);
  ref.current = value;
  return ref;
};
var useUnmount = function (fn) {
  var fnRef = useLatest(fn);
  useEffect(function () {
    return function () {
      return fnRef.current();
    };
  }, []);
};
var useTitle = function (title, option) {
  if (option === void 0) {
    option = DEFAULT_OPTIONS;
  }
  var titleRef = useRef(document.title);
  useEffect(function () {
    document.title = title;
  }, [title]);
  useUnmount(function () {
    if (option.restorePrevTitle) {
      document.title = titleRef.current;
    }
  });
};
export default useTitle;