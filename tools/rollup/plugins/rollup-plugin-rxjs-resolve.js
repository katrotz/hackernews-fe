import { resolve } from 'path';
const ROOT_PATH = resolve('.');

class Resolve {
  constructor(options){
    this.options = options;
  }
  resolveId(importee, importer){
    if(importee.startsWith('rxjs/')){
      return `${ROOT_PATH}/node_modules/rxjs/${importee.replace('rxjs/', '')}.js`;
    }
  }
}

export default function(config) {
  return new Resolve(config)
};
