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