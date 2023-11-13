import React, { useState, useEffect } from 'react';
import { useLatest } from 'commonHooks';

const useLastestDemo = () => {
  const [stateCount, setStateCount] = useState<number>(0);
  const lastestRef = useLatest(stateCount);
  useEffect(() => {
    const timer = setInterval(() => {
      setStateCount(lastestRef.current + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>count:{stateCount}</div>;
};

export default useLastestDemo;
