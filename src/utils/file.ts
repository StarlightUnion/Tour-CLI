import * as fs from 'fs';
import utils from './utils';
import { CREATE_RESULT } from './declare';


const { green } = utils.colorCli();

export default {
  fileCount: 0, // 文件总数
  dirCount: 0, // 文件夹总数
  readDirCount: 0, // fs读取的文件夹总数
  copyExceptFiles: ['package.json'], // 不需要拷贝的文件
  /**
   * @name: createProjectDirectory
   * @description: 在当前目录下创建项目文件夹
   * @param {string} currentPath 当前工作目录
   * @param {string} projectName 项目名称
   * @return {string} 项目地址
   */
  createProjectDirectory: function (currentPath: string, projectName: string): string {
    const projectPath = `${currentPath}/${projectName}`;
    if (!fs.existsSync(projectPath)) fs.mkdirSync(projectPath);
    return projectPath;
  },
  /**
   * @name: init
   * @description: 初始化
   * @return null
   */
  init: function (): void {
    this.fileCount = 0;
    this.dirCount = 0;
    this.readDirCount = 0;
  },
  /**
   * @name: packageJsonModify
   * @description: 修改package.json 文件读写操作
   * @param {CREATE_RESULT} res
   * @param {string} path
   * @return {Promise<boolean>}
   */
  packageJsonModify: function (res: CREATE_RESULT, path: string): Promise<boolean> {
    return new Promise(resolve => {
      // 同步读取文件
      const data = fs.readFileSync(path + '/package.json');

      const { author, name } = res;
      let json: string = data.toString();

      // 替换 项目名称/作者
      json = json
        .replace(/ProjectName/g, name.trim())
        .replace(/ProjectAuthor/g, author.trim());

      const resolvePath = utils.getCwdPath(`./${res.name}/package.json`);

      fs.writeFile(resolvePath, Buffer.from(json), err => {
        if (err) {
          resolve(false);
          throw err;
        } else {
          green(`\nresolve file: ${resolvePath}`);
          resolve(true);
        }
      });
    });
  },
  /**
   * @name: copyFiles
   * @description: 拷贝template到当前目录
   * @param {string} sourcePath
   * @param {string} currentPath
   * @param {void} copyCallBack
   * @return null
   */
  copyFiles: function (sourcePath: string, currentPath: string, callBack: () => void): void {
    // this.readDirCount++;

    // 同步读取文件夹
    const filePaths = fs.readdirSync(sourcePath);

    filePaths.length && filePaths.forEach(filePath => {
      // this.readDirCount--;
      if (!this.copyExceptFiles.includes(filePath)) this.fileCount++;

      const _sourcePath = `${sourcePath}/${filePath}`,
        _currentPath = `${currentPath}/${filePath}`;

      // 同步读取文件状态
      const stat = fs.statSync(_sourcePath);

      // 如果当前读取的是文件且不是 package.json
      if (stat.isFile() && filePath !== 'package.json') {
        const readStream = fs.createReadStream(_sourcePath);
        const writeStream = fs.createWriteStream(_currentPath);

        readStream.pipe(writeStream);
        green(`resolve file: ${_currentPath}`);
        this.fileCount--;
      } else if (stat.isDirectory()) {// 如果读取的是文件夹
        if (!this.copyExceptFiles.includes(filePath)) {
          this.dirCount++;
          this.handleDirectory(_sourcePath, _currentPath, callBack);
        }
      }
    });
  },
  /**
   * @name: handleDirectory
   * @description: 处理文件夹深复制
   * @param {string} sourcePath
   * @param {string} currentPath
   * @param {CopyFilesType} copyFunc
   * @param {void} callBack
   * @return null
   */
  handleDirectory: function (sourcePath: string, currentPath: string, callBack: () => void): void {
    // 判断当前目录下是否有该文件夹
    if (fs.existsSync(currentPath)) {
      this.copyFiles(sourcePath, currentPath, callBack);
    } else {
      fs.mkdirSync(currentPath);

      this.fileCount--;
      this.dirCount--;

      this.copyFiles(sourcePath, currentPath, callBack);
      green(`create directory: ${sourcePath}`);

      // 深复制完成之后
      this.copyIsDone(callBack);
    }
  },
  /**
   * @name: copyIsDone
   * @description: 处理复制完成之后
   * @param {function} callBack
   * @return null
   */
  copyIsDone: function (callBack: () => void): void {
    console.log(this.fileCount, this.readDirCount, this.fileCount);
    if (this.fileCount === 0 && this.readDirCount === 0 && this.fileCount === 0) {
      green('\n👌 完成复制，准备安装依赖...');

      // 执行回调
      if (callBack) callBack();
    }
  }
}