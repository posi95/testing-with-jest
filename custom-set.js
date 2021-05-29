"use strict";

class CustomSet {
  constructor(item) {
    this.arr = [];
    if (item) this.arr.push(...item);
  }

  isEmpty() {
    if (this.arr.length === 0) return true;
    else return false;
  }

  contains(arg) {
    if (this.arr.includes(arg)) return true;
    else return false;
  }

  isSubset(object) {
    if (this.arr.length === 0) {
      return true;
    } else if (this.arr.length !== 0 && object.arr.length === 0) {
      return false;
    } else {
      let result = true;
      for (let i = 0; i < this.arr.length; i++) {
        if (!(object.arr.includes(this.arr[i]))) {
          result = false;
        }
      }
      return result;
    }
  }

  isDisjoint(object) {
    if (this.arr.length === 0) return true;
    else if (this.arr.length !== 0 && object.arr.length === 0) {
      return true;
    } else {
      let result = true;
      for (let i = 0; i < this.arr.length; i++) {
        if ((object.arr.includes(this.arr[i]))) {
          result = false;
        }
      }
      return result;
    }
  }

  isSame(object) {
    if (this.arr.length === 0 && object.arr.length === 0) {
      return true;
    } else if (this.arr.length === 0 && object.arr.length !== 0) {
      return false;
    } else if (this.arr.length !== 0 && object.arr.length == 0) {
      return false;
    } else {
      let ourTest = this.arr.slice().sort();
      let objectTest = object.arr.slice().sort();
      let result = true;
      for (let i = 0; i < ourTest.length; i++) {
        if (ourTest[i] !== objectTest[i]) result = false;
      }

      return result;
    }
  }

  add(elem) {
    if (!(this.arr.includes(elem))) {
      this.arr.push(elem);
    }

    return new CustomSet(this.arr);
  }

  intersection (object) {
    let arrr = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (object.arr.includes(this.arr[i])) {
        arrr.push(this.arr[i]);
      }
    }
    return new CustomSet(arrr);
  }

  difference(object) {
    let arrr = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (!(object.arr.includes(this.arr[i]))) {
        arrr.push(this.arr[i]);
      }
    }
    return new CustomSet(arrr);
  }

  union(object) {
    let arrr = this.arr.slice();
    for (let i = 0; i < object.arr.length; i++) {
      if (!(arrr.includes(object.arr[i]))) {
        arrr.push(object.arr[i]);
      }
    }
    return new CustomSet(arrr);
  }
}


module.exports = CustomSet;