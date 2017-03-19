import { resolve } from 'path';
const ROOT_PATH = resolve('.');

/**
 * Resolves rxjs to the correct node_modules folder installed from Github
 */
class Resolve {
  constructor(options){
    this.options = options;
  }
  resolveId(importee, importer){
    if(importee.startsWith('rxjs/')){
      return `${ROOT_PATH}/node_modules/@reactivex/rxjs/dist/es6/${importee.replace('rxjs/', '')}.js`;
    }
  }
}

export default function(config) {
  return new Resolve(config)
};
