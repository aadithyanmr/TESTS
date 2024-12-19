const DMY = 'dd-mm-yyyy';
const MDY = 'mm-dd-yyyy';
const YMD = 'yyyy-mm-dd';

const HYPHEN = '-';
const SPACE = ' ';

function occurrences(string, subString) {
  let noOfOccurrence = 0;

  if (subString.length < 1) {
    return 0;
  }

  for (let index = 0; index <= string.length - subString.length; index++) {
    const from = index;
    const to = index + (subString.length - 1);
    if (subString === slice(from, to, string)) {
      noOfOccurrence++;
    }
  }

  return noOfOccurrence;
}

function isNumberInRange(from, to, number) {
  return (number >= from && number <= to);
}

function isFormatValid(format) {
  return (format === DMY || format === MDY || format === YMD);
}

function isHyphenInPosition(hyphen1Index, hyphen2index, date) {
  return date[hyphen1Index] === HYPHEN && date[hyphen2index] === HYPHEN;
}

// dd-mm-yyyy
// 21-10-2-24

function isNumber(char) {
  return (+char + '' === 'NaN');
}

function isHyphen(char) {
  return char === HYPHEN;
}

function isDateFormatValid(format, date) {
  for (let i = 0; i < format.length; i++) {
    const isValid = isHyphen(format[i]) ? isHyphen(date[i]) : isNumber(date[i]);

    if (!isValid) {
      return false;
    }
  }
  return true;
}

// function isDateFormatValid(format, date) {
//   const hyphenCount = occurrences(date, HYPHEN);
//   const isSpacePresent = occurrences(date, SPACE) !== 0;

//   if (date.length !== 10 || hyphenCount !== 2 || isSpacePresent) {
//     return false;
//   }

//   if (format === YMD) {
//     return isHyphenInPosition(4, 7, date);
//   }

//   return isHyphenInPosition(2, 5, date);
// }

function isValidYear(date, year) {
  const isYearInRange = isNumberInRange(1, 9999, year);
}

function isMonthInRange(from, to, date) {
  return slice(from, to, date) > 0 && slice(from, to, date) < 13; // this also
}

function slice(from, to, text) {
  let sliceString = '';
  for (let index = from; index <= to; index++) {
    sliceString = sliceString + text[index];
  }

  return sliceString
}

function getYear(format, date) {
  if (format === DMY || format === MDY) {
    return +slice(6, 9, date);
  }

  return +slice(0, 3, date)
}

function getMonth(format, date) {
  if (format === YMD) {
    return slice(5, 6, date);
  }

  if (format === DMY) {
    return slice(3, 4, date);
  }

  return slice(0, 1, date);
}

function getDay(format, date) {
  if (format === YMD) {
    return slice(8, 9, date);
  }

  if (format === DMY) {
    return slice(0, 1, date);
  }

  return slice(3, 4, date);
}

// main function
function validate(format, date) {
  if (!isFormatValid(format)) {
    return 'invalid format';
  }

  if (!isDateFormatValid(format, date)) {
    return 'date not according to format';
  }

  const year = getYear(format, date);
  const month = getMonth(format, date);
  const day = getDay(format, date)

  if (!isValidYear(format, year)) {
    return 'invalid year';
  }

  // if (!isValidMonth(format, month)) {
  //   return 'invalid month';
  // }

  // if (!isValidDay(format, day)) {
  //   return 'invalid day';
  // }

  return 'valid';
}
// end of my code

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('xx-y-zzzz', '01-01-2020', 'invalid format');
  testValidate('xx-yyy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd--zzz', '01-01-2020', 'invalid format');

  console.log("-----------------------------------------------------");

  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-2 20', 'date not according to format'); //fix
  testValidate('mm-dd-yyyy', '01-01--020', 'date not according to format');

  // testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  // testValidate('mm-dd-yyyy', '13-01-0000', 'invalid month');
  // testValidate('mm-dd-yyyy', '01-60-0000', 'invalid day');
  // testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
}

testAll();