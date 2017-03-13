/**
 * Builds the global scripts that should be loaded before the application starts
 * Import the dependencies installed via npm in the `src/app/scripts.js` file.
 * They are going to be resolved using nodes resolve mechanism considering the `browser` and the `main` property of package.json
 */

import nodeResolve from 'rollup-plugin-node-resolve';
import cjsResolve from 'rollup-plugin-commonjs';
import rxjsResolve from './plugins/rollup-plugin-rxjs-resolve';

export default {
  entry: 'src/app/vendors.js',
  dest: 'src/assets/scripts/vendors.js',
  moduleName: 'vendors',
  sourceMap: true,
  format: 'iife',
  context: 'window',
  plugins: [
    rxjsResolve(),
    nodeResolve({
      module: false,
      jsnext: false,
      main: true,
      skip: [],
      browser: true,
      extensions: ['js', 'json'],
      preferBuiltins: true
    }),
    cjsResolve({
      include: 'node_modules/rxjs/**'
    })
  ]
};
