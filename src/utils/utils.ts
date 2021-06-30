/*
 * @Description: 工具方法库
 * @Author: tourist17846
 * @Date: 2021-04-26 23:18:06
 * @LastEditTime: 2021-06-30 00:16:49
 */

import * as path from 'path';
import * as chalk from 'chalk';
import * as childProcess from 'child_process';
import { CLI_VOID, COLOR_CLI, CREATE_RESULT } from './declare';


const { execSync } = childProcess;

const colors: string[] = ['green', 'blue', 'yellow', 'red'];
const colorCli: { [keyName: string]: CLI_VOID } = {};

export default {
  /**
   * @name: colorCli
   * @description: 返回多色命令行方法
   * @return {COLOR_CLI}
   */
  colorCli: function (): COLOR_CLI {
    if (colorCli.length) {
      return colorCli;
    } else {
      colors.forEach(item => {
        colorCli[item] = (text: string, isConsole = true): unknown => {
          return isConsole
            ? console.log(chalk[item](text))
            : chalk[item](text);
        }
      });

      return colorCli;
    }
  },
  /**
   * @name: getInfoFromExecSync
   * @description: 返回执行cmd命令获得的结果
   * @param {string} cmd
   * @return {string}
   */
  getInfoFromExecSync: function (cmd: string): string {
    return execSync(cmd).toString().trim();
  },
  /**
   * @name: getRootPath
   * @description: 获取包的根目录地址
   * @return {string}
   */
  getRootPath: function (): string {
    return __dirname.slice(0, -4);
  },
  /**
   * @name: getCwdPath
   * @description: 获取当前进程的目录/{_path}
   * @param {string} _path
   * @return {string}
   */
  getCwdPath: function (_path: string): string {
    return path.join(process.cwd(), _path);
  },
  /**
   * @name: handleTemplatePath
   * @description: 处理template路径
   * @param {CREATE_RESULT} res
   * @return {string}
   */
  handleTemplatePath: function (res: CREATE_RESULT): string {
    return this.getRootPath()
      + 'templates/'
      + (res.type === 'react' ? 'react' : `${res.type}-${res.ts ? 'ts' : 'js'}`)
      + '/';
  },
}