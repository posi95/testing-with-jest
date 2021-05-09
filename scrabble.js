/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
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
