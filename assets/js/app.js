//var output = computeAverageLengthOfWords('code', 'programs');
/*
//Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.
function computeAverageLengthOfWords(word1, word2) {
  let x = word1.length;
  let y = word2.length;
  let average = (x + y) / 2;
  return average;
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6


//getNthElement
//Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
//var output = getNthElement([1, 3, 5], 1);
//console.log(output); // --> 3

function getNthElement(array, n) {
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
function convertDoubleSpaceToSingle(str) {
  let singleSpace = str.split("  ");
  console.log(singleSpace);
  let newString = singleSpace.join(" ")
  return newString;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"



//areValidCredentials
function areValidCredentials(name, password) {
  if (name.length >= 3 || password.length >= 8) {
    return true;

  } else {
    return false;

  }
}
var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output); // --> true



//calculateBillTotal
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
function calculateBillTotal(preTaxAndTipAmount) {

  var salesTax = preTaxAndTipAmount * 0.095;
  var tip = preTaxAndTipAmount * 0.15;

  var total = preTaxAndTipAmount + salesTax + tip;
  return total;

}

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

*/


