// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

// Iteration #2: Find longest word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function checkIfNull(array) {
  if (array.length === 0) {
    return null;
  }
}

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  const clonedArray = [...words];
  const sortedArray = clonedArray.sort(function (a, b) {
    return b.length - a.length;
  });
  return sortedArray[0];
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((a, b) => a + b, 0);
}

// Iteration #4: Calculate the average

function sum(array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  let value = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      value = array[i].length;
    } else if (typeof array[i] === 'boolean') {
      value = array[i] ? 1 : 0;
    } else if (typeof array[i] === 'object') {
      throw Error("Unsupported data type sir or ma'am");
    } else {
      value = array[i];
    }
    sum += value;
  }
  return sum;
}

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) {
    return null;
  }
  return sum(array) / array.length;
}

// Level 2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(array) {
  if (array.length === 0) {
    return null;
  }
  return sum(array) / array.length;
}

function avg(array) {
  if (array.length === 0) {
    return null;
  }
  const average = sum(array) / array.length;
  const averageRounded = +average.toFixed(2);
  return averageRounded;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  if (array.length === 0) {
    return null;
  }
  const uniquifiedArray = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
  return uniquifiedArray;
}

// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(array, word) {
  if (array.length === 0) {
    return null;
  }
  return array.includes(word);
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// Iteration #8: Bonus

function howManyTimes(array, word) {
  return array.filter(element => element === word).length;
}

const matrix = [
  [
    08,
    02,
    22,
    97,
    38,
    15,
    00,
    40,
    00,
    75,
    04,
    05,
    07,
    78,
    52,
    12,
    50,
    77,
    91,
    08
  ],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    04,
    56,
    62,
    00
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    03,
    49,
    13,
    36,
    65
  ],
  [
    52,
    70,
    95,
    23,
    04,
    60,
    11,
    42,
    69,
    24,
    68,
    56,
    01,
    32,
    56,
    71,
    37,
    02,
    36,
    91
  ],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80
  ],
  [
    24,
    47,
    32,
    60,
    99,
    03,
    45,
    02,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70
  ],
  [
    67,
    26,
    20,
    68,
    02,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    08,
    40,
    91,
    66,
    49,
    94,
    21
  ],
  [
    24,
    55,
    58,
    05,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72
  ],
  [
    21,
    36,
    23,
    09,
    75,
    00,
    76,
    44,
    20,
    45,
    35,
    14,
    00,
    61,
    33,
    97,
    34,
    31,
    33,
    95
  ],
  [
    78,
    17,
    53,
    28,
    22,
    75,
    31,
    67,
    15,
    94,
    03,
    80,
    04,
    62,
    16,
    14,
    09,
    53,
    56,
    92
  ],
  [
    16,
    39,
    05,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    00,
    17,
    54,
    24,
    36,
    29,
    85,
    57
  ],
  [
    86,
    56,
    00,
    48,
    35,
    71,
    89,
    07,
    05,
    44,
    44,
    37,
    44,
    60,
    21,
    58,
    51,
    54,
    17,
    58
  ],
  [
    19,
    80,
    81,
    68,
    05,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    04,
    89,
    55,
    40
  ],
  [
    04,
    52,
    08,
    83,
    97,
    35,
    99,
    16,
    07,
    97,
    57,
    32,
    16,
    26,
    26,
    79,
    33,
    27,
    98,
    66
  ],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    03,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69
  ],
  [
    04,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    08,
    46,
    29,
    32,
    40,
    62,
    76,
    36
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    04,
    36,
    16
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    01,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    05,
    54
  ],
  [
    01,
    70,
    54,
    71,
    83,
    51,
    54,
    69,
    16,
    92,
    33,
    48,
    61,
    43,
    52,
    01,
    89,
    19,
    67,
    48
  ]
];

function greatestProduct(matrix) {
  let rows = matrix[0].length;
  let columns = matrix.length;
  let maxProduct = 0;
  // Going through each row, multiply 4 elements in each column
  for (let row = 0; row <= rows - 1; row++) {
    for (let column = 0; column <= columns - 4; column++) {
      let product =
        matrix[row][column] *
        matrix[row][column + 1] *
        matrix[row][column + 2] *
        matrix[row][column + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  // Going through each column, multiply 4 elements in each row
  for (let column = 0; column <= columns - 1; column++) {
    for (let row = 0; row <= rows - 4; row++) {
      let product =
        matrix[row][column] *
        matrix[row + 1][column] *
        matrix[row + 2][column] *
        matrix[row + 3][column];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
}

function greatestProductOfDiagonals(matrix) {
  let rows = matrix[0].length;
  let columns = matrix.length;
  let maxProduct = 0;
  // Going through each row

  for (let row = 0; row <= rows - 4; row++) {
    for (let column = 0; column <= columns - 4; column++) {
      let product =
        matrix[row][column] *
        matrix[row + 1][column + 1] *
        matrix[row + 2][column + 2] *
        matrix[row + 3][column + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  // Going through each row in reverse
  for (let row = rows.length; row <= 3; row--) {
    for (let column = 0; column <= 3; column--) {
      let product =
        matrix[row][column] *
        matrix[row - 1][column - 1] *
        matrix[row - 2][column - 2] *
        matrix[row - 3][column - 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
}
