// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    previousProduct = 1;
    for (var i = 0; i < x.length; i++) {
      previousProduct = x[i] * previousProduct;
    }
    return previousProduct;
  }