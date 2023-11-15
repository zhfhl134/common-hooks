import type { ThrottleOptions } from '../useThrottle/throttleOptions';
type noop = (...args: any[]) => any;
declare function useThrottleFn<T extends noop>(fn: T, options?: ThrottleOptions): {
    run: any;
    cancel: any;
    flush: any;
};
export default useThrottleFn;
