<h1 align="center">Tust-CLI</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/tust-cli"><img src="https://img.shields.io/npm/v/tust-cli.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/tust-cli"><img src="https://img.shields.io/npm/l/tust-cli.svg?sanitize=true" alt="License"></a>
</p>

一套DIY的脚手架（参考[rux-cli](https://github.com/GoodLuckAlien/rux-cli)），支持构建React、Vue2、Vue3项目（Vue2、Vue3尚未导入模板，目前仅支持React项目构建）。

**🚧 施工中**

## 安装

```shell
npm i tust-cli -g
# cnpm i tust-cli -g
```

## 使用

```shell
tust -v # 查看版本
tust create # 创建项目

cd <project dir name> # 进入项目根目录
tust start # 启动项目

cd <project dir name> # 进入项目根目录
tust build # 打包项目
```

> 由于启动和打包使用的命令**默认**分别是`npm/cnpm run dev`和`npm/cnpm run build`。
>
> 需要在模板项目中的`package.json`中**提前配置好对应的脚本**。
