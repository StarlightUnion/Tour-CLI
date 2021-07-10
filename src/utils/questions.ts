/*
 * @Description: 命令行交互
 * @Author: tourist17846
 * @Date: 2021-04-26 16:14:40
 * @LastEditTime: 2021-07-10 23:11:37
 */

import * as inquirer from 'inquirer';
import utils from './utils';
import { CREATE_RESULT, FrontEndFrameType } from './declare';


// create questions
const createQuestions = [
  {
    name: 'start',
    type: 'confirm',
    message: '是否创建一个新项目'
  }, {
    name: 'name',
    type: 'input',
    message: '请输入项目名称',
    default: 'tust_project',
    when: (res: CREATE_RESULT): boolean => Boolean(res.start)
  }, {
    name: 'author',
    type: 'input',
    message: '请输入作者',
    default: utils.getInfoFromExecSync('git config user.name'),
    when: (res: CREATE_RESULT): boolean => Boolean(res.start)
  }, {
    name: 'type',
    type: 'list',
    message: '请选择框架',
    choices: Object.values(FrontEndFrameType),
    filter: (val: string): string => val.toLowerCase(),
    when: (res: CREATE_RESULT): boolean => Boolean(res.start)
  }, {
    name: 'ts',
    type: 'confirm',
    message: '是否使用TypeScript',
    when: (res: CREATE_RESULT): boolean => Boolean(res.start) && res.type !== FrontEndFrameType.react
  }
];

/**
 * @name: handleCreateQuestionsList
 * @description: 返回一个inquirer Promise对象
 * @param null
 * @return {Promise<CREATE_RESULT>}
 */
function handleCreateQuestionsList(): Promise<CREATE_RESULT> {
  return new Promise((resolve) => {
    inquirer.prompt(createQuestions)
      .then((res: CREATE_RESULT) => resolve(res));
  });
}

export { handleCreateQuestionsList };