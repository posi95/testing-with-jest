/*
Write some code that Roman numbers into their modern equivalent.
The Romans were a clever bunch. They conquered most of Europe and
ruled it for hundreds of years. They invented concrete and straight
roads and even bikinis. One thing they never discovered though was
the number zero. This made writing and dating extensive histories of
their exploits slightly more challenging, but the system of numbers they
came up with is still in use today. For example the BBC uses Roman numerals
to date their programmes.
The Romans wrote numbers using letters - I, V, X, L, C, D, M.
Notice that these letters have lots of straight lines and are hence
easy to hack into stone tablets.

 1  => I
10  => X
 7  => VII

There is no need to be able to convert numbers larger than about 3000.
(The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each digit
separately starting with the left most digit and skipping any digit with a
value of zero.

To see this in practice, consider the example of 1990.
In Roman numerals, 1990 is MCMXC:

1000=M
900=CM
90=XC
2008 is written as MMVIII:

2000=MM
8=VIII
*/

class RomanNumeral {
  constructor(num) {
    this.number = Number(num);
  }

  lessThan10(num) {
    let numerals = {
      0: '',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX'
    };

    let numeral = numerals[num];
    return numeral;

  }

  lessThan100(num) {
    let tenth = (Math.floor(num / 10)) * 10;
    let onth = num % 10;
    let tens = {
      0: '',
      10: 'X',
      20: 'XX',
      30: 'XXX',
      40: 'XL',
      50: 'L',
      60: 'LX',
      70: 'LXX',
      80: 'LXX',
      90: 'XC'
    };

    let numeral = tens[tenth];
    numeral += this.lessThan10(onth);
    return numeral;

  }

  lessThan1000(num) {
    let hundredth = Math.floor(num / 100) * 100;
    let tens = num % 100;
    let hundreds = {
      0: '',
      100: 'C',
      200: 'CC',
      300: 'CCC',
      400: 'CD',
      500: 'D',
      600: 'DC',
      700: 'DCC',
      800: 'DCCC',
      900: 'CM'
    };

    let numeral = hundreds[hundredth];
    numeral += this.lessThan100(tens);
    return numeral;
  }

  upTo3000(num) {
    let thousandth = Math.floor(num / 1000) * 1000;
    let hundreds = num % 1000;
    let thousands = {
      0: '',
      1000: 'M',
      2000: 'MM',
      3000: 'MMM'
    };

    let numeral = thousands[thousandth];
    numeral += this.lessThan1000(hundreds);
    return numeral;
  }

  toRoman() {
    return this.upTo3000(this.number);
  }
}

module.exports = RomanNumeral;