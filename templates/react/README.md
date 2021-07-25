这是一个使用[Tust-CLI](https://github.com/StarlightUnion/Tust-CLI)创建的项目

## 可用的命令

命令行中进入项目文件夹，可执行以下命令:

### `npm i/cnpm i`

安装依赖。

### `npm run dev`

打开开发环境（`NODE_ENV=development`），启动webpack-dev-server等。<br />
开发环境下生成的代码存放在`dist/development`目录中。

### `npm run build`

生产环境打包（`NODE_ENV=production`），打包生成代码存放在`dist/production`目录中。

### `npm run eslint`和`npm run eslint-fix`

`npm run eslint`开启`ESLint`服务，`npm run eslint-fix`开启`ESLint`自动修复。

### 其它命令

其它命令参考`package.json`。
