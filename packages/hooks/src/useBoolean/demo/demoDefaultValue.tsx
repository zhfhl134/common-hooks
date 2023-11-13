/**
 * title: useToggle 基础用法
 * desc: 当 action 中的值没有初始化的时候默认是false
 **/
import React from 'react';
import { useToggle } from 'commonHooks';

const useToggleDemo = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle<boolean>();
  return (
    <div>
      <p>默认值为: {`${state}`}</p>
      <button onClick={toggle} type="button">
        toggle 切换
      </button>
      <button onClick={setLeft} type="button">
        setLeft 切换
      </button>
      <button onClick={setRight} type="button">
        setRight 切换
      </button>
    </div>
  );
};

export default useToggleDemo;
