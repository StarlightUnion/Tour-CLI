// type
export type CLI_VOID = (text: string, isConsole?: boolean) => unknown // colorCli 定义
export type CopyFilesType = (sourcePath: string, currentPath: string, callBack: () => void) => void // copyFiles 定义
export type NPM = (cwd?: string, callBack?: () => void) => void // npm

// interface
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

