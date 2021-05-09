class DNA {
  constructor(sequence = '') {
    this.sequence = sequence;
  }

  hammingDistance(str) {
    let count = 0;
    str = str.split('');
    let seq = this.sequence.slice();
    seq = seq.split('');
    if (seq.length < str.length) {
      str.length = seq.length;
    } else if (str.length < seq.length) {
      seq.length = str.length;
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== seq[i]) count += 1;
    }

    return count;
  }
}

module.exports = DNA;