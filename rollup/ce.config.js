import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: './esm/ce.js',
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
    file: './ce.js',
    format: 'module'
  }
};
