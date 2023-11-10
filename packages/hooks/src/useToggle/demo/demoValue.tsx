/**
 * title: useToggle 自定义值的切换
 * desc: 当 action 中的值没有初始化的时候，接受两个参数
 **/

import React from 'react';
import { useToggle } from 'encodeHooks';

const useToggleDemo = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle<string, string>(
    '第一个参数',
    '第二个参数',
  );
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
