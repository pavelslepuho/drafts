'use strict';
// 1
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

// 2
for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i === 13) {
        break;
    }
}

// 3
for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    } else {
        console.log(i);
    }
}

// 4
let i = 2;
while (i <= 16) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

// 5
const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);

// 6
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

let lengthOfArr = arr.length;

for (let i = 0; i < lengthOfArr; i++) {
    result[i] = arr[i];
}
console.log(result);

// 7
const data = [5, 10, 'Shopping', 20, 'Homework'];

let lengthOfData = data.length;

for (let i = 0; i < lengthOfData; i++) {
    if (typeof(data[i]) === "number") {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === "string") {
        data[i] = data[i] + " - done";
    }
}

console.log(data);

// 8
{
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let lengthOfData = data.length;

for (let i = 0; i < lengthOfData; i++) {
    result[i] = data[lengthOfData - i - 1];
}
console.log(result);
}

// 9
let len = 11;
let k;
for (let i = '*'; i.length <= len; i = i + '*' + '*') {
    for (k = ''; k.length <= ((len - i.length) / 2) - 1; k = k + ' '){
    }
    console.log(k + i);
}

// varian_2
const lines = 5;
let result9 = '';

for (let i = 0; i <= 5; i++) {

    for (let j = 0; j < lines - i; j++) {
        result9 += " "; 
    }

    for (let k = 0; k <= i * 2; k++) {
        result9 += "*";
    }
    result9 += "\n";
}

console.log(result9);

// *
for (let i = '*'; i.length < 8; i = i + '*') {
    console.log(i);
}




