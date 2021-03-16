/*
 * @Description: 处理命令行颜色
 * @Author: tourist17846
 * @Date: 2021-03-16 23:12:51
 * @LastEditTime: 2021-03-16 23:46:06
 */

import * as chalk from 'chalk';


const colors: string[] = ['green', 'blue', 'yellow', 'red'];
const colorCli: { [keyName: string]: (text: string, isConsole: boolean) => unknown } = {};

colors.forEach(item => {
  colorCli[item] = function (text: string, isConsole: boolean): unknown {
    return isConsole
      ? console.log(chalk[item](text))
      : chalk[item](text);
  }
});

export default colorCli;