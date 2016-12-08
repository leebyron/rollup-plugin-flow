'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var someModule = require('some-module');

/*       */

class MyClass    extends someModule.SomeClass                          {

          

  constructor(value   ) {
    this.value = value
  }

  get()    {
    return this.value
  }

}

exports.MyClass = MyClass;