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