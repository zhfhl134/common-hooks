var cachePromise = new Map();
var getCachePromise = function (cacheKey) {
  return cachePromise.get(cacheKey);
};
var setCachePromise = function (cacheKey, promise) {
  // Should cache the same promise, cannot be promise.finally
  // Because the promise.finally will change the reference of the promise
  cachePromise.set(cacheKey, promise);
  // no use promise.finally for compatibility
  promise.then(function (res) {
    cachePromise.delete(cacheKey);
    return res;
  }).catch(function () {
    cachePromise.delete(cacheKey);
  });
};
export { getCachePromise, setCachePromise };