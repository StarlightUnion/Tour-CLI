/*
 * @Description: tour-cli命令入口
 * @Author: tourist17846
 * @Date: 2021-03-14 23:35:15
 * @LastEditTime: 2021-06-22 23:21:21
 */

import * as fs from 'fs';
import * as commander from 'commander';
import { utils, questions } from './utils';
import create from './scripts/create';


const { readFileSync } = fs;
const { green, red } = utils.colorCli();
const { handleCreateQuestionsList } = questions;
const version: string = JSON.parse(readFileSync('package.json', 'utf-8')).version;

// create
commander
  .command('create')
  .description('创建一个新项目')
  .action(() => {
    green('⚡ 开始创建新项目...\n');

    // questions
    handleCreateQuestionsList()
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
    green('启动项目：');
  });

// build
commander
  .command('build')
  .description('打包项目')
  .action(() => {
    green('打包项目：');
  });

// version -v
commander.version(version, '-v, --version');

commander.parse(process.argv);