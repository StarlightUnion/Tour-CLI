/*
 * @Description: 启动项目
 * @Author: tourist17846
 * @Date: 2021-07-19 23:40:08
 * @LastEditTime: 2021-07-20 00:17:15
 */
import npm from './npm';

const start = (): void => {
  npm('run dev')();
};

export default start;