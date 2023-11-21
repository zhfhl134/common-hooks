// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useBoolean/demo/demoValue.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useCreation/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useDebounce/demo/demo.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useDebounceFn/demo/demo1.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useLatest/demo/demo.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useMemoizedFn/demo/demo1.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useMemoizedFn/demo/demo2.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useMount/demo/demo1.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/default.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/manual-run.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/manual-runAsync.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/lifeCycle.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/refresh.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/mutate.tsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/cancel.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/params.tsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/debounce/demo/debounce.tsx?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/index/demo/default.tsx?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/index/demo/manual.tsx?dumi-raw-code';
import rawCode20 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/loadingDelay/demo/loadingDelay.tsx?dumi-raw-code';
import rawCode21 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/polling/demo/polling.tsx?dumi-raw-code';
import rawCode22 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/polling/demo/pollingError.tsx?dumi-raw-code';
import rawCode23 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/ready/demo/ready.tsx?dumi-raw-code';
import rawCode24 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/ready/demo/manualReady.tsx?dumi-raw-code';
import rawCode25 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/refreshDeps/demo/refreshDeps.tsx?dumi-raw-code';
import rawCode26 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/refreshOnWindowFocus/demo/refreshOnWindowFocus.tsx?dumi-raw-code';
import rawCode27 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/retry/demo/retry.tsx?dumi-raw-code';
import rawCode28 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useRequest/doc/throttle/demo/throttle.tsx?dumi-raw-code';
import rawCode29 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useThrottle/demo/demo1.tsx?dumi-raw-code';
import rawCode30 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useThrottleFn/demo/demo1.tsx?dumi-raw-code';
import rawCode31 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useTitle/demo/demoDefaultValue.tsx?dumi-raw-code';
import rawCode32 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useToggle/demo/demoDefaultValue.tsx?dumi-raw-code';
import rawCode33 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useToggle/demo/demoValue.tsx?dumi-raw-code';
import rawCode34 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useUnmount/demo/demo1.tsx?dumi-raw-code';
import rawCode35 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useUpdate/demo/demo.tsx?dumi-raw-code';
import rawCode36 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useUpdateEffect/demo/demo1.tsx?dumi-raw-code';

export default {
  'useboolean-demovalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_naelooBesu" */'D:/common-hooks/packages/hooks/src/useBoolean/demo/demoValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.2.0"}},"componentName":"useBoolean","title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>切换 boolean，可以接收默认值。</p></div>","identifier":"useboolean-demovalue"},
  },
  'usecreation-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useCreation/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{}},"title.zh-CN":"确保实例不会被重复创建","description.zh-CN":"<div class=\"markdown\"><p>点击 \"Rerender\" 按钮，触发组件的更新，但 Foo 的实例会保持不变</p></div>","identifier":"usecreation-demo1"},
  },
  'usedebounce-demo': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useDebounce/demo/demo.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>DebouncedValue 只会在输入结束 500ms 后变化。</p></div>","identifier":"usedebounce-demo"},
  },
  'usedebouncefn-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useDebounceFn/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"common-hooks":{},"react":{"version":"18.2.0"}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数</p></div>","identifier":"usedebouncefn-demo1"},
  },
  'uselatest-demo': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useLatest/demo/demo.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5}},"dependencies":{"react":{"version":"18.2.0"}},"hideActions":["CSB"],"identifier":"uselatest-demo"},
  },
  'usememoizedfn-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useMemoizedFn/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"5.10.3"},"common-hooks":{},"react-dom":{"version":">=16.9.0"}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>useMemoizedFn 与 useCallback 可以实现同样的效果。</p></div>","identifier":"usememoizedfn-demo1"},
  },
  'usememoizedfn-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useMemoizedFn/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode7}},"dependencies":{"react":{"version":">=16.9.0"},"common-hooks":{},"antd":{"version":"5.10.3"},"react-dom":{"version":">=16.9.0"}},"title":"useMemoizedFn 函数地址不会变化，可以用于性能优化","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>示例中 <code>memoizedFn</code> 是不会变化的，<code>callbackFn</code> 在 count 变化时变化。</p></div>","identifier":"usememoizedfn-demo2"},
  },
  'usemount-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useMount/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode8}},"dependencies":{"common-hooks":{},"antd":{"version":"5.10.3"},"react":{"version":">=16.9.0"},"react-dom":{"version":">=16.9.0"}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>在组件首次渲染时，执行方法。</p></div>","identifier":"usemount-demo1"},
  },
  'basic-default': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/default.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{},"mockjs":{"version":"1.1.0"}},"title":"读取用户名称","identifier":"basic-default"},
  },
  'basic-manual-run': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/manual-run.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode10}},"dependencies":{"react":{"version":">=16.9.0"},"common-hooks":{},"antd":{"version":"5.10.3"},"react-dom":{"version":">=16.9.0"}},"title":"修改用户名","description":"<div class=\"markdown\"><p>在这个例子中，我们通过 <code>run(username)</code> 来修改用户名，通过 <code>onSuccess</code> 和 <code>onError</code> 来处理成功和失败。</p></div>","identifier":"basic-manual-run"},
  },
  'basic-manual-runasync': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/manual-runAsync.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode11}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"5.10.3"},"common-hooks":{},"react-dom":{"version":">=16.9.0"}},"title":"修改用户名","description":"<div class=\"markdown\"><p>在这个例子中，我们通过 <code>runAsync(username)</code> 来修改用户名，此时必须通过 catch 来自行处理异常。</p></div>","identifier":"basic-manual-runasync"},
  },
  'basic-lifecycle': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/lifeCycle.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode12}},"dependencies":{"react":{"version":">=16.9.0"},"common-hooks":{},"antd":{"version":"5.10.3"},"react-dom":{"version":">=16.9.0"}},"identifier":"basic-lifecycle"},
  },
  'basic-refresh': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/refresh.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{},"mockjs":{"version":"1.1.0"}},"title":"刷新用户名称","identifier":"basic-refresh"},
  },
  'basic-mutate': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/mutate.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode14}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"5.10.3"},"common-hooks":{},"mockjs":{"version":"1.1.0"},"react-dom":{"version":">=16.9.0"}},"title":"修改用户名","identifier":"basic-mutate"},
  },
  'basic-cancel': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/cancel.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode15}},"dependencies":{"react":{"version":">=16.9.0"},"common-hooks":{},"antd":{"version":"5.10.3"},"react-dom":{"version":">=16.9.0"}},"identifier":"basic-cancel"},
  },
  'basic-params': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/demo/params.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode16}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{},"mockjs":{"version":"1.1.0"}},"identifier":"basic-params"},
  },
  'debounce-debounce': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/debounce/demo/debounce.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode17}},"dependencies":{"common-hooks":{},"mockjs":{"version":"1.1.0"},"react":{"version":"18.2.0"}},"identifier":"debounce-debounce"},
  },
  'index-default': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/index/demo/default.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode18}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{},"mockjs":{"version":"1.1.0"}},"title":"读取用户名称","identifier":"index-default"},
  },
  'index-manual': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/index/demo/manual.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode19}},"dependencies":{"react":{"version":">=16.9.0"},"common-hooks":{},"antd":{"version":"5.10.3"},"react-dom":{"version":">=16.9.0"}},"title":"修改用户名","description":"<div class=\"markdown\"><p>在这个例子中，我们尝试修改用户名。</p></div>","identifier":"index-manual"},
  },
  'loadingdelay-loadingdelay': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/loadingDelay/demo/loadingDelay.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode20}},"dependencies":{"react":{"version":"18.2.0"},"mockjs":{"version":"1.1.0"},"common-hooks":{}},"identifier":"loadingdelay-loadingdelay"},
  },
  'polling-polling': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/polling/demo/polling.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode21}},"dependencies":{"react":{"version":"18.2.0"},"mockjs":{"version":"1.1.0"},"common-hooks":{}},"identifier":"polling-polling"},
  },
  'polling-pollingerror': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/polling/demo/pollingError.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode22}},"dependencies":{"react":{"version":">=16.9.0"},"mockjs":{"version":"1.1.0"},"antd":{"version":"5.10.3"},"common-hooks":{},"react-dom":{"version":">=16.9.0"}},"identifier":"polling-pollingerror"},
  },
  'ready-ready': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/ready/demo/ready.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode23}},"dependencies":{"common-hooks":{},"mockjs":{"version":"1.1.0"},"react":{"version":"18.2.0"}},"identifier":"ready-ready"},
  },
  'ready-manualready': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/ready/demo/manualReady.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode24}},"dependencies":{"common-hooks":{},"mockjs":{"version":"1.1.0"},"react":{"version":"18.2.0"}},"identifier":"ready-manualready"},
  },
  'refreshdeps-refreshdeps': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/refreshDeps/demo/refreshDeps.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode25}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{}},"identifier":"refreshdeps-refreshdeps"},
  },
  'refreshonwindowfocus-refreshonwindowfocus': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/refreshOnWindowFocus/demo/refreshOnWindowFocus.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode26}},"dependencies":{"mockjs":{"version":"1.1.0"},"react":{"version":"18.2.0"},"common-hooks":{}},"identifier":"refreshonwindowfocus-refreshonwindowfocus"},
  },
  'retry-retry': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/retry/demo/retry.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode27}},"dependencies":{"common-hooks":{},"react":{"version":">=16.9.0"},"antd":{"version":"5.10.3"},"react-dom":{"version":">=16.9.0"}},"identifier":"retry-retry"},
  },
  'throttle-throttle': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useRequest/doc/throttle/demo/throttle.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode28}},"dependencies":{"common-hooks":{},"mockjs":{"version":"1.1.0"},"react":{"version":"18.2.0"}},"identifier":"throttle-throttle"},
  },
  'usethrottle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useThrottle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode29}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>ThrottledValue 每隔 500ms 变化一次。</p></div>","identifier":"usethrottle-demo1"},
  },
  'usethrottlefn-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useThrottleFn/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode30}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>频繁调用 run，但只会每隔 500ms 执行一次相关函数。</p></div>","identifier":"usethrottlefn-demo1"},
  },
  'usetitle-demodefaultvalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useTitle/demo/demoDefaultValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode31}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>设置页面标题</p></div>","identifier":"usetitle-demodefaultvalue"},
  },
  'usetoggle-demodefaultvalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useToggle/demo/demoDefaultValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode32}},"dependencies":{"react":{"version":"18.2.0"}},"hideActions":["CSB"],"identifier":"usetoggle-demodefaultvalue"},
  },
  'usetoggle-demovalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useToggle/demo/demoValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode33}},"dependencies":{"react":{"version":"18.2.0"}},"hideActions":["CSB"],"identifier":"usetoggle-demovalue"},
  },
  'useunmount-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useUnmount/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode34}},"dependencies":{"react":{"version":">=16.9.0"},"common-hooks":{},"antd":{"version":"5.10.3"},"react-dom":{"version":">=16.9.0"}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>在组件卸载时，执行函数。</p></div>","identifier":"useunmount-demo1"},
  },
  'useupdate-demo': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useUpdate/demo/demo.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode35}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{}},"title":"基础用法","description":"<div class=\"markdown\"><p>强制组件重新渲染。</p></div>","identifier":"useupdate-demo"},
  },
  'useupdateeffect-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useUpdateEffect/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode36}},"dependencies":{"react":{"version":"18.2.0"},"common-hooks":{}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>使用上与 useEffect 完全相同，只是它忽略了首次执行，只在依赖项更新时执行。</p></div>","identifier":"useupdateeffect-demo1"},
  },
};
