/**
 * title: 基础用法
 * desc: 切换 boolean，可以接收默认值。
 */

import React from 'react';
import { useBoolean } from 'commonHooks';

const useToggleDemo = () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

  return (
    <div>
      <p>默认值为: {JSON.stringify(state)}</p>
      <button onClick={toggle} type="button">
        toggle 切换
      </button>
      <button onClick={setTrue} type="button">
        setTrue 切换
      </button>
      <button onClick={setFalse} type="button">
        setFalse 切换
      </button>
    </div>
  );
};

export default useToggleDemo;
