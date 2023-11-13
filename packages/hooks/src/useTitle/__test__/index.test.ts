import { renderHook, act } from '@testing-library/react';
import useTitle from '../index';

describe('useTitle', () => {
  it('基础标题的测试使用', () => {
    const hook = renderHook((props) => useTitle(props), {
      initialProps: '自定义页面标题',
    });
    expect(document.title).toBe('自定义页面标题');

    act(() => {
      hook.rerender('另一个自定义页面标题');
    });
    expect(document.title).toBe('另一个自定义页面标题');
  });

  it('组件关闭回退', () => {
    document.title = '原有页面标题';
    const hook = renderHook((props) => useTitle(props, { restorePrevTitle: false }), {
      initialProps: '自定义页面标题',
    });
    expect(document.title).toBe('自定义页面标题');

    act(() => {
      hook.unmount();
    });
    expect(document.title).toBe('自定义页面标题');
  });
});
