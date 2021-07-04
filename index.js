// var usersArray = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// console.log(usersArray);

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         if (this.potions.includes(potionName)) {
//             return `Potion ${potionName} is already equipped!`;
//         }

//         this.potions.push(potionName);
//     },
//     removePotion(potionName) {
//         const potionIndex = this.potions.indexOf(potionName);

//         if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.potions.indexOf(oldName);

//         if (potionIndex === -1) {
//             return `Potion ${oldName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     updatePotionName(oldName, newName) {
//         // Change code below this line
//         const oldPotionIndex = this.potions.indexOf(oldName)

//         this.potions.splice(oldPotionIndex, 1, newName);
//         // Change code above this line
//     },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     removePotion(potionName) {
//         // Change code below this line
//         const oldPotionIndex = this.potions.indexOf(potionName)
//         console.log(oldPotionIndex)
//         this.potions.splice(oldPotionIndex, 1)
//             // Change code above this line
//     },
// };
// atTheOldToad.removePotion("Dragon breath")
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     addPotion(potionName) {
//         // Change code below this line
//         this.potions.push(potionName)
//             // Change code above this line
//     },
// };
// atTheOldToad.addPotion('Invisibility')
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//     // Change code below this line
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     getPotions() {
//         const value = Object.values(this.potions);
//         return value
//     }
//     // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const oldBookIndex = this.books.indexOf(oldName)

//         const newBookIndex = this.books.indexOf(newName)
//         console.log(oldBookIndex);
//         console.log(newBookIndex);
//         this.books.splice(oldBookIndex, 1, newName);

//         // Change code above this line
//     },
// };
// bookShelf.updateBook("The last kingdom", "Dune")
// console.log(bookShelf.books);

// const bookShelf = {
//     // Change code below this line
//     books: ['The last kingdom', 'The guardian of dreams'],
//     getBooks() {
//         return 'Returning all books';
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return "Deleting book ${bookName}"
//     },
//     updateBook(oldName, newName) {
//         return "Updating book ${oldName} to ${newName}"
//     }
//     // Change code above this line
// };
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// function findMatches(firstArray, ...restArgs) {
//     const matches = []; // Don't change this line

//     for (let arg of restArgs) {

//         if (firstArray.includes(arg)) {
//             matches.push(arg)
//         }
//     }
//     // Change code above this line
//     return matches;
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > firstNumber) {
//             total += arg;
//         }
//     }

//     return total;
//     // Change code above this line
// }
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// function add(...args) {
//     console.log(args);
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg

//     }
//     return sum
// }

// console.log(add(12, 4, 11, 48));
// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     // Change code below this line
//     return { completed, category, priority, ...data, }
//     // Change code above this line
// }
// console.log(makeTask({}));
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast

//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));
// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };

// const {
//     today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { high: highTomorrow, low: lowTomorrow, icon: TomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
// } = forecast;
// console.log(highToday);
// console.log(TomorrowIcon);

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки

//     for (const product of products) {
//         const keys = Object.values(product);

//         if (keys.includes(productName)) {
//             return (keys[1] * keys[2]);
//         }

//     }
//     return 0

//     // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Radar"));
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const AllPropValues = [];

//     for (const product of products) {
//         const keys = Object.keys(product);
//         console.log(keys);
//         if (keys.includes(propName)) {
//             AllPropValues.push(product[propName])
//         }
//         // console.log(AllPropValues);
//     }

//     return AllPropValues;
//     // Change code above this line
// }

// console.log(getAllPropValues("price"));
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         // productList.push(Object.values(products.name));
//         // console.log(product);
//         if (product.name === productName) {
//             console.log(product.price);
//             return product.price
//         }
//     }
//     return null;
//     // Change code above this line
// }

// console.log(getProductPrice("Grip"));
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//     rgbColors.push(color.rgb);
//     console.log(rgbColors);
//     hexColors.push(color.hex);
//     console.log(hexColors);
// }

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     const values = Object.values(salaries)
//     console.log(values);
//     for (const salary of values)
//         totalSalary += salary;
//     // Change code above this line
//     return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;

//     // for (const key in object) {
//     //     if (object.hasOwnProperty(key)) {
//     //         propCount += 1;
//     //     }
//     // }

//     // return propCount;

//     const keys = Object.keys(object);
//     console.log(keys);
//     for (const key of keys)
//         propCount += 1;
//     return propCount;

//     // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key])
// }
// console.log(values);
// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     const countArray = [];
//     for (const key in object)
//         if (object.hasOwnProperty(key)) {
//             countArray.push(key)
//             console.log(countArray);
//             propCount = countArray.length;

//         }
//         // Change code above this line
//     return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
//     console.log(keys);
//     console.log(values);

// }

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line
// console.log(lastTag);
// console.log(numberOfTags);
// console.log(lastTag);

// function includes(array, value) {
//     // Change code below this line
//     for (const data of array) {
//         if (data === value) {
//             return (data === value)
//         }

//     } return false
// }
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));

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
