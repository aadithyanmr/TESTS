// ["abc","def","ghi"] => "cfi"
// You are given an array of strings. Write a function to return a single string that is the concatenation of the last character of every string in the array.
const addLastChar = function (string, element) {
  return string + element.slice();
}

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(addLastChar, '');
}

// [[1,-2],[3,4],[5,-6]] => [[3,4]]
// Write a function to return a new array containing only those lists that contain at least one positive number.
const isPositive = function (number) {
  return number > 0;
}

const isAnyPositive = function (array) {
  return array.some(isPositive);
}

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(isAnyPositive, []);
}

// [0,-1,-2,3,4] => 12
// Write a function to calculate the product of all the positive numbers in the array. 0 is not positive.
const multiply = function (a, b) {
  return a * b;
}

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(multiply, 1);
}

// ["educate", "there", "animation"] => "educate"
// Write a function to return the longest string that contains the letter "e". 
const isAnyE = function (string) {
  return string.includes('e');
}

const stringsHaveE = function (array) {
  return array.filter(isAnyE);
}

const longestString = function (string1, string2) {
  return string1.length > string2.length ? string1 : string2;
}

const longestEWord = function (strings) {
  return stringsHaveE(strings).reduce(longestString, '');
}

// [[2, 4, 6], [1, 3, 5], [8, 10]] => false
// [[2,4],[6,8]] => true
// Write a function to check if all lists contain only even numbers. Return `true` if they do, and `false` otherwise.
const isEven = function (number) {
  return (number & 1) === 0;
}

const isEveryEven = function (array) {
  return array.every(isEven);
}

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(isEveryEven);
}

// [1,2,3,4] => 10 (sqr(1) + sqr(3))
// Write a function to calculate the sum of the squares of all the odd numbers in the array
const isOdd = function (number) {
  return (number & 1) === 1;
}

const add = function (num1, num2) {
  return num1 + num2;
}

const square = function (number) {
  return number * number;
}

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.filter(isOdd).map(square).reduce(add, 0);
}

// ["abc","def"] => true
// ["abc","de"] => false
// Write a function to check if all strings have the same length. Return `true` if they do, and `false` otherwise. 
const areAllOfSameLength = function (listOfStrings) {

  const isSame = function (element) {
    return element.length === listOfStrings[0].length;
  }

  return listOfStrings.every(isSame);
}

// [1,2,3,4,1,2] => [1,2,3,4]
// Write a function to return a new array with all duplicate values removed. 
const pushIfNotPresent = function (array, element) {

  if (!array.includes(element)) {
    array.push(element);
  }

  return array;
}

const removeDuplicates = function (numbers) {
  return numbers.reduce(pushIfNotPresent, []);
}

// ["ant", "eye", "id"] => true
// ["ant","bat"] => false
// Write a function to check if all the strings in the array start with a vowel. Return `true` if they do, and `false` otherwise.
const isStartingWithVowel = function (string) {
  const firstChar = string[0];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return vowels.includes(firstChar);
}

const allStartWithAVowel = function (words) {
  return words.every(isStartingWithVowel)
}

// [1,2,3,4] => [1,3,6,10]
// [1,1,4,5] => [1,2,6,11]
// Build an array where each element is the running sum of the elements up to that index.
const pushSum = function (array, element) {
  array.push(array.at(-1) + element);

  return array;
}

const runningTotal = function ([first, ...numbers]) { // [1,2,3] => [1,3, 6]
  if (first === undefined) {
    return [];
  }

  return numbers.reduce(pushSum, [first]);
}

// [] => [[]]
// [1] => [[1]]
// [1,2] => [[1,2]]
// [1,2,3] => [[1,2],[3]]
// [1,2,3,4] => [[1,2],[3,4]]
// Write a function to pair up elements of a list. 
const makePair = function (array, element) {
  if (array.at(-1).length !== 2) {
    array.at(-1).push(element);

    return array
  }

  array.push([element])

  return array;
}

const pairs = function (list) {
  return list.reduce(makePair, [[]]);
}

console.log(allLastChars([""]), "");
console.log(allLastChars(["abc", "def", "ghi"]), "cfi");
console.log(allLastChars(["abcd", "defg", "ghij"]), "dgj");

console.log(listsWithPositiveNumbers([[-1, -2], [-3, -4], [-5, -6]]), []);
console.log(listsWithPositiveNumbers([[-1, -2], [3, 4], [-5, -6]]), [[3, 4]]);
console.log(listsWithPositiveNumbers([[1, -2], [3, 4], [5, -6]]), [[1, -2], [3, 4], [5, -6]]);

console.log(productOfPositives([-1, -2]), 1);
console.log(productOfPositives([0, -1, -2, 3, 4]), 12);
console.log(productOfPositives([0, -1, -2, 3, 4, -2]), 12);
console.log(productOfPositives([0, -1, -2, 3, 4, -2, 2]), 24);

console.log(longestEWord(["educate", "there", "animation"]), "educate");
console.log(longestEWord(["educate", "there", "animation", "something big with an e"]), "something big with an e");

console.log(areAllListsEven([[2, 4, 6], [8, 12], [8, 10]]), true);
console.log(areAllListsEven([[2, 4, 6], [1, 3, 5], [8, 10]]), false);

console.log(sumOfSquaresOfOdds([1, 2, 3, 4]), 10);
console.log(sumOfSquaresOfOdds([1, 2, 3, 4, 5]), 35);

console.log(areAllOfSameLength(["abc", "def"]), true);
console.log(areAllOfSameLength(["abc", "defg"]), false);

console.log(removeDuplicates([2, 2, 2, 2]), [2]);
console.log(removeDuplicates([1, 2, 3, 4, 1, 2]), [1, 2, 3, 4]);
console.log(removeDuplicates([1, 2, 3, 4, 1, 2, 5]), [1, 2, 3, 4, 5]);

console.log(allStartWithAVowel(["ant", "eye", "id"]), true);
console.log(allStartWithAVowel(["ant", "eye", "fid"]), false);

console.log(runningTotal([]), []);
console.log(runningTotal([1]), [1]);
console.log(runningTotal([1, 2, 3, 4]), [1, 3, 6, 10]);
console.log(runningTotal([1, 2, 3, 4, 5]), [1, 3, 6, 10, 15]);

console.log(pairs([]), [[]]);
console.log(pairs([1]), [[1]]);
console.log(pairs([1, 2]), [[1, 2]]);
console.log(pairs([1, 2, 3]), [[1, 2], [3]]);
console.log(pairs([1, 2, 3, 4]), [[1, 2], [3, 4]]);