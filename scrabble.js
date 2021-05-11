/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */

/*
Write a program that, given a word, computes the Scrabble score for that word.

Letter Values

You'll need the following tile scores:

Letter Value
A, E, I, O, U, L, N, R, S, T = 1
D, G = 2
B, C, M, P = 3
F, H, V, W, Y = 4
K = 5
J, X = 8
Q, Z = 10
How to Score

Sum the values of all the tiles used in each word. For instance, lets consider
the word CABBAGE which has the following letters and point values:

3 points for C
1 point for each A (there are two)
3 points for B (there are two)
2 points for G
1 point for E
Thus, to compute the final total (14 points), we count:

3 + 2*1 + 2*3 + 2 + 1
=> 3 + 2 + 6 + 3
=> 5 + 9
=> 14

*/
class Scrabble {
  constructor(str) {
    this.str = str;
  }

  static score(word) {
    let test = new Scrabble(word);
    return test.score();
  }

  score() {
    let result = 0;
    if (!this.str) return result;
    else {
      let test = this.str.slice().toLowerCase().split('');
      test.forEach(letter => {
        switch (letter) {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
          case 'l':
          case 'n':
          case 'r':
          case 's':
          case 't':
            result += 1;
            break;

          case 'd':
          case 'g':
            result += 2;
            break;

          case 'b':
          case 'c':
          case 'm':
          case 'p':
            result += 3;
            break;

          case 'f':
          case 'h':
          case 'v':
          case 'w':
          case 'y':
            result += 4;
            break;

          case 'k':
            result += 5;
            break;

          case 'j':
          case 'x':
            result += 8;
            break;

          case 'q':
          case 'z':
            result += 10;
            break;

          default:
            result += 0;
            break;
        }
      });
    }

    return result;
  }
}

module.exports = Scrabble;
