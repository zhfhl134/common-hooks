import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

const callToggle = (hook) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};
const callSetLeft = (hook) => {
  act(() => {
    hook.result.current[1].setLeft();
  });
};
describe('useToggle', () => {
  // jest 别名 it
  it('针对基础功能测试', () => {
    // 表达它是一个 react hooks
    const hooks = renderHook(() => useToggle());
    expect(hooks.result.current[0]).toBe(false);
  });

  // 模拟用户行为
  it('针对手动切换 toggle 行为', () => {
    const hooks = renderHook(() => useToggle('第一个参数', '第二个参数'));
    expect(hooks.result.current[0]).toBe('第一个参数');
    callToggle(hooks);
    expect(hooks.result.current[0]).toBe('第二个参数');

    callSetLeft(hooks);
    expect(hooks.result.current[0]).toBe('第一个参数');
  });
});
