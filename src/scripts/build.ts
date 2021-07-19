/*
 * @Description: 打包项目
 * @Author: tourist17846
 * @Date: 2021-07-20 00:04:27
 * @LastEditTime: 2021-07-20 00:05:38
 */
import npm from './npm';

const build = (): void => {
  npm('run build')();
};

export default build;