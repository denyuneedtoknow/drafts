const getUserNames = users.map((user) => user.name) {

}


console.log(getUserName([
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
]));
///////////////////////////

// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         genres: ['приключения', 'историческое']
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт Шекли',
//         genres: ['фантастика']
//     },
//     {
//         title: 'Красна как кровь',
//         author: 'Ли Танит',
//         genres: ['ужасы', 'мистика']
//     }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);

////////////////////////////

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);

// console.log(titles);

///////////////////////////

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

/////////////////////////////
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newArray = [];
//     numbers.forEach((number) => {
//         if (number % 2 === 0) {
//             let numberEven = number + value
//             console.log(numberEven);
//             newArray.push(numberEven)
//         }
//         else {
//             console.log(number);
//             newArray.push(number)
//         }
//         console.log(newArray);
//     })
//     return newArray
//     // Пиши код выше этой строки
// }

// console.log('result ', changeEven([2, 8, 3, 7, 4, 6], 10));


///////////////////////////

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//////////////////////////

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });

//     return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//////////////////////////

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки


//     firstArray.forEach(function (element) {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     })

//     return commonElements;
//     // Пиши код выше этой строки
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//////////////////////////

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number)
//         }
//     })
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));