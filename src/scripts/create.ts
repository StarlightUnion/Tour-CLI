/*
 * @Description: 创建项目
 * @Author: tourist17846
 * @Date: 2021-03-15 20:27:52
 * @LastEditTime: 2021-07-03 23:56:07
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

  const _currentPath = file.createProjectDirectory(currentPath, res.name);

  file.packageJsonModify(res, sourcePath)
    .then(state => {
      file.init();
      file.copyFiles(sourcePath, _currentPath, () => console.log(state));
    });
};

export default create;