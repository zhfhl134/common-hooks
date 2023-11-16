import type { DebounceOptions } from '../useDebounce/debounceOptions';
type noop = (...args: any[]) => any;
declare function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions): {
    run: any;
    cancel: any;
    flush: any;
};
export default useDebounceFn;
