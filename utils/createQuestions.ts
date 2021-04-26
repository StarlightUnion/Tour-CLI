/*
 * @Description: 命令行交互
 * @Author: tourist17846
 * @Date: 2021-04-26 16:14:40
 * @LastEditTime: 2021-04-26 17:18:35
 */

import * as inquirer from 'inquirer';


interface result {
  readonly start: string,
  readonly name?: string,
  readonly author?: string,
  readonly type?: string,
  readonly ts?: string
}

const questions = [
  {
    name: 'start',
    type: 'confirm',
    message: '请确认创建一个新项目'
  }, {
    name: 'name',
    type: 'input',
    message: '请输入项目名称',
    default: 'tust_project',
    when: (res: result): boolean => Boolean(res.start)
  }, {
    name: 'author',
    type: 'input',
    message: '请输入作者',
    default: 'test',
    when: (res: result): boolean => Boolean(res.start)
  }, {
    name: 'type',
    type: 'list',
    message: '请选择框架',
    choices: ['vue2', 'vue3', 'react'],
    filter: (val: string): string => val.toLowerCase(),
    when: (res: result): boolean => Boolean(res.start)
  }, {
    name: 'ts',
    type: 'confirm',
    message: '请确认是否使用TypeScript',
    when: (res: result): boolean => Boolean(res.start)
  }
]

function createQuestions(): Promise<result> {
  return new Promise((resolve) => {
    inquirer.prompt(questions)
      .then(res => resolve(res));
  });
}

export default createQuestions;