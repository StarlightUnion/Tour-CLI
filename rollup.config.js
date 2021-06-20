import path from 'path';
import rollupPluginJson from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import { cleandir } from 'rollup-plugin-cleandir';
import { nodeResolve } from '@rollup/plugin-node-resolve';

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
    './cli.ts'
  ],
  output: {
    dir: './dist',
    format: 'cjs'
  },
  external: [
    'commander',
    'inquirer',
    'chalk'
  ],
  plugins: [
    cleandir('./dist'),
    typescriptPlugin,
    nodeResolvePlugin,
    rollupPluginJson(),
  ],
};

export default rollupConfig;