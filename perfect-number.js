class PerfectNumber {
  static classify(num) {
    if (num < 1) {
      throw new Error('Invalid number');
    } else {
      let arr = [];
      let i = 1;
      while (i < num) {
        if (num % i === 0) {
          arr.push(i);
        }
        i++;
      }
      let test = arr.reduce((accum, elem) => accum + elem, 0);
      if (test < num) return 'deficient';
      else if (test === num) return 'perfect';
      else if (test > num) return 'abundant';
    }


  }
}

module.exports = PerfectNumber;