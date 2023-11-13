// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useBoolean/demo/demoDefaultValue.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useLatest/demo/demoDefaultValue.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useTitle/demo/demoDefaultValue.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useToggle/demo/demoDefaultValue.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/common-hooks/packages/hooks/src/useToggle/demo/demoValue.tsx?dumi-raw-code';

export default {
  'useboolean-demodefaultvalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_naelooBesu" */'D:/common-hooks/packages/hooks/src/useBoolean/demo/demoDefaultValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.2.0"}},"componentName":"useBoolean","hideActions":["CSB"],"identifier":"useboolean-demodefaultvalue"},
  },
  'uselatest-demodefaultvalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useLatest/demo/demoDefaultValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"uselatest-demodefaultvalue"},
  },
  'usetitle-demodefaultvalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useTitle/demo/demoDefaultValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"18.2.0"}},"hideActions":["CSB"],"identifier":"usetitle-demodefaultvalue"},
  },
  'usetoggle-demodefaultvalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useToggle/demo/demoDefaultValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demodefaultvalue"},
  },
  'usetoggle-demovalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/common-hooks/packages/hooks/src/useToggle/demo/demoValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demovalue"},
  },
};
