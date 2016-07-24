/* @flow */

import { SomeClass } from 'some-module'
import type { SomeInterface } from 'some-module'

export class MyClass<T> extends SomeClass implements SomeInterface {

  value: T

  constructor(value: T) {
    this.value = value
  }

  get(): T {
    return this.value
  }

}
