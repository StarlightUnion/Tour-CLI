#!/usr/bin/env node

/*
 * @Description: tour-cli命令入口
 * @Author: tourist17846
 * @Date: 2021-03-14 23:35:15
 * @LastEditTime: 2021-03-18 09:14:45
 */

import * as fs from 'fs';
import * as commander from 'commander';
import { colorCli } from '../utils';


const { green } = colorCli;
const { readFileSync } = fs;
const version: string = JSON.parse(readFileSync('package.json', 'utf-8')).version;

// create
commander
  .command('create')
  .description('创建一个项目')
  .action(() => {
    green('--创建项目--');
  });

// start
commander
  .command('start')
  .description('启动项目')
  .action(() => {
    green('--启动项目--');
  });

// build
commander
  .command('build')
  .description('打包项目')
  .action(() => {
    green('--打包项目--');
  });

// version -v
commander.version(version, '-v, --version');

commander.parse(process.argv);