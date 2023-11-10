// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/react-hooks-demo/packages/hooks/src/useToggle/demo/demoDefaultValue.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/react-hooks-demo/packages/hooks/src/useToggle/demo/demoValue.tsx?dumi-raw-code';

export default {
  'usetoggle-demodefaultvalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/react-hooks-demo/packages/hooks/src/useToggle/demo/demoDefaultValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demodefaultvalue"},
  },
  'usetoggle-demovalue': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/react-hooks-demo/packages/hooks/src/useToggle/demo/demoValue.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demovalue"},
  },
};
