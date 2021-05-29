/*
Write a program that takes a word and a list of possible anagrams and selects
the correct sublist that contains the anagrams of the word.
For example, given the word "listen" and a list of candidates like "enlists",
"google", "inlets", and "banana", the program should return a list
containing "inlets".
Please read the test suite for the exact rules of anagrams.
*/

class Anagram {
  constructor(string) {
    this.string = string;
  }

  compare(str) {
    if (this.string.toLowerCase() === str.toLowerCase()) return false;
    if (str.length !== this.string.length) return false;
    let test = this.string.toLowerCase().slice().split('');
    let str1 = str.slice().toLowerCase().split('');
    for (let i = 0; i < test.length; i++) {
      let idx = str1.findIndex(letter => letter === test[i]);
      if (idx !== -1) {
        str1.splice(idx, 1);
      }
    }
    if (str1.length === 0) return str;
    else return false;
  }


  match(candidates) {
    let arr = [];
    candidates.forEach(word => {
      if (this.compare(word) !== false) {
        arr.push(this.compare(word));
      }
    });

    return arr;
  }
}
module.exports = Anagram;
