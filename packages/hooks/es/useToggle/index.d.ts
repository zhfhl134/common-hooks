type defaultFn = () => void;
export interface Actions<T> {
    setLeft: defaultFn;
    setRight: defaultFn;
    toggle: defaultFn;
    set: (value: T) => void;
}
declare function useToggle<T = boolean>(): [boolean, Actions<T>];
declare function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions<D | R>];
declare function useToggle<T>(defaultValue: T): [T, Actions<T>];
export default useToggle;
