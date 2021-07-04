import * as fs from 'fs';
import * as path from 'path';
import utils from './utils';
import { CREATE_RESULT } from './declare';


const { yellow, red } = utils.colorCli();

export default {
  copyExceptFiles: ['package.json'], // 不需要拷贝的文件
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

      fs.writeFile(resolvePath, Buffer.from(json), error => {
        if (error) {
          resolve(false);
          throw error;
        } else {
          yellow(`\nresolve file: ${resolvePath}`);
          resolve(true);
        }
      });
    });
  },
  /**
   * @name: createDirectory
   * @description: 判断当前文件夹是否存在，不存在则创建
   * @param {string} currentPath 当前工作目录
   * @param {string} directoryName 文件夹名称
   * @return {string} 文件夹地址
   */
    createDirectory: function (currentPath: string, directoryName?: string): string {
    const directoryPath = directoryName ? `${currentPath}/${directoryName}` : currentPath;

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath);
      yellow(`create directory: ${directoryPath}`);
    }

    return directoryPath;
  },
  /**
   * @name: copyDirectory
   * @description: 处理文件夹的复制
   * @param {string} sourcePath
   * @param {string} currentPath
   * @param {void} copyCallBack
   * @return null
   */
  copyDirectory: function (sourcePath: string, currentPath: string, callBack: () => void): void {
    fs.readdir(sourcePath, (error, filePaths) => { // 同步读取文件夹
      let fileCount = 0;

      // 检查当前文件夹是否复制完成
      const checkFileCount = (): void => {
        // TODO: 解决回调无法执行的问题
        ++fileCount === this.computeFileCount(filePaths) && callBack && callBack();
        console.log(fileCount, this.computeFileCount(filePaths));
      };

      if (error) {
        checkFileCount();
        return;
      }

      this.createDirectory(currentPath);

      filePaths.length && filePaths.forEach(filePath => {
        if (!this.copyExceptFiles.includes(filePath)) fileCount++;

        const _sourcePath = path.join(sourcePath, filePath),
          _currentPath = path.join(currentPath, filePath);

        // 同步读取文件状态
        const stat = fs.statSync(_sourcePath);

        // 如果当前读取的是文件且不是 package.json
        if (stat.isFile() && !this.copyExceptFiles.includes(filePath)) {
          this.copyFiles(_sourcePath, _currentPath, checkFileCount);
        } else if (stat.isDirectory() && !this.copyExceptFiles.includes(filePath)) {// 如果读取的是文件夹
          this.copyDirectory(_sourcePath, _currentPath, checkFileCount);
        }
      });
    });
  },
  /**
   * @name: copyFiles
   * @description: 处理文件的复制
   * @param {string} sourcePath
   * @param {string} currentPath
   * @param {function} callBack
   * @return null
   */
  copyFiles: function (sourcePath: string, currentPath: string, callBack: () => void): void {
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(currentPath);

    readStream.on('error', error => {
      if (error) red(`read file: ${sourcePath} error`);
      callBack && callBack();
    });

    writeStream.on('error', error => {
      if (error) red(`write file: ${currentPath} error`);
      callBack && callBack();
    });

    writeStream.on('close', () => {
      yellow(`resolve file: ${currentPath}`);
      callBack && callBack();
    });

    readStream.pipe(writeStream);
  },
  computeFileCount: function (filePaths: string[]): number {
    return filePaths.length - filePaths
      .filter(path => this.copyExceptFiles.includes(path))
      .length;
  }
}