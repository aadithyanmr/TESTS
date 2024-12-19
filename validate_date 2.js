const format = 'mm-dd-yyyy';
const date = '29-02-2024';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const YMD = 'yyyy-mm-dd';
const MDY = 'mm-dd-yyyy';
const DMY = 'dd-mm-yyyy';
let day = "";
let month = "";
let year = "";
let validity = true;

if (date.length < 10) {
    validity = false;
}
    
if (date[4] === "-" && date[7] === "-" && format === YMD) {
    day = +(date[8] + date[9]);
    month = +(date[5] + date[6]);
    year = +(date[0] + date[1] + date[2] + date[3]);
} else {
    validity = false;
}

if (date[2] === "-" && date[5] === "-" && format === MDY) {
    day = +(date[3] + date[4]);
    month = +(date[0] + date[1]);
    year = +(date[6] + date[7] + date[8] + date[8]);
} else {
    validity = false;
}

if (date[2] === "-" && date[5] === "-" && format === DMY) {
    day = +(date[0] + date[1]);
    month = +(date[3] + date[4]);
    year = +(date[6] + date[7] + date[8] + date[8]);
} else {
    validity = false;
}

const dayIsZero = day === 0;
const dayGreaterthan31 = day > 31;

const monthIsZero = month === 0;
const monthGreaterThan12 = month > 12;

const yearIsZero = year === 0;
const yearGreaterThan1000 = year > 9999;

const isDivisibleBy400 = (year % 400) === 0;
const isDivisibleBy100 = (year % 100) === 0;
const isDivisibleBy4 = (year % 4) === 0;
const isLeapYear = isDivisibleBy400 || (!isDivisibleBy100 && isDivisibleBy4);

if (dayIsZero || dayGreaterthan31 || monthIsZero || monthGreaterThan12 ) {
    validity = false;
}

if ( yearIsZero || yearGreaterThan1000) {
    validity = false;
}

if (month === 4 || month === 6 || month === 9 || month === 11 && day === 31) {
    validity = false;
}

if (day === 30 || day === 31 && month === 2) {
    validity = false;
}

if (day === 29 && month === 2 && !isLeapYear) {
    validity = false;
}

for (let index = 0; index < date.length; index++) {
    if (date[index] === " ") {
        validity = false;
    }
}

validity = validity ? "valid" : "invalid";
console.log(validity);