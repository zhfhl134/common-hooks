# encode hooks

## 安装 webpack 打包工具

### 初始化 package.json 文件

    ```js
    npm init -y
    ```

1. package.json 依赖项修改
   1.1 version 字段不需要添加，发包的时候需要设置版本号

   ```js
   "version": "x.x.x"   ->   "private": "true"
   ```

   main 字段不需要添加，打包的时候需要设置文件位置

   ```js
   "main": "xx/xx.js"   ->   // 删除
   ```

   1.2 scripts 对象中添加值：

   ```js
   "preinstall":"npx only-allow pnpm", // 安装依赖时，使用 pnpm
   "prepare":"husky install"，         // 安装 husky 代码提交之前，自动对代码进行格式化、优化、自定义。
   "start": "pnpm run dev",            // 启动项设置 dev 启动
   "dev": "dumi dev",                  // 启动 dumi 本地开发环境
    "init": "pnpm install",            // 依赖安装配置项
    "build": "pnpm -r --filter=./packages/* run build", // 配置子包启动项
   ```

   1.3 安装依赖项 devDependencies 对象中添加。

   ```json
    "@ant-design/icons": "^5.0.1",
    "@babel/cli": "^7.10.1",
    "@babel/core": "^7.10.2",
    "@babel/plugin-transform-runtime": "^7.19.6",
    "@babel/preset-env": "^7.0.0",
    "@babel/preset-react": "^7.0.0",
    "@babel/preset-typescript": "^7.0.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@types/jest": "^29.4.0",
    "@types/mockjs": "^1.0.7",
    "@types/node": "^20.5.6",
    "@types/react-router": "^5.1.19",
    "@umijs/fabric": "^2.1.0",
    "antd": "^5.2.1",
    "babel-plugin-import": "^1.12.0",
    "coveralls": "^3.1.1",
    "cross-env": "^7.0.3",
    "del": "^5.1.0",
    "dumi": "^1.1.48",
    "encode-fe-lint": "^1.0.3",
    "eslint": "^7.2.0",
    "eslint-plugin-react-hooks": "^4.0.8",
    "fast-glob": "^3.2.11",
    "fs-extra": "^10.0.1",
    "gray-matter": "^4.0.3",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-typescript": "^6.0.0-alpha.1",
    "husky": "^8.0.0",
    "jest": "^29.4.1",
    "jest-environment-jsdom": "^29.4.1",
    "jest-localstorage-mock": "^2.4.18",
    "mockjs": "^1.1.0",
    "prettier": "^2.0.5",
    "pretty-quick": "^3.1.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-drag-listview": "^0.1.6",
    "react-router": "^6.4.2",
    "react-shadow": "^19.0.3",
    "rimraf": "^3.0.2",
    "surge": "^0.21.3",
    "ts-jest": "^29.0.5",
    "tslib": "^2.4.1",
    "typescript": "^5.1.3",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.10",
    "webpack-merge": "^4.2.2"
   ```

2. 安装脚手架工具

   ```js
   encode-fe-lint init
       React 项目 (TypeScript)
       stylelint
       Prettier // 代码格式化
   ```

3. 安装依赖

   ```js
   pnpm run init
   ```

4. 多包管理配置
   4.1 新建 pnpm-workspace.yaml 文件
   多包管理配置

   ```yaml
   packages:
     - 'packages/*'
   ```

   4.2 新建 packages/hooks 文件

5. 安装静态站点
   根据 webpack 打包工具，安装对应的依赖（dumi）
   ```js
   pnpm run start
   ```
6. 配置 TS 文件

   ```js
   tsc --init
   ```

   6.1. 对应子包的 TS 配置
   tsconfig.pro.json

   ```json
   {
     "extends": "./tsconfig.json", //基于上层 TS 做扩展
     "exclude": [
       "node_modules",
       "lib",
       "es",
       "dist",
       "**/__tests__",
       "**/__test__",
       "**/demo",
       "example",
       "gulpfile.js"
     ]
   }
   ```

7. 配置 webpack 构建工具
   根目录下新建 webpack.common.js
   ```js
   module.exports = {
     output: {
       libraryTarget: 'umd',
       globalObject: 'this',
     },
     mode: 'production',
     resolve: {
       extensions: ['.json', '.js'],
     },
     // module: {
     //   rules: [
     //     {
     //       test: /\.jsx?$/,
     //       use: {
     //         loader: 'babel-loader',
     //       },
     //     }
     //   ],
     // },
     externals: [
       {
         react: 'React',
       },
     ],
   };
   ```
8. 配置 dumi 工具
   新建 config 文件夹-新建 config.ts、menus.ts // 静态页面可以展示的内容,根据 dumi 官方文档配置
9. 新建 docs 文件夹，静态站点所消费的内容
10. 配置子包的 package.json 文件

```json
{
  "name": "encode-hooks",
  "version": "0.0.1",
  "description": "React 业务 Hooks",
  "keywords": ["encode", "react", "hooks"],
  "main": "./lib/index.js",
  "module": "./es/index.js",
  "types": "./lib/index.d.ts",
  "unpkg": "dist/encode-hooks.js",
  "sideEffects": false,
  "authors": "zhfhl",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/"
  },
  "repository": "https://github.com/encode-studio-fe/encode-hooks",
  "homepage": "https://github.com/encode-studio-fe/encode-hooks",
  "scripts": {
    "build": "webpack-cli"
  },
  "files": ["dist", "lib", "es", "metadata.json", "package.json", "README.md"],
  "dependencies": {
    "@babel/runtime": "^7.21.0",
    "dayjs": "^1.9.1",
    "intersection-observer": "^0.12.0",
    "js-cookie": "^2.x.x",
    "lodash-es": "^4.17.21",
    "resize-observer-polyfill": "^1.5.1",
    "screenfull": "^5.0.0",
    "tslib": "^2.4.1"
  },
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
  },
  "devDependencies": {
    "@alifd/next": "^1.20.6",
    "@ant-design/icons": "^5.0.1",
    "@types/js-cookie": "^2.x.x",
    "@types/lodash-es": "^4.17.7",
    "antd": "^5.2.1",
    "jest-websocket-mock": "^2.1.0",
    "mockjs": "^1.1.0",
    "react-drag-listview": "^0.1.6",
    "react-json-view": "^1.21.3"
  },
  "engines": {
    "node": ">=8.0.0"
  },
  "license": "MIT"
}
```

11. gulp 配置文件（用来分析打包的过程）
    全局新建 gulpfile.js
    11.1 配置多包中的 tsconfig.json 文件
    11.2 配置多包中的 tsconfig.pro.json 文件
    11.4 配置多包中的 gulpfile.js 文件
12. 安装多包依赖

```JS
 pnpm run init
```

13. 构建多包打包之后文件
    将多包中的 package.json 文件中的 scripts 命令
    ```json
    "scripts": {
    "build": "gulp"
    }
    ```
    ```js
    pnpm run build
    ```
    cjs 配置文件 需要添加 .babelrc 配置文件
14. 构建多包中的 webpack.config.js

15. 构建 useToggle hooks
    15.1 src 文件下新建 useToggle 文件；useToggle 文件下新建 index.ts 文件
    15.2 useToggle 文件下新建 demo 文件，demo 文件新建 index.tsx 文件
    15.3 useToggle 文件下新建 index.md 文件配置 demo 文件路由
16. 健壮性(测试用例测试 功能校验 jest)
    https://jestjs.io/zh-Hans/
    16.1 根目录下新建 jest.config.js 文件 // 针对浏览器环境下配置的基础 jest 内容
    16.2 根目录下新建 jest.setup.js 文件 // 默认值的方法创建
    16.3 src/useToggle 目录下新建 **test** 文件夹 文件夹下新建 index.test.ts 配置 test
17. 发布包到 npm 发布代码到 github
    根目录 package.json 文件中添加 scripts 命令 :
    "pub:beta": "pnpm run build && pnpm -r --filter=./packages/hooks publish --tag beta",
    运行 pnpm run pub:beta 命令 进行发包到 npm
    完善 npm 信息将 md 文件拷贝到项目跟目录下 gulpfile.js 文件中
    package/hooks/gulpfile.js 文件中添加一个 hooks 的文档声明 metadata.json
