/**
 * Provides configuration for ES2015 module bundling of application source code using rollupJS
 */
import babel from 'rollup-plugin-babel';
import angular from 'rollup-plugin-angular'; //https://github.com/cebor/rollup-plugin-angular
import uglify from 'rollup-plugin-uglify';

export default {
  sourceMap: true,
  entry: 'src/app/index.js',
  dest: 'src/assets/scripts/build/app.js',
  moduleName: 'hackernews',
  format: 'iife',
  plugins: [
    angular(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ],
  external: [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    'rxjs/Rx',
    'lodash'
  ],
  globals: {
    '@angular/common' : 'vendors._angular_common',
    '@angular/compiler' : 'vendors._angular_compiler',
    '@angular/core' : 'vendors._angular_core',
    '@angular/forms' : 'vendors._angular_forms',
    '@angular/http' : 'vendors._angular_http',
    '@angular/platform-browser' : 'vendors._angular_platformBrowser',
    '@angular/platform-browser-dynamic' : 'vendors._angular_platformBrowserDynamic',
    '@angular/router' : 'vendors._angular_router',
    'lodash' : 'vendors._',
    'rxjs/Rx' : 'vendors.Rx'
  }
};