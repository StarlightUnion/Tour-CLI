/*
 * @Description: 创建项目
 * @Author: tourist17846
 * @Date: 2021-03-15 20:27:52
 * @LastEditTime: 2021-05-27 09:10:26
 */

import { utils, def } from '../utils'


const { green, blue } = utils.colorCli();

// create
const create = (res: def.CREATE_RESULT): unknown => {

  green('\n🚀 创建中...');
  blue(`\n🗂️ 当前目录：${process.cwd()}`);

  const currentPath = `${__dirname.slice(0, -12)}templates/${res.type}-${res.ts ? 'ts' : 'js'}`;

  return console.log(res, currentPath);
};

export default create;