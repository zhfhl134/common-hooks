/**
 * const [state, [ toggle, setLeft, setRight }]] = useToggle('1','2');
 **/
import { useState, useMemo } from 'react';
type defaultFn = () => void;

export interface Actions<T> {
  setLeft: defaultFn;
  setRight: defaultFn;
  toggle: defaultFn;
  set: (value: T) => void;
}

//1. 支持默认的 boolean 类型切换
// 例：const [state, {toggle, setLeft, setRight}] = useToggle();
// 例: const [state, {toggle, setLeft, setRight}] = useToggle('1','2');
// 1.1 实现了一个 useToggle 类型声明
function useToggle<T = boolean>(): [boolean, Actions<T>];

// 1.1.1 默认传值不为空 类型定义
function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions<D | R>];
function useToggle<T>(defaultValue: T): [T, Actions<T>];
// 1.2 定义方法
function useToggle<D, R>(defaultValue: D = false as D, reverseValue?: R) {
  // 当前状态
  const [state, setState] = useState<D | R>(defaultValue);
  // action 持久化，useMemo   action 只在第一次引用的时候进行初始化
  const action = useMemo(() => {
    const reverseValueOrigin = reverseValue === undefined ? !defaultValue : (reverseValue as D | R);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    const set = (value: D | R) => setState(value);
    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    return {
      setLeft,
      setRight,
      set,
      toggle,
    };
  }, []);

  return [state, action];
}

export default useToggle;
