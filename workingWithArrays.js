const length = 5;
const min = -10;
const max = 10;
const randomNumbersArray1 = [];

for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbersArray1.push(randomNumber);
};

const format1 = randomNumbersArray1.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

const randomNumbersArray2 = [];

for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbersArray2.push(randomNumber);
};

const format2 = randomNumbersArray2.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("First array:", format1);
console.log("Second array:", format2);

// 1.

const countOfEvenNumbers = randomNumbersArray1.filter(n => n % 2 === 0);
const sumOfEvenNumbers = countOfEvenNumbers.reduce((a, b) => a + b, 0);

console.log(`\n1. Count of even numbers: ${countOfEvenNumbers.length}, sum of even numbers: ${sumOfEvenNumbers}.\n`);

// 2.

const arithmeticMean = randomNumbersArray1.reduce((a, b) => a + b, 0) / randomNumbersArray1.length;
const aboveAverage = randomNumbersArray1.filter(n => n > arithmeticMean);

console.log(`2. Arithmetic mean: ${arithmeticMean}, count of numbers which are greater than the arithmetic mean: ${aboveAverage.length}\n`);

// 3.

console.log("3. First array:", format1);
console.log("Second array:", format2);

const sumArrays = [];

for (let i = 0; i < randomNumbersArray1.length; i++) {
    sumArrays.push(randomNumbersArray1[i] + randomNumbersArray2[i]);
};

const format3 = sumArrays.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("Sum of identical indices of two arrays:", format3);
console.log('');

// 4.

console.log("4. First array:", format1);

const length4 = 4;
const randomNumbersArray4 = [];

for (let i = 0; i < length4; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbersArray4.push(randomNumber);
};

const format41 = randomNumbersArray4.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("Second array:", format41);

const combinedArray = [...randomNumbersArray1, ...randomNumbersArray4];

const format42 = combinedArray.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("Concatenation of two arrays:", format42);
console.log('');

// 5.

console.log("5. Array:", format1);

let minIndex = 0;
let maxIndex = 0;

for (let i = 1; i < randomNumbersArray1.length; i++) {
    if (randomNumbersArray1[i] < randomNumbersArray1[minIndex]) {
        minIndex = i;
    };

    if (randomNumbersArray1[i] > randomNumbersArray1[maxIndex]) {
        maxIndex = i;
    };
};

const minimum = Math.min(...randomNumbersArray1);
const maximum = Math.max(...randomNumbersArray1);

console.log("Minimum:", minimum);
console.log("Maximum:", maximum);

let replace = randomNumbersArray1[minIndex];
randomNumbersArray1[minIndex] = randomNumbersArray1[maxIndex];
randomNumbersArray1[maxIndex] = replace;

const format5 = randomNumbersArray1.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("Minimum and maximum are swapped:", format5);
console.log('');

// 6.

console.log("6. Array:", format1);

const positiveArray = randomNumbersArray1.filter(n => n >= 0);
const negativeArray = randomNumbersArray1.filter(n => n < 0);

const format61 = positiveArray.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);
const format62 = negativeArray.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("Positive array:", format61);
console.log("Negative array:", format62);
console.log('');

// 7.

let arr7 = [-9, 2, 0, 5, -9, -4, 5];

const format71 = arr7.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("7. Array:", format71);

const minNum = Math.min(...arr7);
const maxNum = Math.max(...arr7);

let countMin = 0;
let countMax = 0;

for (let i = arr7.length - 1; i >= 0; i--) {
    if (arr7[i] === minNum) {
        countMin++;
        if (countMin > 1) arr7.splice(i, 1);
    };

    if (arr7[i] === maxNum) {
        countMax++;
        if (countMax > 1) arr7.splice(i, 1);
    };
};

const format72 = arr7.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("Array with deleted duplicates of minimum and maximum:", format72);
console.log('');

// 8.

console.log("8. First array:", format1);
console.log("Second array:", format2);

const arithmeticMean81 = randomNumbersArray1.reduce((a, b) => a + b, 0) / randomNumbersArray1.length;
const arithmeticMean82 = randomNumbersArray2.reduce((a, b) => a + b, 0) / randomNumbersArray2.length;

const lower = Math.min(arithmeticMean81, arithmeticMean82);
const upper = Math.max(arithmeticMean81, arithmeticMean82);

console.log(`Rounded arithmetic averages of two arrays: ${Math.round(lower)}, ${Math.round(upper)}.`);

const arr8 = [...randomNumbersArray1, ...randomNumbersArray2].filter(n => n >= lower && n <= upper);

const format8 = arr8.map(
    (n, i) => `[element_${i + 1}_value_${n}]`
);

console.log("The array is made by limiting the two arithmetic means:", format8);
