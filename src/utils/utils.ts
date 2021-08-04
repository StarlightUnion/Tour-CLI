/*
 * @Description: 工具方法库
 * @Author: tourist17846
 * @Date: 2021-04-26 23:18:06
 * @LastEditTime: 2021-08-04 00:18:40
 */

import * as path from 'path';
import * as chalk from 'chalk';
import * as childProcess from 'child_process';
import {
  CLIVoid,
  ColorCLI,
  CreateResult,
  FrontEndFrameType,
  CreateQuestionsReturnType
} from './declare';


const { execSync } = childProcess;

const colors: string[] = ['green', 'blue', 'yellow', 'red'];
const colorCli: { [keyName: string]: CLIVoid } = {};

export default {
  /**
   * @name: colorCli
   * @description: 返回多色命令行方法
   * @return {ColorCLI}
   */
  colorCli: function (): ColorCLI {
    if (!this.isEmptyObject(colorCli)) {
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
   * @name: isEmptyObject
   * @description: 判断是否为空对象
   * @param {object} object
   * @return {boolean}
   */
  isEmptyObject: function (object: { [k: string]: unknown }): boolean {
    return Object.keys(object).length === 0;
  },
  /**
   * @name: getInfoFromExecSync
   * @description: 返回执行cmd命令获得的结果
   * @param {string} cmd
   * @return {string}
   */
  getInfoFromExecSync: function (cmd: string): string {
    try {
      const res: string = execSync(cmd).toString().trim();
      return res;
    } catch (e) { }

    return '';
  },

  /**
   * @name: getPath
   * @description: 获取包内指定目录地址 需要根据打包方式不同切换不同的__path
   * @param {string} _path 需为相对于dist内文件的地址
   * @return {string}
   */
  getPath: function (_path?: string): string {
    //! tsc
    // const __path = `../${_path ? _path : '../templates'}`;

    //! rollup
    const __path = _path ? _path : '../templates';
    return path.resolve(__dirname, __path);
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
   * @name: showCurrentPath
   * @description: 打印当前工作目录
   * @return null
   */
  showCurrentPath: function (): void {
    const { blue } = this.colorCli();
    blue(`\n📂 当前目录：${process.cwd()}\n`)
  },

  /**
   * @name: handleTemplatePath
   * @description: 处理template路径
   * @param {CreateQuestionsReturnType} res
   * @param {string} templateName
   * @return {string}
   */
  handleTemplatePath: function (res: CreateQuestionsReturnType, templateName?: string): string {
    console.log(templateName);
    if (templateName) {
      return `${this.getPath()}/${templateName}`;
    } else {
      return this.getPath()
      + '/'
      + ((res as CreateResult).type === FrontEndFrameType.react
        ? FrontEndFrameType.react
        : `${(res as CreateResult).type}-${(res as CreateResult)?.ts ? 'ts' : 'js'}`)
      + '/';
     }
  },
}