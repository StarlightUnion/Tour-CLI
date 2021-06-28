import * as fs from 'fs';
import utils from './utils';
import { CREATE_RESULT } from './def';


const { green } = utils.colorCli();

export default {
  fileCount: 0, // 文件总数
  dirCount: 0, // 文件夹总数
  readDirCount: 0, // fs读取的文件夹总数
  copyExceptFiles: ['package.json'], // 不需要拷贝的文件
  /**
   * @name: packageJsonModify
   * @description: 修改package.json 文件读写操作
   * @param {CREATE_RESULT} res
   * @param {string} path
   * @return {Promise<boolean>}
   */
  packageJsonModify: function (res: CREATE_RESULT, path: string): Promise<boolean> {
    return new Promise((resolve) => {
      // 同步读取文件
      const data = fs.readFileSync(path + '/package.json');

      const { author, name } = res;
      let json: string = data.toString();

      // 替换 项目名称/作者
      json = json
        .replace(/ProjectName/g, name.trim())
        .replace(/ProjectAuthor/g, author.trim());

      const resolvePath = process.cwd() + '/package.json';

      fs.writeFile(resolvePath, Buffer.from(json), err => {
        if (err) {
          resolve(false);
          throw err;
        } else {
          green(`resolve file from ${path} to ${resolvePath}`);
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
  copyFiles: function (sourcePath: string, currentPath: string, copyCallBack: () => void): void {
    this.readDirCount = 0;
    this.readDirCount++;

    // 同步读取文件夹
    const filePaths = fs.readdirSync(sourcePath);

    this.readDirCount--;

    filePaths.length && filePaths.forEach(filePath => {
      if (!this.copyExceptFiles.includes(filePath)) {
        this.fileCount = 0;
        this.fileCount++;
      }

      const _sourcePath = `${sourcePath}/${filePath}`,
        _currentPath = `${currentPath}/${filePath}`;

      // 同步读取文件状态
      const stat = fs.statSync(_sourcePath);

      // 如果当前读取的是文件且不是 package.json
      if (stat.isFile() && filePath !== 'package.json') {
        const readStream = fs.createReadStream(_sourcePath);
        const writeStream = fs.createWriteStream(_currentPath);

        readStream.pipe(writeStream);
        green(`resolve file from ${_sourcePath} to ${_currentPath}`);
        this.fileCount--;
      }
      // 如果读取的是文件夹
      else if (stat.isDirectory()) {
        if (!this.copyExceptFiles.includes(filePath)) {
          this.dirCount = 0;
          this.dirCount++;
          // dirExist(_sourcePath, _currentPath, this.copyFiles, copyCallBack);
        }
      }
    });
  }
}