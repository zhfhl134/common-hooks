import { __read, __spreadArray } from "tslib";
import { useMemo } from 'react';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';
import isDev from '../utils/isDev';
import { isFunction, debounce } from '../utils/utils';
function useDebounceFn(fn, options) {
  var _a;
  if (isDev) {
    if (!isFunction(fn)) {
      console.error("useDebounceFn expected parameter is a function, got ".concat(typeof fn));
    }
  }
  var fnRef = useLatest(fn);
  var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
  var debounced = useMemo(function () {
    return debounce(function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(fnRef, __spreadArray([], __read(args), false));
    }, wait, options);
  }, []);
  useUnmount(function () {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}
export default useDebounceFn;