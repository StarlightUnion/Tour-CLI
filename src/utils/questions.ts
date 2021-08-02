/*
 * @Description: 命令行交互
 * @Author: tourist17846
 * @Date: 2021-04-26 16:14:40
 * @LastEditTime: 2021-08-02 23:41:14
 */

import * as inquirer from 'inquirer';
import utils from './utils';
import { CreateResult, BaseCreateResult, FrontEndFrameType } from './declare';


/**
 * 未指定模板的问题
 */
export const createQuestions = [
  {
    name: 'start',
    type: 'confirm',
    message: '是否创建一个新项目'
  }, {
    name: 'name',
    type: 'input',
    message: '请输入项目名称',
    default: 'tust_project',
    when: (res: CreateResult): boolean => Boolean(res.start)
  }, {
    name: 'author',
    type: 'input',
    message: '请输入作者',
    default: utils.getInfoFromExecSync('git config user.name'),
    when: (res: CreateResult): boolean => Boolean(res.start)
  }, {
    name: 'type',
    type: 'list',
    message: '请选择框架',
    choices: Object.values(FrontEndFrameType),
    filter: (val: string): string => val.toLowerCase(),
    when: (res: CreateResult): boolean => Boolean(res.start)
  }, {
    name: 'ts',
    type: 'confirm',
    message: '是否使用TypeScript',
    when: (res: CreateResult): boolean => Boolean(res.start) && res.type !== FrontEndFrameType.react
  }
];

/**
 * 指定模板的问题
 */
export const createTemplateQuestions = [
  {
    name: 'start',
    type: 'confirm',
    message: '是否创建一个新项目'
  }, {
    name: 'name',
    type: 'input',
    message: '请输入项目名称',
    default: 'tust_project',
    when: (res: BaseCreateResult): boolean => Boolean(res.start)
  }, {
    name: 'author',
    type: 'input',
    message: '请输入作者',
    default: utils.getInfoFromExecSync('git config user.name'),
    when: (res: BaseCreateResult): boolean => Boolean(res.start)
  }
]

/**
 * @name: handleCreateQuestionsList
 * @description: 返回一个inquirer Promise对象
 * @param {questions} inquirer.QuestionCollection
 * @return {Promise<T>}
 */
export function handleCreateQuestionsList<T extends BaseCreateResult = BaseCreateResult>(questions: inquirer.QuestionCollection): Promise<T> {
  return new Promise((resolve) => {
    inquirer.prompt(questions)
      .then(res => resolve(res as T));
  });
}