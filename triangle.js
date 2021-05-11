/*
Write a program to determine whether a triangle is equilateral,
isosceles, or scalene. An equilateral triangle has all three sides
the same length. An isosceles triangle has exactly two sides of the same length.
A scalene triangle has all sides of different lengths.
Note: For a shape to be a triangle at all, all sides must be of length > 0, and
the sum of the lengths of any two sides must be greater than the length of
 the third side.
*/
function sideIsIllegal(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return true;
  } else return false;
}

function triangleIsIllegal(a, b, c) {
  let arr = [a, b, c];
  arr.sort((a, b) => a - b);
  if ((arr[0] + arr[1]) <= arr[2]) {
    return true;
  } else return false;
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (sideIsIllegal(side1, side2, side3)) {
      throw new Error(`A side can't have 0 degrees.`);
    }
    if (triangleIsIllegal(side1, side2, side3)) {
      throw new Error(`The triangle is Illegal`);
    }
  }

  kind() {
    if (this.side1 === this.side2 && this.side1 === this.side3) {
      return 'equilateral';
    } else {
      let arr = [this.side1, this.side2, this.side3];
      arr.sort((a, b) => a - b);
      if (arr[0] !== arr[1] && arr[1] !== arr[2]) {
        return 'scalene';
      } else return 'isosceles';
    }
  }
}


module.exports = {
  Triangle,
  triangleIsIllegal,
  sideIsIllegal
};
