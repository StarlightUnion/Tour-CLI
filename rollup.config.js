import path from 'path';
import rollupPluginJson from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { version } from './package.json';

const pathResolve = _path => path.resolve(__dirname, _path);
const extensions = ['.js', '.ts'];

// ts config
const typescriptPlugin = typescript({
  tsconfig: pathResolve('./tsconfig.json'),
  useTsconfigDeclarationDir: true,
  tsconfigOverride: {
    compilerOptions: {
      module: 'ESNext'
    }
  },
});

// nodeResolve config
const nodeResolvePlugin = nodeResolve({
  extensions,
  modulesOnly: true,
  preferredBuiltins: false
});

// 配置导出
const rollupConfig = [
  {
    input: [
      './src/cli.ts'
    ],
    output: {
      dir: './dist',
      format: 'cjs',
      interop: false,
      banner: `/**\n* tust - cli v${version}\n* Copyright (c) 2021 tourist17846\n* Licensed under the MIT License (MIT)\n*/`
    },
    external: [
      'commander',
      'inquirer',
      'chalk',
      'which'
    ],
    plugins: [
      typescriptPlugin,
      nodeResolvePlugin,
      rollupPluginJson()
    ],
  },
  {
    input: './types/cli.d.ts',
    output: [{
      file: './dist/cli.d.ts',
      format: 'es'
    }],
    plugins: [
      dts()
    ]
  }
];

export default rollupConfig;