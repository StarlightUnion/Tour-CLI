/**
 * type
 */
export type CLIVoid = (text: string, isConsole?: boolean) => unknown // colorCli 定义
export type NPM = (cwd?: string, callBack?: () => void) => void // npm
export type CreateQuestionsReturnType = BaseCreateResult
  | CreateResult;

/**
 * 定义接口类型
 */
 // 彩色命令行对象
export interface ColorCLI {
  [keyName: string]: CLIVoid
}

// create命令执行返回结果
export interface BaseCreateResult {
  /**
   * 是否创建
   */
  readonly start: string,
  /**
   * 项目名称
   */
  readonly name: string,
  /**
   * 作者
   */
  readonly author: string,
}

export interface CreateResult extends BaseCreateResult {
  /**
   * 框架类型
   */
  readonly type: string,
  /**
   * 是否使用typescript
   */
  readonly ts?: string
}

/**
 * 定义枚举类型
 */
// 前端框架类型
export enum FrontEndFrameType {
  /**
   * vue 2.x
   */
  // vue2 = 'vue2',
  /**
   * vue 3.x
   */
  vue3 = 'vue3',
  /**
   * react
   */
  react = 'react'
}