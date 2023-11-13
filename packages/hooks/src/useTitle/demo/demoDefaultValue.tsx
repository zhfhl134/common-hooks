import React from 'react';
import { useTitle } from 'commonHooks';

const useTitleDemo = () => {
  useTitle('自定义的标题');
  return <div>能够修改的标题</div>;
};

export default useTitleDemo;
