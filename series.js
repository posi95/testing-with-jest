/*
Write a program that will take a string of digits and return all
the possible consecutive number series of a specified length in that string.
For example, the string "01234" has the following 3-digit series:

012
123
234
Likewise, here are the 4-digit series:

0123
1234
Finally, if you ask for a 6-digit series from a 5-digit string, you should
throw an error.
*/

class Series {
  constructor(str) {
    this.str = str;
  }

  slices(subs) {
    if (subs > this.str.length) throw new Error();
    let arr = [];
    let test = this.str.slice().split('').map(num => Number(num));
    for (let i = 0; i <= this.str.length - subs; i++) {
      let subElem = test.slice().splice(i, subs);
      arr.push(subElem);

    }

    return arr;
  }
}

module.exports = Series;

