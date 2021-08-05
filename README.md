<h1 align="center">Tust-CLI</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/tust-cli"><img src="https://img.shields.io/npm/v/tust-cli.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/tust-cli"><img src="https://img.shields.io/npm/l/tust-cli.svg?sanitize=true" alt="License"></a>
</p>
一套DIY的脚手架，支持构建`React`、`Vue3.x`项目。

目前支持构建的项目模板名称：

* `react`
* `vue-js`
* `vue-ts`
* `vue-ts-mobile`

## 安装

```shell
npm i tust-cli -g
# cnpm i tust-cli -g
```

## 使用

### 1.创建项目

```shell
# 创建项目
tust create

# 使用指定模板名创建
tust create <templateName> # 示例：tust create vue-ts

# 获取所有可用的模板名称
tust template -l # 示例：tust template -l
# OR
tust template --list

# 检查模板名称是否可用
tust template -c <templateName> # 示例：tust template -c vue-ts
# OR
tust template -check <templateName>
```

### 2.启动项目

```shell
cd <projectPath> # 进入项目目录
tust start # 启动项目
```

### 3.打包项目

```shell
cd <projectPath> # 进入项目目录
tust build # 打包项目
```

### 4.其它

```shell
tust -v # 查看版本
# OR
tust --version
```

### 5.注意事项

> 由于启动和打包使用的命令**默认**分别是`npm/cnpm run dev`和`npm/cnpm run build`。
>
> 需要在模板项目中的`package.json`中**提前配置好对应的脚本**。

## 参考资料

* [rux-cli](https://github.com/GoodLuckAlien/rux-cli)