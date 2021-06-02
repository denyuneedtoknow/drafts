
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


//ПЕНСИЯ

let pension = prompt('введите желаемую пенсию в $');
let percents = prompt('введите процент годовых вашего банка');
let currentAge = prompt('введите ваш возраст на данный момент');
let retirementAge = prompt('в каком возрасте вы хотите выйти на пенсию?');
// вычисляем необходимые средства в банке, дающие ежемесячный доход под % в сумме равной пенсии
let bankSavings = (pension * 12) / (percents * 0.01);
alert(`На вашем банковском счету на момент выхода на пенсию должно находиться $${bankSavings}, чтобы под ${percents}% годовых ежемесячные выплаты составляли желаемую сумму $${pension}`);
// вычисляем ежемесячные взносы в банк, чтобы средства в банке были 
let monthlyEcomomy = bankSavings / 12 / (retirementAge - currentAge);
alert(`Для этого на протяжении оставшихся вам до этого радостного события ${(retirementAge - currentAge)} лет вам стоит откладывать по $${monthlyEcomomy} ежемесячно. Желаем удачи!`);
