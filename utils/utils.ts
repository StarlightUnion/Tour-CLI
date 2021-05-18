/*
 * @Description: 工具方法库
 * @Author: tourist17846
 * @Date: 2021-04-26 23:18:06
 * @LastEditTime: 2021-05-17 14:15:31
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