'use strict';

class Queue {
  constructor() {
    this._queue = [];
  }

  get size() {
    return this._queue.length;
  }

  _leftIndex(i) {
    return (2 * i) + 1;
  }

  _parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  _rightIndex(i) {
    return (2 * i) + 2;
  }

  _swap(i, j) {
    [this._queue[i], this._queue[j]] = [this._queue[j], this._queue[i]];
  }

  clear() {
    this._queue = [];
    return this;
  }

  forEach(fn) {
    for (const item of this._queue) {
      fn(item);
    }

    return this;
  }

  includes(value) {
    for (const item of this._queue) {
      if (item.value === value) {
        return true;
      }
    }

    return false;
  }

  isEmpty() {
    return this._queue.length === 0;
  }

  peek() {
    return this._queue[0];
  }

  peekPriority() {
    if (this._queue[0]) {
      return this._queue[0].priority;
    }

    return undefined;
  }

  peekValue() {
    if (this._queue[0]) {
      return this._queue[0].value;
    }

    return undefined;
  }

  priorities() {
    const priorities = [];
    this.forEach(item => priorities.push(item.priority));
    return priorities;
  }

  toArray() {
    const array = [];
    this.forEach(item => array.push(item));
    return array;
  }

  toPairs() {
    const pairs = [];
    this.forEach(item => pairs.push(item.toPair()));
    return pairs;
  }

  values() {
    const values = [];
    this.forEach(item => values.push(item.value));
    return values;
  }
}

module.exports = Queue;
