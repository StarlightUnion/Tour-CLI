/*
 * @Description: 工具方法库
 * @Author: tourist17846
 * @Date: 2021-04-26 23:18:06
 * @LastEditTime: 2021-04-26 23:33:35
 */

import * as childProcess from 'child_process';


const { execSync } = childProcess;

export default {
  /**
   * @name: getInfoFromExecSync
   * @description: 返回执行cmd命令获得的结果
   * @param {string} cmd
   * @return {string}
   */
  getInfoFromExecSync: (cmd: string): string => execSync(cmd).toString().trim(),
}