/*
Write a program that can calculate the Hamming distance between two DNA strands.
A mutation is simply a mistake that occurs during the creation or copying of a
nucleic acid, in particular DNA. Because nucleic acids are vital to cellular
functions, mutations tend to cause a ripple effect throughout the cell.
Although mutations are technically mistakes, a very rare mutation may equip
the cell with a beneficial attribute. In fact, the macro effects of evolution
are attributable by the accumulated result of beneficial microscopic mutations
over many generations. The simplest and most common type of nucleic acid
mutation is a point mutation, which replaces one base with another at a single
nucleotide. By counting the number of differences between two homologous DNA
strands taken from different genomes with a common ancestor, we get a measure
of the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.
This is called the Hamming distance.
*/

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