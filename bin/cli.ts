#!/usr/bin/env node

/*
 * @Description: tour-cli命令入口
 * @Author: tourist17846
 * @Date: 2021-03-14 23:35:15
 * @LastEditTime: 2021-05-17 15:00:27
 */

import * as fs from 'fs';
import * as commander from 'commander';
import { colorCli, questions } from '../utils';


const { readFileSync } = fs;
const { green } = colorCli;
const { handleCreateQuestionsList } = questions;
const version: string = JSON.parse(readFileSync('package.json', 'utf-8')).version;

// create
commander
  .command('create')
  .description('创建一个新项目')
  .action(() => {
    green('🚀 开始创建新项目...');

    // questions
    handleCreateQuestionsList()
      .then(res => {
        // if (res.start) {}
        console.log(res);
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