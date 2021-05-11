/*
Write a program that can generate the lyrics of the 99 Bottles of Beer song.
See the test suite for the entire song.
*/

class BeerSong {
  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  static verse(num) {
    let lyrics = `${num} bottles of beer on the wall, ${num} bottles of beer.\n` + `Take one down and pass it around, ${num - 1} bottles of beer ` + `on the wall.\n`;
    if (num === 1) {
      lyrics = `${num} bottle of beer on the wall, ${num} bottle of beer.\n` + `Take it down and pass it around, no more bottles of beer ` + `on the wall.\n`;
    } else if (num === 2) {
      lyrics = `${num} bottles of beer on the wall, ${num} bottles of beer.\n` + `Take one down and pass it around, ${num - 1} bottle of beer ` + `on the wall.\n`;
    } else if (num === 0) {
      lyrics = `No more bottles of beer on the wall, no more ` + `bottles of beer.\nGo to the store and buy some ` + `more, 99 bottles of beer on the wall.\n`;
    }


    return lyrics;

  }

  static verses(start, end) {
    let i = start;
    let lyrics = '';
    while (i > end) {
      lyrics += BeerSong.verse(i) + '\n';
      i--;
    }

    lyrics += BeerSong.verse(end);
    return lyrics;
  }


}
module.exports = BeerSong;

