/**
 * title: 基础用法
 * desc: 强制组件重新渲染。
 */

import React from 'react';
import { useUpdate } from 'common-hooks';

export default () => {
  const update = useUpdate();
  return (
    <div>
      <p>更新时间：{new Date().toLocaleString()}</p>
      <button onClick={update}>更新</button>
    </div>
  );
};
