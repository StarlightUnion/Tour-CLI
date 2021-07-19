/*
 * @Description: 创建项目
 * @Author: tourist17846
 * @Date: 2021-03-15 20:27:52
 * @LastEditTime: 2021-07-20 00:17:35
 */
import { utils, file, declare } from '../utils';
import npm from './npm';


const { green, red, blue } = utils.colorCli();

/**
 * @name: create
 * @description: create脚本
 * @param {CREATE_RESULT} res
 * @return null
 */
const create = (res: declare.CREATE_RESULT): void => {
  // TODO：临时处理 暂无vue3模板
  if (res.type !== declare.FrontEndFrameType.react) {
    red(`\n🚫 tust-cli暂不支持${res.type}项目构建...`);
    return;
  }

  const sourcePath = utils.handleTemplatePath(res); // 获取资源路径
  const currentPath = process.cwd(); // 命令行当前所在路径

  green('\n🚀 创建中...');
  utils.showCurrentPath();

  const _currentPath = file.createDirectory(currentPath, res.name);

  file.packageJsonModify(res, sourcePath)
    .then(state => {
      if (state) {
        file.copyDirectory(sourcePath, _currentPath, () => {
          green('\n👌 完成复制，准备安装依赖...\n');
          npm()(res.name, () => {
            green('\n✔️ 完成依赖安装！');

            // 提示=>start
            blue('\n  启动项目:');
            blue(`   > cd ${res.name}`);
            blue('   > tust start\n');
          });
        });
      } else {
        red('\n🚫 package.json修改失败，模板中似乎没有该文件...');
      }
    });
};

export default create;