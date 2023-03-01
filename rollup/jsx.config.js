import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: './esm/jsx.js',
  plugins: [
    nodeResolve(),
    terser({
      format: {
        comments: false
      }
    })
  ],
  output: {
    file: './jsx.js',
    format: 'module'
  }
};
