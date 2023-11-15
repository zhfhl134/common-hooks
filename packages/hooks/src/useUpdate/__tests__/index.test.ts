import { renderHook, act } from '@testing-library/react';
import useUpdate from '..';

describe('useUpdate', () => {
  it('should update state', () => {
    const hooks = renderHook(() => useUpdate());
    const preUpdate = hooks.result.current;
    act(() => {
      hooks.result.current({
        foo: 'bar',
      });
    });
    expect(hooks.result.current).not.toEqual(preUpdate);
  });
  it('should return same update function', () => {
    const hooks = renderHook(() => useUpdate());
    const preUpdate = hooks.result.current;
    hooks.rerender();
    expect(hooks.result.current).toEqual(preUpdate);
  });
});
