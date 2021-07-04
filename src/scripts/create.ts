/*
 * @Description: 创建项目
 * @Author: tourist17846
 * @Date: 2021-03-15 20:27:52
 * @LastEditTime: 2021-07-04 22:28:33
 */

import { utils, file, declare } from '../utils'


const { green, blue } = utils.colorCli();

/**
 * @name: create
 * @description: create脚本
 * @param {CREATE_RESULT} res
 * @return null
 */
const create = (res: declare.CREATE_RESULT): void => {
  const sourcePath = utils.handleTemplatePath(res); // 获取资源路径
  const currentPath = process.cwd(); // 命令行当前所在路径

  green('\n🚀 创建中...');
  blue(`\n📂 当前目录：${currentPath}`);

  const _currentPath = file.createDirectory(currentPath, res.name);

  file.packageJsonModify(res, sourcePath)
    .then(state => {
      file.copyDirectory(sourcePath, _currentPath, () => green('\n👌 完成复制，准备安装依赖...'));
    });
};

export default create;