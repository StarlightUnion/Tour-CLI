/*
 * @Description: 创建项目
 * @Author: tourist17846
 * @Date: 2021-03-15 20:27:52
 * @LastEditTime: 2021-06-04 17:00:43
 */

import { utils, file, def } from '../utils'


const { green, blue } = utils.colorCli();

// create script
const create = (res: def.CREATE_RESULT): void => {

  green('\n🚀 创建中...');
  blue(`\n📂 当前目录：${process.cwd()}`);

  const currentPath = handleTemplatePath(res);

  file.packageJsonModify(res, currentPath)
    .then((state) => {
      console.log(state);
    });
};

// 处理template路径
const handleTemplatePath = (res: def.CREATE_RESULT): string => {
  return __dirname.slice(0, -12)
    + 'templates/'
    + (res.type === 'react' ? 'react' : `${res.type}-${res.ts ? 'ts' : 'js'}`)
    + '/';
}

export default create;