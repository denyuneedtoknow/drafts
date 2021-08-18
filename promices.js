// const users = [
//   {
//     name: 'John',
//     active: true,
//   },
//   {
//     name: 'Bob',
//     active: false,
//   },
// ];

// const toggleUserState = (allUsers, userName) => {
//   return new Promise(resolve => {
//     const result = allUsers.map(user => {
//       return user.name === userName ? { ...user, active: !user.active } : user;
//     });
//     resolve(result);
//   });
// };
// toggleUserState(users, 'John').then(result => console.log(result));

// function createAsyncArray(count) {
//   return new Promise((resolve, reject) => {
//     let arr = [];
//     for (let i = 0; i < count; i++) {
//       arr.push(i);
//     }
//     if (arr.length > 10) {
//       resolve(arr.length);
//     } else {
//       reject('error from promise');
//     }
//   });
// }
// Promise.allSettled([createAsyncArray(1000), createAsyncArray(5), createAsyncArray(10000)])
//   .then(result => console.log(result))
// //   .catch(err => console.log('error', err));
// <<<<<<< HEAD


// const delay = ms => {
//   // Твой код
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {

//   return new Promise((resolve, reject) => {
//     const delay = randomIntegerFromInterval(200, 500);

//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;

//       if (canProcess) {
//         resolve({ id: transaction.id, time: delay });
//       } else {
//         reject(transaction.id)
//       }
//     }, delay);
//   });
// }

// const logSuccess = ({ id, time }) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };


// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);

// =======
// >>>>>>> cf7ccef1e3d29daf7df39448e6dc8bbdb023b971
