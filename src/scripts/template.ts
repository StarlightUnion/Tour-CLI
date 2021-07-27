/*
 * @Description: 命令 > tust template <options>
 * @Author: tourist17846
 * @Date: 2021-07-26 23:47:54
 * @LastEditTime: 2021-07-27 23:18:12
 */
import * as fs from 'fs';
import * as path from 'path';
import { utils } from '../utils';

const { blue, green, red } = utils.colorCli();

/**
 * @name: templateList
 * @description: 显示所有可用的模板
 * @param {boolean} isReturn
 * @return null
 */
const templateList = (isReturn?: boolean): void | string[] => {
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
 * @return {boolean}
 */
const templateCheck = (name: string, isReturn?: boolean): void | boolean => {
  const templatesPath = utils.getPath();
  const templates = fs.readdirSync(templatesPath);
  const exist = templates.includes(name);

  if (exist) {
    green(`存在 [${name}] ...`);
  } else {
    red(`不存在 [${name}] ...`);
  }

  if (isReturn) return exist;
}

export {
  templateList,
  templateCheck
};