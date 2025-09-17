const length = 5;
const min = -10;
const max = 10;
const randomNumbersArray = [];

for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbersArray.push(randomNumber);
};

const format = randomNumbersArray.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log(format);

// 1.

const countOfEvenNumbers = randomNumbersArray.filter(n => n % 2 === 0);
const sumOfEvenNumbers = countOfEvenNumbers.reduce((a, b) => a + b, 0);

console.log(`\n1. Count of even numbers: ${countOfEvenNumbers.length}, sum of even numbers: ${sumOfEvenNumbers}.\n`);

// 2.

const arithmeticMean = randomNumbersArray.reduce((a, b) => a + b, 0) / randomNumbersArray.length;
const aboveAverage = randomNumbersArray.filter(n => n > arithmeticMean);

console.log(`2. Arithmetic mean: ${arithmeticMean}, count of numbers which are greater than the arithmetic mean: ${aboveAverage.length}\n`);

// 3.

const arr1 = [3, 21, -9, 0, -4];
const arr2 = [4, -8, 9, 7, 6];

console.log("3. First array:", arr1);
console.log("   Second array:", arr2);

const sumArrays = [];

for (let i = 0; i < arr1.length; i++) {
    sumArrays.push(arr1[i] + arr2[i]);
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

let replace = arr5[minIndex];
arr5[minIndex] = arr5[maxIndex];
arr5[maxIndex] = replace;

console.log("Minimum and maximum are swapped:", arr5);
console.log('');

// 6.

const arr6 = [7, -4, -10, 1, -2];

console.log("6. Array:", arr6);

const positiveArray = arr6.filter(n => n > 0);
const negativeArray = arr6.filter(n => n < 0);

console.log("Positive array:", positiveArray);
console.log("Negative array:", negativeArray);
console.log('');

// 7.

let arr7 = [-9, 2, 0, 5, -9, -4, 5];

console.log("7. Array:", arr7);

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

console.log("Array with deleted duplicates of minimum and maximum:", arr7);
console.log('');

// 8.

const arr81 = [6, 12, 20, 8, -7, -3];
const arr82 = [1, -8, -55, 5, -2, 2];

console.log("8. First array:", arr81);
console.log("   Second array:", arr82);

const arithmeticMean81 = arr81.reduce((a, b) => a + b, 0) / arr81.length;
const arithmeticMean82 = arr82.reduce((a, b) => a + b, 0) / arr82.length;

const lower = Math.min(arithmeticMean81, arithmeticMean82);
const upper = Math.max(arithmeticMean81, arithmeticMean82);

console.log(`Rounded arithmetic averages of two arrays: ${Math.round(lower)}, ${Math.round(upper)}.`);

const arr83 = [...arr81, ...arr82].filter(n => n >= lower && n <= upper);

console.log("The array is made by limiting the two arithmetic means:", arr83);
