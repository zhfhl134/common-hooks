// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/common-hooks/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'D:/common-hooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.54_react-dom@18.2.0_react-router@6.17.0_react@18.2.0_typescript@5.2.2_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/common-hooks/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.54_react-dom@18.2.0_react@18.2.0/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'D:/common-hooks/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1699840177000,
          "title": "首页",
          "hero": {
            "image": "/common-hooks/logo.jpg",
            "desc": "<div class=\"markdown\"><p>常见 React 业务 Hooks</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/guide"
              },
              {
                "text": "Hooks 列表",
                "link": "/hooks"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Copyright (c) © 2023 by zhfhl134 blog, All Rights Reserved</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "✨ 特性",
              "heading": "-特性"
            },
            {
              "depth": 2,
              "value": "📦 安装",
              "heading": "-安装"
            },
            {
              "depth": 2,
              "value": "🔨 使用",
              "heading": "-使用"
            }
          ]
        },
        "title": "首页 - common-hooks"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'D:/common-hooks/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1699840177000,
          "slugs": [
            {
              "depth": 1,
              "value": "common-hooks",
              "heading": "common-hooks"
            },
            {
              "depth": 2,
              "value": "⛰️ 能力支持",
              "heading": "️-能力支持"
            },
            {
              "depth": 3,
              "value": "1. 可靠的代码健壮",
              "heading": "1-可靠的代码健壮"
            },
            {
              "depth": 3,
              "value": "2. 完善的文档能力",
              "heading": "2-完善的文档能力"
            },
            {
              "depth": 3,
              "value": "3. 完整的测试用例",
              "heading": "3-完整的测试用例"
            },
            {
              "depth": 2,
              "value": "🌟 设计目的",
              "heading": "-设计目的"
            },
            {
              "depth": 2,
              "value": "⚒️ 技术选型",
              "heading": "️-技术选型"
            },
            {
              "depth": 3,
              "value": "包管理工具 -- pnpm",
              "heading": "包管理工具----pnpm"
            },
            {
              "depth": 3,
              "value": "构建工具 -- webpack & gulp",
              "heading": "构建工具----webpack--gulp"
            },
            {
              "depth": 3,
              "value": "静态文件打包工具 -- dumi",
              "heading": "静态文件打包工具----dumi"
            },
            {
              "depth": 3,
              "value": "测试工具 -- jest",
              "heading": "测试工具----jest"
            },
            {
              "depth": 2,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 3,
              "value": "生成CHANGELOG",
              "heading": "生成changelog"
            }
          ],
          "title": "common-hooks",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "common-hooks - common-hooks"
      },
      {
        "path": "/hooks/use-boolean",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useBoolean__index.md' */'D:/common-hooks/packages/hooks/src/useBoolean/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useBoolean/index.md",
          "updatedTime": 1699840177000,
          "componentName": "useBoolean",
          "nav": {
            "path": "/hooks",
            "title": "UseBoolean"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useBoolean",
              "heading": "useboolean"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useBoolean",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-boolean",
            "title": "UseBoolean"
          }
        },
        "title": "useBoolean - common-hooks"
      },
      {
        "path": "/hooks/use-creation/index.",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useCreation__index..md' */'D:/common-hooks/packages/hooks/src/useCreation/index..md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useCreation/index..md",
          "updatedTime": 1697354624488,
          "nav": {
            "path": "/hooks",
            "title": "UseCreation"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useCreation",
              "heading": "usecreation"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "useCreation",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-creation",
            "title": "UseCreation"
          }
        },
        "title": "useCreation - common-hooks"
      },
      {
        "path": "/hooks/use-debounce",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounce__index.md' */'D:/common-hooks/packages/hooks/src/useDebounce/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounce/index.md",
          "updatedTime": 1700016536943,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounce"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounce",
              "heading": "usedebounce"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useDebounce",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce",
            "title": "UseDebounce"
          }
        },
        "title": "useDebounce - common-hooks"
      },
      {
        "path": "/hooks/use-debounce-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounceFn__index.md' */'D:/common-hooks/packages/hooks/src/useDebounceFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounceFn/index.md",
          "updatedTime": 1697354624493,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounceFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounceFn",
              "heading": "usedebouncefn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useDebounceFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce-fn",
            "title": "UseDebounceFn"
          }
        },
        "title": "useDebounceFn - common-hooks"
      },
      {
        "path": "/hooks/use-latest",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useLatest__index.md' */'D:/common-hooks/packages/hooks/src/useLatest/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useLatest/index.md",
          "updatedTime": 1699840177000,
          "nav": {
            "path": "/hooks",
            "title": "UseLatest"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useLatest",
              "heading": "uselatest"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useLatest",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-latest",
            "title": "UseLatest"
          }
        },
        "title": "useLatest - common-hooks"
      },
      {
        "path": "/hooks/use-memoized-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useMemoizedFn__index.md' */'D:/common-hooks/packages/hooks/src/useMemoizedFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMemoizedFn/index.md",
          "updatedTime": 1697354624529,
          "nav": {
            "path": "/hooks",
            "title": "UseMemoizedFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useMemoizedFn",
              "heading": "usememoizedfn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "性能提升",
              "heading": "性能提升"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "useMemoizedFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-memoized-fn",
            "title": "UseMemoizedFn"
          }
        },
        "title": "useMemoizedFn - common-hooks"
      },
      {
        "path": "/hooks/use-mount",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useMount__index.md' */'D:/common-hooks/packages/hooks/src/useMount/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMount/index.md",
          "updatedTime": 1697354624530,
          "nav": {
            "path": "/hooks",
            "title": "UseMount"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useMount",
              "heading": "usemount"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            }
          ],
          "title": "useMount",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-mount",
            "title": "UseMount"
          }
        },
        "title": "useMount - common-hooks"
      },
      {
        "path": "/hooks/use-request/basic",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__basic__basic.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/basic/basic.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/basic/basic.md",
          "updatedTime": 1697354624543,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "默认请求",
              "heading": "默认请求"
            },
            {
              "depth": 2,
              "value": "手动触发",
              "heading": "手动触发"
            },
            {
              "depth": 2,
              "value": "生命周期",
              "heading": "生命周期"
            },
            {
              "depth": 2,
              "value": "刷新（重复上一次请求）",
              "heading": "刷新重复上一次请求"
            },
            {
              "depth": 2,
              "value": "立即变更数据",
              "heading": "立即变更数据"
            },
            {
              "depth": 2,
              "value": "取消响应",
              "heading": "取消响应"
            },
            {
              "depth": 2,
              "value": "参数管理",
              "heading": "参数管理"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "基础用法",
          "hasPreviewer": true
        },
        "title": "基础用法 - common-hooks"
      },
      {
        "path": "/hooks/use-request/debounce",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__debounce__debounce.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/debounce/debounce.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/debounce/debounce.md",
          "updatedTime": 1697354624549,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "防抖",
              "heading": "防抖"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "防抖",
          "hasPreviewer": true
        },
        "title": "防抖 - common-hooks"
      },
      {
        "path": "/hooks/use-request/index",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__index__index.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/index/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/index/index.md",
          "updatedTime": 1697354624551,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "默认用法",
              "heading": "默认用法"
            },
            {
              "depth": 2,
              "value": "手动触发",
              "heading": "手动触发"
            }
          ],
          "title": "快速上手",
          "hasPreviewer": true
        },
        "title": "快速上手 - common-hooks"
      },
      {
        "path": "/hooks/use-request/loading-delay",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__loadingDelay__loadingDelay.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/loadingDelay/loadingDelay.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/loadingDelay/loadingDelay.md",
          "updatedTime": 1697354624552,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Loading Delay",
              "heading": "loading-delay"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "Loading Delay",
          "hasPreviewer": true
        },
        "title": "Loading Delay - common-hooks"
      },
      {
        "path": "/hooks/use-request/polling",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__polling__polling.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/polling/polling.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/polling/polling.md",
          "updatedTime": 1697354624553,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "轮询",
              "heading": "轮询"
            },
            {
              "depth": 2,
              "value": "轮询错误重试",
              "heading": "轮询错误重试"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Return",
              "heading": "return"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "轮询",
          "hasPreviewer": true
        },
        "title": "轮询 - common-hooks"
      },
      {
        "path": "/hooks/use-request/ready",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__ready__ready.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/ready/ready.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/ready/ready.md",
          "updatedTime": 1700032478985,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Ready",
              "heading": "ready"
            },
            {
              "depth": 2,
              "value": "自动模式",
              "heading": "自动模式"
            },
            {
              "depth": 2,
              "value": "手动模式",
              "heading": "手动模式"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "Ready",
          "hasPreviewer": true
        },
        "title": "Ready - common-hooks"
      },
      {
        "path": "/hooks/use-request/refresy-deps",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__refreshDeps__refresyDeps.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/refreshDeps/refresyDeps.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/refreshDeps/refresyDeps.md",
          "updatedTime": 1697354624555,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "依赖刷新",
              "heading": "依赖刷新"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "依赖刷新",
          "hasPreviewer": true
        },
        "title": "依赖刷新 - common-hooks"
      },
      {
        "path": "/hooks/use-request/refresh-on-window-focus",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__refreshOnWindowFocus__refreshOnWindowFocus.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/refreshOnWindowFocus/refreshOnWindowFocus.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/refreshOnWindowFocus/refreshOnWindowFocus.md",
          "updatedTime": 1697354624555,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "屏幕聚焦重新请求",
              "heading": "屏幕聚焦重新请求"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "屏幕聚焦重新请求",
          "hasPreviewer": true
        },
        "title": "屏幕聚焦重新请求 - common-hooks"
      },
      {
        "path": "/hooks/use-request/retry",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__retry__retry.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/retry/retry.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/retry/retry.md",
          "updatedTime": 1697354624557,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "错误重试",
              "heading": "错误重试"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "错误重试",
          "hasPreviewer": true
        },
        "title": "错误重试 - common-hooks"
      },
      {
        "path": "/hooks/use-request/throttle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__throttle__throttle.md' */'D:/common-hooks/packages/hooks/src/useRequest/doc/throttle/throttle.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/throttle/throttle.md",
          "updatedTime": 1697354624558,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "节流",
              "heading": "节流"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "节流",
          "hasPreviewer": true
        },
        "title": "节流 - common-hooks"
      },
      {
        "path": "/hooks/use-throttle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useThrottle__index.md' */'D:/common-hooks/packages/hooks/src/useThrottle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottle/index.md",
          "updatedTime": 1697354624589,
          "nav": {
            "path": "/hooks",
            "title": "UseThrottle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useThrottle",
              "heading": "usethrottle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useThrottle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-throttle",
            "title": "UseThrottle"
          }
        },
        "title": "useThrottle - common-hooks"
      },
      {
        "path": "/hooks/use-throttle-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useThrottleFn__index.md' */'D:/common-hooks/packages/hooks/src/useThrottleFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottleFn/index.md",
          "updatedTime": 1697354624592,
          "nav": {
            "path": "/hooks",
            "title": "UseThrottleFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useThrottleFn",
              "heading": "usethrottlefn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useThrottleFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-throttle-fn",
            "title": "UseThrottleFn"
          }
        },
        "title": "useThrottleFn - common-hooks"
      },
      {
        "path": "/hooks/use-title",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useTitle__index.md' */'D:/common-hooks/packages/hooks/src/useTitle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useTitle/index.md",
          "updatedTime": 1699840177000,
          "nav": {
            "path": "/hooks",
            "title": "UseTitle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useTitle",
              "heading": "usetitle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useTitle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-title",
            "title": "UseTitle"
          }
        },
        "title": "useTitle - common-hooks"
      },
      {
        "path": "/hooks/use-toggle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useToggle__index.md' */'D:/common-hooks/packages/hooks/src/useToggle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useToggle/index.md",
          "updatedTime": 1699596956000,
          "nav": {
            "path": "/hooks",
            "title": "UseToggle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useToggle",
              "heading": "usetoggle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "高级用法",
              "heading": "高级用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useToggle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-toggle",
            "title": "UseToggle"
          }
        },
        "title": "useToggle - common-hooks"
      },
      {
        "path": "/hooks/use-unmount",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUnmount__index.md' */'D:/common-hooks/packages/hooks/src/useUnmount/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUnmount/index.md",
          "updatedTime": 1697354624598,
          "nav": {
            "path": "/hooks",
            "title": "UseUnmount"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUnmount",
              "heading": "useunmount"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            }
          ],
          "title": "useUnmount",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-unmount",
            "title": "UseUnmount"
          }
        },
        "title": "useUnmount - common-hooks"
      },
      {
        "path": "/hooks/use-update",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUpdate__index.md' */'D:/common-hooks/packages/hooks/src/useUpdate/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdate/index.md",
          "updatedTime": 1700017596958,
          "nav": {
            "path": "/hooks",
            "title": "UseUpdate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdate",
              "heading": "useupdate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useUpdate",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-update",
            "title": "UseUpdate"
          }
        },
        "title": "useUpdate - common-hooks"
      },
      {
        "path": "/hooks/use-update-effect",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUpdateEffect__index.md' */'D:/common-hooks/packages/hooks/src/useUpdateEffect/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdateEffect/index.md",
          "updatedTime": 1697354624602,
          "nav": {
            "path": "/hooks",
            "title": "UseUpdateEffect"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdateEffect",
              "heading": "useupdateeffect"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useUpdateEffect",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-update-effect",
            "title": "UseUpdateEffect"
          }
        },
        "title": "useUpdateEffect - common-hooks"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-request/basic"
      },
      {
        "path": "/hooks/use-creation",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-creation/index."
      },
      {
        "path": "/hooks/use-request",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-request/basic"
      }
    ],
    "title": "common-hooks",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
