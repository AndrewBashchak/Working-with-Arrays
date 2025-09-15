const length = 5;
const min = -10;
const max = 10;
const randomNumbersArray = [];

for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbersArray.push(randomNumber);
};

const format1 = randomNumbersArray.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log(format1);

// 1.

const countOfEvenNumbers = randomNumbersArray.filter(n => n % 2 === 0);
const sumOfEvenNumbers = countOfEvenNumbers.reduce((a, b) => a + b, 0);

console.log(`\n1. Count of even numbers: ${countOfEvenNumbers.length}, sum of even numbers: ${sumOfEvenNumbers}.\n`);

// 2.

const arithmeticMean = randomNumbersArray.reduce((a, b) => a + b, 0) / randomNumbersArray.length;
const aboveAverage = randomNumbersArray.filter(n => n > arithmeticMean);

console.log(`2. Arithmetic mean: ${arithmeticMean}, count of numbers which are greater than the arithmetic mean: ${aboveAverage.length}\n`);

// 3.

const arr31 = [3, 21, -9, 0, -4];
const arr32 = [4, -8, 9, 7, 6];

console.log("3. First array:", arr31);
console.log("   Second array:", arr32);
console.log('');

const sumArrays = [];

for (let i = 0; i < arr31.length; i++) {
    sumArrays.push(arr31[i] + arr32[i]);
};

console.log("Sum of identical indices of two arrays:", sumArrays);
console.log('');

// 4.

const arr41 = [1, 3, 5];
const arr42 = [7, 9];

const combinedArray = [...arr41, ...arr42];

console.log("4. Concatenation of two arrays:", combinedArray);
console.log('');

// 5.

let arr5 = [-3, 12, 5, 0, -8];

console.log("5. Array:", arr5);
console.log('');

let minIndex = 0;
let maxIndex = 0;

for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] < arr5[minIndex]) {
        minIndex = i;
    };

    if (arr5[i] > arr5[maxIndex]) {
        maxIndex = i;
    };
};

const minimum = Math.min(...arr5);
const maximum = Math.max(...arr5);

console.log("Minimum:", minimum);
console.log("Maximum:", maximum);
console.log('');

let replace = arr5[minIndex];
arr5[minIndex] = arr5[maxIndex];
arr5[maxIndex] = replace;

console.log("Minimum and maximum are swapped:", arr5);
console.log('');

// 6.

const arr6 = [7, -4, -10, 1, -2];

console.log("6. Array:", arr6);
console.log('');

const positiveArray = arr6.filter(n => n > 0);
const negativeArray = arr6.filter(n => n < 0);

console.log("Positive array:", positiveArray);
console.log("Negative array:", negativeArray);

// 7.

let arr7 = [-9, 2, 0, 5, -9, -4, 5];

console.log("7. Array:", arr7);
console.log('');

const min7 = Math.min(...arr7);
const max7 = Math.max(...arr7);

let countMin = 0;
let countMax = 0;

for (let i = arr7.length - 1; i >= 0; i--) {
  if (arr7[i] === min7) {
    countMin++;
    if (countMin > 1) arr7.splice(i, 1);
  };

  if (arr7[i] === max7) {
    countMax++;
    if (countMax > 1) arr7.splice(i, 1);
  };
};

console.log("Array with removed duplicates of minimum and maximum:", arr7);
console.log('');

// 8.
