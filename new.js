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

function findLongestWord(string) {
    let biggestWord = ''
    array = string.split(' ')
    let wordLength = 0
    let biggestWordLength = 0
    for (let i = 0; i < array.length; i += 1) {
        wordLength = array[i].split('').length
        if (biggestWordLength <= wordLength) {
            biggestWordLength = wordLength
            biggestWord = array[i]
        }
    }
    console.log(biggestWord);
    return biggestWord
}



findLongestWord("May the force 88888888 be with you")