/**
 * Provides configuration for ES2015 module bundling of application source code using rollupJS
 */
import babel from 'rollup-plugin-babel';
import angular from 'rollup-plugin-angular'; //https://github.com/cebor/rollup-plugin-angular
// import uglify from 'rollup-plugin-uglify';

export default {
  sourceMap: true,
  entry: 'src/app/index.js',
  dest: 'src/assets/scripts/app.js',
  moduleName: 'hackernews',
  format: 'iife',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    angular()
    // uglify()
  ],
  external: [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/upgrade',
    '@angular/upgrade/static',
    'rxjs/Observable',
    'rxjs/Subject',
    'lodash'
  ],
  globals: {
    '@angular/common' : 'ng.common',
    '@angular/compiler' : 'ng.compiler',
    '@angular/core' : 'ng.core',
    '@angular/forms' : 'ng.forms',
    '@angular/http' : 'ng.http',
    '@angular/platform-browser' : 'ng.platformBrowser',
    '@angular/platform-browser-dynamic' : 'ng.platformBrowserDynamic',
    '@angular/upgrade' : 'ng.upgrade',
    '@angular/upgrade/static' : 'ng.upgrade.static',
    'rxjs/Observable': 'Rx.Observable',
    'rxjs/Subject': 'Rx.Subject',
    'lodash' : '_',
  }
};
