/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
class Clock {
  constructor(hr, min = 0) {
    this.hr = hr;
    this.min = min;
    Clock.times.push(this);
  }

  static at(hor, men = 0) {

    if (men > 59) {
      let count = 0;
      while (men > 59) {
        count += 1;
        men -= 60;
      }
      hor += count;
    }

    if (hor > 23) {
      while (hor > 23) {
        hor -= 24;
      }
    }


    if (hor < 0) {
      while (hor < 0) {
        hor += 24;
      }
    }
    if (men < 0) men += 60;
    let idx;
    function timeExists(hour, minute) {
	 idx = Clock.times.findIndex(time => {
        return time.hr === hour && time.min === minute;
      });

      if (idx >= 0) return true;
      else return false;
    }

    if (timeExists(hor, men)) return Clock.times[idx];
    else return new Clock(hor, men);
  }


  toString() {
    let strhr = String(this.hr);
    let strmin = String(this.min);
    if (strhr.length === 1) strhr = '0' + strhr;
    if (strmin.length === 1) strmin = '0' + strmin;
    return `${strhr}:${strmin}`;
  }

  add(m) {
    this.min += m;
    return Clock.at(this.hr, this.min);
  }

  subtract(m) {
    let count = 0;
    while (m > 59) {
      count += 1;
      m -= 60;
    }
    if (this.min - m < 0) {
      count += 1;
    }
    this.min -= m;
    this.hr -= count;
    return Clock.at(this.hr, this.min);
  }

  isEqual(clock) {
    if (this === clock) return true;
    else return false;
  }

}
Clock.times = [];

module.exports = Clock;