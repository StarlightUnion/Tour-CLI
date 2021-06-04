import * as fs from 'fs';
import utils from './utils';
import { CREATE_RESULT } from './def';


const { green } = utils.colorCli();

export default {
  /**
   * @name: packageJsonModify
   * @description: 修改package.json 文件读写操作
   * @param {CREATE_RESULT} res
   * @param {string} path
   * @return {Promise<boolean>}
   */
   packageJsonModify: (res: CREATE_RESULT, path: string): Promise<boolean> => {
    return new Promise((resolve) => {
      fs.readFile(path + '/package.json', (error, data) => {
        if (error) throw error;

        const { author, name } = res;
        let json: string = data.toString();

        json = json
          .replace(/ProjectName/g, name.trim())
          .replace(/ProjectAuthor/g, author.trim());

        const resolvePath = process.cwd() + '/package.json';

        fs.writeFile(resolvePath, Buffer.from(json), (err) => {
          if (err) {
            if (error) throw error;
            resolve(false);
          } else {
            green(`resolve file from ${path} to ${resolvePath}`);
            resolve(true);
          }
        });
      });
    });
  },
  copyFilesToProject()
}