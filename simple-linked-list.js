/* eslint-disable no-mixed-spaces-and-tabs */

class SimpleLinkedList {
  constructor() {

  }

  static listo = [];

  static fromArray(arr) {
    if (arr == null || arr.length === 0) {
      return new SimpleLinkedList();
    } else {
      arr.reverse();
      arr.forEach(elem => new Element(elem));
    }
    return new SimpleLinkedList();
  }
  size() {
    return SimpleLinkedList.listo.length;
  }

  isEmpty() {
    let len = this.size();
    if (len === 0) return true;
    else return false;
  }

  push(num) {
    return new Element(num);
  }

  peek() {
    let idx = this.size();
    if (idx === 0) return null;
    else return SimpleLinkedList.listo[0].data;
  }

  head() {
    return SimpleLinkedList.listo[0];
  }

  pop() {
    return SimpleLinkedList.listo.shift().data;
  }

  toArray() {
    let test = SimpleLinkedList.listo.slice();
    let ret = [];
    for (let i = 0; i < test.length; i++) {
      ret.push(test[i].data);
    }
    return ret;
  }

  reverse() {
    let test = SimpleLinkedList.listo.slice();
    let ret = [];
    for (let i = 0; i < test.length; i++) {
      ret.push(test[i].data);
    }
    SimpleLinkedList.listo = [];
    ret.forEach(elem => new Element(elem));
    return new SimpleLinkedList();
  }

}

class Element {
  constructor(data, nexx = null) {
    this.data = data;
    this.nexx = nexx;
    if (data !== null) SimpleLinkedList.listo.unshift(this);
  }

  datum() {
    return this.data;
  }

  next() {
    if (this.nexx) return this.nexx;
    else {
      let idx = SimpleLinkedList.listo.findIndex(elem => elem === this);
      if (idx === SimpleLinkedList.listo.length - 1) return null;
      else return SimpleLinkedList.listo[idx + 1];
    }
  }

  isTail() {
    let idx = SimpleLinkedList.listo.findIndex(elem => elem === this);
    if (idx === SimpleLinkedList.listo.length - 1) return true;
    else return false;
  }
}
module.exports = {Element, SimpleLinkedList};
