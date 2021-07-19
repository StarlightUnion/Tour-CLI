/**
 * type
 */
export type CLI_VOID = (text: string, isConsole?: boolean) => unknown // colorCli 定义
export type NPM = (cwd?: string, callBack?: () => void) => void // npm

/**
 * 定义接口类型
 */
 // 彩色命令行对象
export interface COLOR_CLI {
  [keyName: string]: CLI_VOID
}

// create命令执行返回结果
export interface CREATE_RESULT {
  readonly start: string,
  readonly name: string,
  readonly author: string,
  readonly type: string,
  readonly ts: string
}

/**
 * 定义枚举类型
 */
// 前端框架类型
export enum FrontEndFrameType {
  /**
   * vue 2.x
   */
  vue2 = 'vue2',
  /**
   * vue 3.x
   */
  vue3 = 'vue3',
  /**
   * react
   */
  react = 'react'
}