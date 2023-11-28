import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: './esm/core.js',
  plugins: [
    nodeResolve(),
    terser({
      format: {
        comments: false
      }
    })
  ],
  output: {
    esModule: true,
    file: './core.js',
    format: 'module'
  }
};
