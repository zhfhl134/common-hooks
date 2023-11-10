type defaultFn = () => void;
export interface Actions<T> {
    setLeft: defaultFn;
    setRight: defaultFn;
    toggle: defaultFn;
}
declare function useToggle<T = boolean>(): [boolean, Actions<T>];
declare function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions<D | R>];
export default useToggle;
