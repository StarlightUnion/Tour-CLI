/*
 * @Description: 命令 > tust template <options>
 * @Author: tourist17846
 * @Date: 2021-07-26 23:47:54
 * @LastEditTime: 2021-08-02 23:26:29
 */
import * as fs from 'fs';
import { utils } from '../utils';

const { blue, green, red } = utils.colorCli();

/**
 * @name: templateList
 * @description: 显示所有可用的模板
 * @param {boolean} isReturn
 * @return null
 */
export const templateList = (isReturn?: boolean): void | string[] => {
  const templatesPath = utils.getPath();
  const templates = fs.readdirSync(templatesPath);
  const templatesText = templates
    .map(item => `> ${item}\n`)
    .join('');

  blue('所有可用的模板：');
  blue(templatesText);

  if (isReturn) return templates;
}

/**
 * @name: templateCheck
 * @description: 检查当前模板名称是否可用
 * @param {string} name
 * @param {boolean} showLog 显示日志
 * @param {boolean} isReturn 返回结果
 * @return {boolean}
 */
export const templateCheck = (name: string, showLog: boolean, isReturn?: boolean): void | boolean => {
  const templatesPath = utils.getPath();
  const templates = fs.readdirSync(templatesPath);
  const exist = templates.includes(name);

  if (showLog) {
    if (exist) {
      green(`[${name}] 可用`);
    } else {
      red(`[${name}] 不可用`);
    }
  }

  if (isReturn) return exist;
}