/*
 * @Description: tour-cli命令入口
 * @Author: tourist17846
 * @Date: 2021-03-14 23:35:15
 * @LastEditTime: 2021-07-28 00:09:54
 */

import * as fs from 'fs';
import * as commander from 'commander';
import { utils, questions, CreateResult } from './utils';
import create from './scripts/create';
import start from './scripts/start';
import build from './scripts/build';
import { templateList, templateCheck } from './scripts/template';


const { readFileSync } = fs;
const { green, red } = utils.colorCli();
const { handleCreateQuestionsList, createQuestions } = questions;

const version: string = JSON.parse(readFileSync(
  utils.getPath('../package.json'),
  'utf-8'
)).version;

// create
commander
  .command('create [templateName]')
  .description('创建一个新项目')
  .action(templateName => {
    green('⚡ 开始创建新项目...\n');

    // questions
    handleCreateQuestionsList<CreateResult>(createQuestions)
      .then(res => {
        res.start
          ? create(res)
          : red('\n⛔ 创建已终止');
      })
  });

// start
commander
  .command('start')
  .description('启动项目')
  .action(() => {
    green('✈️ 项目启动中...\n');
    start();
  });

// build
commander
  .command('build')
  .description('打包项目')
  .action(() => {
    green('📦 打包项目中...\n');
    build();
  });

// template
commander
  .command('template')
  .option('-l, --list', '显示所有可用的模板')
  .option('-c, --check <templateName>', '检查当前模板名称是否可用')
  .action(command => {
    if (command.list) {
      // 显示所有可用的模板
      templateList();
    } else if (command.check) {
      // 检查当前模板名称是否可用
      templateCheck(command.check, true);
    }
  });

// version -v
commander.version(version, '-v, --version');

commander.parse(process.argv);