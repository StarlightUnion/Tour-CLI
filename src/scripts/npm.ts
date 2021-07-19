/*
 * @Description: 安装依赖
 * @Author: tourist17846
 * @Date: 2021-07-06 23:09:01
 * @LastEditTime: 2021-07-10 23:12:23
 */
import which from 'which';
import * as childProcess from 'child_process';
import { utils, declare } from '../utils';


const { red } = utils.colorCli();

/**
 * @name: run
 * @description: 执行
 * @param {string} command
 * @param {string} args
 * @param {string} cwd
 * @param {function} callBack
 * @return null
 */
const run = (command: string, args: string[], cwd?: string, callBack?: (code?: number | null) => void): void => {
  const runner = childProcess.spawn(command, args, {
    cwd: cwd ? cwd : void 0,
    stdio: 'inherit'
  });
  runner.on('close', code => callBack?.(code));
}

/**
 * @name: findNpm
 * @description: 根据当前操作系统确定npm
 * @return {string | null}
 */
const findNpm = (): string | void => {
  const npm = process.platform === 'win32'
    ? ['cnpm.cmd', 'npm.cmd']
    : ['cnpm', 'npm'];

  for (let i = 0; i < npm.length; i++) {
    try {
      which.sync(npm[i]);
      return npm[i];
    } catch (e) {
      red(`\n🚫 未检测到${npm[i]}，请手动安装...`);
    }
  }
}

/**
 * @name: npm
 * @description: 返回一个方法 例如执行：npm('install')
 * @param {string} args
 * @return {declare.NPM}
 */
const npm = (args = 'install'): declare.NPM => {
  const npm = findNpm();

  return (cwd?: string, callBack?: () => void) => {
    run(which.sync(npm as string), [args], cwd, () => callBack?.());
  };
}

export default npm;