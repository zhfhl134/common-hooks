import { useState, useCallback } from 'react';
//
const useUpdate = () => {
  // 会更新 react 组件 调用re-render
  const [, setStateUpdate] = useState({});
  return useCallback(() => setStateUpdate({}), []);
};

export default useUpdate;
