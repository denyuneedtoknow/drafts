// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const newArray = firstArray.concat(secondArray)
//     if (newArray.length > maxLength) {
//         console.log(maxLength);
//         return newArray.slice(0, maxLength)
//     }
//     return newArray
//     // Change code above this line
// }
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 6));


// function calculateTotal(number) {
//     // Change code below this line
//     let result = 0
//     for (let i = 1; i <= number; i++) {
//         result += i
//         console.log(result);
//     }

//     // Change code above this line
// }
// calculateTotal(5)


// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i]
//     }
//     // Change code above this line
//     console.log(total);
//     return total;
// }
// calculateTotalPrice([412, 371, 94, 63, 176])

// function findLongestWord(string) {
//     let biggestWord = ''
//     array = string.split(' ')
//     let wordLength = 0
//     let biggestWordLength = 0
//     for (let i = 0; i < array.length; i += 1) {
//         wordLength = array[i].split('').length
//         if (biggestWordLength <= wordLength) {
//             biggestWordLength = wordLength
//             biggestWord = array[i]
//         }
//     }
//     console.log(biggestWord);
//     return biggestWord
// }



// findLongestWord("May the force 88888888 be with you")



// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i = min; i <= max; i += 1) {

//         numbers.push(i)
//     }
//     // Change code above this line

//     return numbers;
// }
// createArrayOfNumbers(29, 34)



// function filterArray(numbers, value) {
//     // Change code below this line
//     let newArray = []


//     for (let i = 0; i < numbers.length; i += 1) {

//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }

//     return newArray

//     // Change code above this line
// }

// filterArray([12, 24, 8, 41, 76], 38)


// function getCommonElements(array1, array2) {
//     let newArray = []
//     // Change code below this line
//     for (let index = 0; index < array1.length; index++) {

//         if (array2.includes(array1[index])) {
//             newArray.push(array1[index])
//         }

//     }
//     console.log(newArray);
//     return newArray


//     // Change code above this line
// }
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])


// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     // for (let i = 0; i < order.length; i += 1) {
//     //     total += order[i];
//     // }
//     for (const item of order) {
//         total += item
//     }
//     // Change code above this line
//     console.log(total);
//     return total;
// }
// calculateTotalPrice([12, 85, 37, 4])

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];

//     for (const number of numbers) {


//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     console.log(filteredNumbers);
//     return filteredNumbers;
//     // Change code above this line
// }
// filterArray([12, 24, 8, 41, 76], 20)


function getEvenNumbers(start, end) {
    // Change code below this line



    // Change code above this line
}