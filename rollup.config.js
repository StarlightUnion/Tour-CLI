import path from 'path';
import rollupPluginJson from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import packageJson from './package.json';

const pathResolve = _path => path.resolve(__dirname, _path);
const extensions = ['.js', '.ts'];

// ts config
const typescriptPlugin = typescript({
  tsconfig: pathResolve('./tsconfig.json'),
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
const rollupConfig = {
  input: [
    './src/cli.ts'
  ],
  output: {
    dir: './dist',
    format: 'cjs',
    banner: `/**\n* tust - cli v${packageJson.version}\n* Copyright (c) 2021 tourist17846\n* Licensed under the MIT License (MIT)\n*/`
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
};

export default rollupConfig;