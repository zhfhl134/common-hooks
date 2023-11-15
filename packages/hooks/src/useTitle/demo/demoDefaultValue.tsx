/**
 * title: 基础用法
 * desc: 设置页面标题
 */

import React from 'react';
import { useTitle } from 'common-hooks';

export default () => {
  useTitle('Page Title');

  return (
    <div>
      <p>设置页面标题.</p>
    </div>
  );
};
