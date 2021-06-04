// type
export type CLI_VOID = (text: string, isConsole?: boolean) => unknown

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