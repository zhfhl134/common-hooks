import { useRef, useEffect } from 'react';

type FN = () => void;

const DEFAULT_OPTIONS = {
  restorePrevTitle: false,
};
// 解决闭包的问题
const useLatest = <T>(value: T) => {
  const ref = useRef<T>(value);
  ref.current = value;
  return ref;
};
const useUnmount = (fn: FN) => {
  const fnRef = useLatest(fn);
  useEffect(() => () => fnRef.current(), []);
};
const useTitle = (title: string, option = DEFAULT_OPTIONS) => {
  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);
  useUnmount(() => {
    if (option.restorePrevTitle) {
      document.title = titleRef.current;
    }
  });
};

export default useTitle;
