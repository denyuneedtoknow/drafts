function includes(array, value) {
    // Change code below this line
    for (const data of array) {
        if (data === value) {
            return (data === value)
        }


    } return false
}
console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));



// function findNumber(start, end, divisor) {


//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             return i;

//         }
//     }

// }
// console.log(findNumber(8, 17, 3));


// function getEvenNumbers(start, end) {

//     let newArray = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             console.log('четное', i);
//             newArray.push(i)
//         }
//     }
//     return newArray
// }
// console.log(getEvenNumbers(3, 11));




// function filterArray(numbers, value) {

//     const filteredNumbers = [];


//     for (const number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;


// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// function getCommonElements(array1, array2) {
//     let newArray = []
//     for (let i = 0; i <= array1.length; i += 1) {
//         console.log(array1[i]);
//         if (array2.includes(array1[i])) {
//             console.log('совпадение', array1[i]);
//             newArray.push(array1[i])
//             console.log(newArray);
//         }
//     } return newArray
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));



// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("pine"));

// function filterArray(numbers, value) {

//     let newArray = [];
//     for (let i = 0; i <= numbers.length; i += 1) {

//         if (numbers[i] > value) {


//             newArray.push(numbers[i])

//         }
//     }
//     return newArray

// }
// console.log(filterArray([5, 7, 3, 9, 16], 3));


// function findLongestWord(string) {

//     const array = string.split(" ");
//     console.log(array);
//     let bigWord = array[0];
//     for (let i = 0; i <= (array.length - 1); i += 1) {

//         console.log(array[i]);
//         console.log(`Длина слова: ${array[i].length}`);

//         if (bigWord.length < array[i].length) {
//             console.log(`${array[i]} is bigger`);
//             bigWord = array[i];
//         }
//         console.log(bigWord);

//     }
//     return bigWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i <= (order.length - 1); i += 1) {
//         total += order[i];
//         console.log(total);
//     }
//     // Change code above this line
//     return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function slugify(title) {
//     // Change code below this line
//     return title.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("Arrays for begginers"));


// let array = [1, 2, 3, 6, 15, -5];
// let arrayLast = array.length - 1;
// console.log(arrayLast);
// let deleted = array.splice(1, (array.length - 2));
// console.log(array);

// let numbers = [1, 2, 3, 6, 15, -5];

// for (const number of numbers) {
//     if (number > 1) {
//         console.log(number);
// //     } else {
// //         console.log(`Число ${number} не подойдет`)
// //     }
// // }

// let title = 'Arrays for begginers';
// console.log(title);

// function slugify(title) {
//   // Change code below this line
//   let normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(' ')
//   console.log(words)
//   return
// }
// slugify("Hello world");
// let sentence = prompt("enter your sentence");
// slugify(sentence);

// const badWords = ['fuck', 'shit']

// for (const badWord of badWords) {

//   if (sentence.includes(badWord)) {
//     alert('hey, be polite')
//     break;
//   }
//   alert('greetings, stranger')
// }


// const firstArray = ["Mango", "Poly", "Ajax"]
// const secondArray = ["Neptune", "Uranus", "Venus"]
// let maxLength = 8;
// let newArray = firstArray.concat(secondArray) // плюсуем 2 массива
// let arrayLength = newArray.length // получаем число (его длину)
// console.log(arrayLength)
// if (arrayLength > maxLength) {
//   //сравниваем длину с заданной величиной
//   console.log(maxLength);
// }
// else {
//   console.log(newArray)
//   // return newArray;
// }


// //ПЕНСИЯ

// let pension = prompt('введите желаемую пенсию в $');
// let percents = prompt('введите процент годовых вашего банка');
// let currentAge = prompt('введите ваш возраст на данный момент');
// let retirementAge = prompt('в каком возрасте вы хотите выйти на пенсию?');
// let years = retirementAge - currentAge;
// // вычисляем необходимые средства в банке, дающие ежемесячный доход под % в сумме равной пенсии
// let bankSavings = (pension * 12) / (percents * 0.01);
// alert(`На вашем банковском счету на момент выхода на пенсию должно находиться $${bankSavings}, чтобы под ${percents}% годовых ежемесячные выплаты составляли желаемую сумму $${pension}`);
// // вычисляем ежемесячные взносы в банк, чтобы средства в банке были 
// let monthlyEcomomy = bankSavings / 12 / years;

// alert(`Для этого на протяжении оставшихся вам до этого радостного события ${years} лет вам стоит откладывать по $${Math.round(monthlyEcomomy)} ежемесячно. Желаем удачи!`);

// // Сложные проценты

// for (let i = 0; i <= years; i += 1) {
//     monthlyEcomomy += monthlyEcomomy * percents * 0.01
//     console.log(Math.round(monthlyEcomomy));
// }
