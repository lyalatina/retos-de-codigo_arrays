//var output = computeAverageLengthOfWords('code', 'programs');

//Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.
computeAverageLengthOfWords = (word1, word2) => {
  let x = word1.length;
  let y = word2.length;
  let average = (x + y) / 2;
  return average;
}

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6


//getNthElement
//Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
//var output = getNthElement([1, 3, 5], 1);
//console.log(output); // --> 3

getNthElement = (array, n) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n); {
      return array[n]
    }
  }
  return undefined
}
let output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3


//convertDoubleSpaceToSingle
//function convertDoubleSpaceToSingle(str) {
convertDoubleSpaceToSingle = (str) => {
  let singleSpace = str.split("  ");
  console.log(singleSpace);
  let newString = singleSpace.join(" ")
  return newString;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);



//areValidCredentials
areValidCredentials = (name, password) => {
  if (name.length >= 3 || password.length >= 8) {
    return true;

  } else {
    return false;

  }
}
let output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output); // --> true



//calculateBillTotal
let output = calculateBillTotal(20);
console.log(output); // --> 24.9
calculateBillTotal = (preTaxAndTipAmount) => {

  let salesTax = preTaxAndTipAmount * 0.095;
  let tip = preTaxAndTipAmount * 0.15;

  let total = preTaxAndTipAmount + salesTax + tip;
  return total;

}

//filterOddElements
filterOddElements = (arr) => {

  var newNumbers = [];

  for (let num = 0; num < arr.length; num++) {
    if (arr[num] % 2 !== 0) {
      newNumbers.push(arr[num]);
    }
  }
  return newNumbers;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);



//findPairForSum
findPairForSum = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === number) {
        return [array[i], array[j]];
      }
    }
  }
}

let pair = findPairForSum([4, 34, 3, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]



//computeSumOfAllElements
computeSumOfAllElements = (arr) => {
  let suma = 0;
  for (let i in arr) {
    suma = suma + arr[i]
  }
  return suma;
}


let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6

