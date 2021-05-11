/*
Write a program that, given a natural number and a set of
one or more other numbers, can find the sum of all the multiples
of the numbers in the set that are less than the first number.
If the set of numbers is not given, use a default set of 3 and 5.
For instance, if we list all the natural numbers up to, but not including,
20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18.
The sum of these multiples is 78.
*/

class SumOfMultiples {
  constructor(...multiples) {
    this.multiArray = multiples.sort((a, b) => b - a);
  }
  static to(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      if (i % 5 === 0 || i % 3 === 0) {
        arr.push(i);
      }
    }
    if (arr.length === 0) return 0;
    let sum = arr.reduce((accum, elem) => accum + elem, 0);
    return sum;
  }

  to(num) {
    num = Number(num);
    let arr = [];
    this.multiArray.forEach(multiple => {
      for (let i = multiple; i < num; i += multiple) {
        arr.push(i);
      }
    });
    arr = arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) result.push(arr[i]);
    }
    return result.reduce((accum, elem) => accum + elem, 0);
  }

}

module.exports = SumOfMultiples;