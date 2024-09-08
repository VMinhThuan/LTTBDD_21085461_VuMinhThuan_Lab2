// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function getDistinctElements(arr) {
    return Array.from(new Set(arr));
}
document.write('<h3>Distinct Elements:</h3>');
document.write(getDistinctElements([1, 2, 2, 3, 4, 5, 5]).join(', '));

// 28. Calculate the sum of first 100 prime numbers and return them in an array
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumFirstNPrimes(n) {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes.reduce((a, b) => a + b, 0);
}
document.write('<h3>Sum of First 100 Primes:</h3>');
document.write(sumFirstNPrimes(100));

// 29. Print the distance between the first 100 prime numbers
function primeDistances() {
    const primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes.slice(1).map((val, index) => val - primes[index]);
}
document.write('<h3>Distances Between First 100 Primes:</h3>');
document.write(primeDistances().join(', '));

// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
function addLargeNumbers(num1, num2) {
    let carry = 0;
    let result = '';
    let length1 = num1.length;
    let length2 = num2.length;
    let maxLength = Math.max(length1, length2);

    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    if (carry) result = carry + result;
    return result;
}
document.write('<h3>Add Large Numbers:</h3>');
document.write(addLargeNumbers('123456789012345678901234567890', '987654321098765432109876543210'));

// 31. Create a function that will return the number of words in a text
function wordCount(text) {
    return text.split(/\s+/).filter(Boolean).length;
}
document.write('<h3>Word Count:</h3>');
document.write(wordCount('This is a sample text with several words.'));

// 32. Create a function that will capitalize the first letter of each word in a text
function capitalizeWords(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
document.write('<h3>Capitalized Words:</h3>');
document.write(capitalizeWords('this is a sample text'));

// 33. Calculate the sum of numbers received in a comma delimited string
function sumFromCommaDelimitedString(str) {
    return str.split(',').map(Number).reduce((a, b) => a + b, 0);
}
document.write('<h3>Sum from Comma Delimited String:</h3>');
document.write(sumFromCommaDelimitedString('1,2,3,4,5'));

// 34. Create a function that returns an array with words inside a text
function extractWords(text) {
    return text.split(/\s+/).filter(Boolean);
}
document.write('<h3>Extracted Words:</h3>');
document.write(extractWords('This is a sample text with several words.').join(', '));

// 35. Create a function to convert a CSV text to a “bi-dimensional” array
function csvToArray(csv) {
    return csv.trim().split('\n').map(row => row.split(','));
}
document.write('<h3>CSV to Array:</h3>');
document.write(JSON.stringify(csvToArray('name,age\nAlice,30\nBob,25')));

// 36. Create a function that converts a string to an array of characters
function stringToArray(str) {
    return Array.from(str);
}
document.write('<h3>String to Array of Characters:</h3>');
document.write(stringToArray('hello').join(', '));

// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
function stringToAsciiArray(str) {
    return Array.from(str).map(char => char.charCodeAt(0));
}
document.write('<h3>String to ASCII Array:</h3>');
document.write(stringToAsciiArray('hello').join(', '));

// 38. Create a function that will convert an array containing ASCII codes in a string
function asciiArrayToString(arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}
document.write('<h3>ASCII Array to String:</h3>');
document.write(asciiArrayToString([104, 101, 108, 108, 111]));

// 39. Implement the Caesar cypher
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = (char === char.toUpperCase()) ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}
document.write('<h3>Caesar Cipher:</h3>');
document.write(caesarCipher('Hello World', 3));

// 40. Implement the bubble sort algorithm for an array of numbers
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
document.write('<h3>Bubble Sort:</h3>');
document.write(bubbleSort([64, 34, 25, 12, 22, 11, 90]).join(', '));

// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
document.write('<h3>Distance Between Points:</h3>');
document.write(calculateDistance(0, 0, 3, 4));

// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return distance <= r1 + r2;
}
document.write('<h3>Are Circles Intersecting?</h3>');
document.write(areCirclesIntersecting(0, 0, 5, 3, 4, 5));

// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
function extractColumn(matrix, col) {
    return matrix.map(row => row[col]);
}
document.write('<h3>Extract Column:</h3>');
document.write(extractColumn([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], 1).join(', '));

// 44. Create a function that will convert a string containing a binary number into a number
function binaryToNumber(binaryStr) {
    return parseInt(binaryStr, 2);
}
document.write('<h3>Binary to Number:</h3>');
document.write(binaryToNumber('1011'));

// 45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels)
function sumJaggedArray(arr) {
    return arr.reduce((sum, item) => {
        if (Array.isArray(item)) {
            return sum + sumJaggedArray(item);
        } else {
            return sum + item;
        }
    }, 0);
}
document.write('<h3>Sum of Jagged Array:</h3>');
document.write(sumJaggedArray([1, [2, [3, 4]], 5]));

// 46. Find the maximum number in a jagged array of numbers or array of numbers
function maxJaggedArray(arr) {
    return arr.reduce((max, item) => {
        if (Array.isArray(item)) {
            return Math.max(max, maxJaggedArray(item));
        } else {
            return Math.max(max, item);
        }
    }, -Infinity);
}
document.write('<h3>Maximum in Jagged Array:</h3>');
document.write(maxJaggedArray([1, [2, [3, 4]], 5]));

// 47. Deep copy a jagged array with numbers or other arrays in a new array
function deepCopyJaggedArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}
document.write('<h3>Deep Copy of Jagged Array:</h3>');
document.write(JSON.stringify(deepCopyJaggedArray([1, [2, [3, 4]], 5])));

// 48. Create a function to return the longest word in a string
function longestWord(text) {
    return text.split(/\s+/).reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
document.write('<h3>Longest Word:</h3>');
document.write(longestWord('This is a sample text with various word lengths.'));

// 49. Shuffle an array of strings
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
document.write('<h3>Shuffled Array:</h3>');
document.write(shuffleArray(['apple', 'banana', 'cherry', 'date']).join(', '));

// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
function uniqueRandomNumbers(n) {
    const numbers = [];
    while (numbers.length < n) {
        const num = Math.floor(Math.random() * n) + 1;
        if (!numbers.includes(num)) numbers.push(num);
    }
    return numbers;
}
document.write('<h3>Unique Random Numbers:</h3>');
document.write(uniqueRandomNumbers(10).join(', '));

// 51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.
function letterFrequency(str) {
    const frequency = {};
    for (const char of str) {
        if (char.match(/[a-z]/i)) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    return Object.entries(frequency);
}
document.write('<h3>Letter Frequency:</h3>');
document.write(JSON.stringify(letterFrequency('Hello World')));

// 52. Calculate Fibonacci(500) with high precision (all digits)
function fibonacci(n) {
    const fib = [BigInt(0), BigInt(1)];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n].toString();
}
document.write('<h3>Fibonacci(500):</h3>');
document.write(fibonacci(500));

// 53. Calculate 70! with high precision (all digits)
function factorial(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result.toString();
}
document.write('<h3>70!:</h3>');
document.write(factorial(70));