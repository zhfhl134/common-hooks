export const menus = [
  {
    title: '请求',
    children: [
      'useRequest/doc/basic',
      'useRequest/doc/loadingDelay',
      'useRequest/doc/polling',
      'useRequest/doc/ready',
      'useRequest/doc/refreshDeps',
      'useRequest/doc/refreshOnWindowFocus',
      'useRequest/doc/debounce',
      'useRequest/doc/throttle',
      'useRequest/doc/retry',
    ],
  },
  {
    title: '生命周期',
    children: ['useUnmount', 'useUpdate'],
  },
  {
    title: '状态',
    children: ['useToggle', 'useBoolean', 'useDebounce', 'useThrottle'],
  },
  {
    title: 'DOM',
    children: ['useTitle'],
  },
  {
    title: '进阶',
    children: ['useLatest', 'useMemoizedFn'],
  },
  {
    title: 'Effect',
    children: ['useDebounceFn'],
  },
];
