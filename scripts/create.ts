/*
 * @Description: 创建项目
 * @Author: tourist17846
 * @Date: 2021-03-15 20:27:52
 * @LastEditTime: 2021-06-07 13:40:34
 */

import { utils, file, def } from '../utils'


const { green, blue } = utils.colorCli();

/**
 * @name: create
 * @description: create脚本
 * @param {CREATE_RESULT} res
 * @return null
 */
const create = (res: def.CREATE_RESULT): void => {
  const sourcePath = handleTemplatePath(res); // 获取资源路径
  const currentPath = process.cwd(); // 命令行当前所在路径

  green('\n🚀 创建中...');
  blue(`\n📂 当前目录：${currentPath}`);

  // file.packageJsonModify(res, sourcePath)
  //   .then(state => {
  //     file.copyFiles(sourcePath, currentPath, () => console.log(state));
  //   });

  // 测试用
  file.copyFiles(sourcePath, currentPath, () => console.log('test'));
};

/**
 * @name: handleTemplatePath
 * @description: 处理template路径
 * @param {CREATE_RESULT} res
 * @return {string}
 */
const handleTemplatePath = (res: def.CREATE_RESULT): string => {
  return __dirname.slice(0, -12)
    + 'templates/'
    + (res.type === 'react' ? 'react' : `${res.type}-${res.ts ? 'ts' : 'js'}`)
    + '/';
}

export default create;