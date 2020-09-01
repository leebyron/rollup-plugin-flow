'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var someModule = require('some-module');

/*       */

const myClass                                       =
  options => new MyClass(options.value);

class MyClass    extends someModule.SomeClass                          {

          

  constructor(value   ) {
    this.value = value;
  }

  get()    {
    return this.value
  }

}

exports.myClass = myClass;
exports.MyClass = MyClass;
