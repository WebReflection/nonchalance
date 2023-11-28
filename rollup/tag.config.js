import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: './esm/tag.js',
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
    file: './tag.js',
    format: 'module'
  }
};
