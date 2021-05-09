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
