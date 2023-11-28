import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: './esm/builtin.js',
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
    file: './builtin.js',
    format: 'module'
  }
};
