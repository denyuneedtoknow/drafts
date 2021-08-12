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

function createAsyncArray(count) {
  return new Promise((resolve, reject) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    if (arr.length > 10) {
      resolve(arr.length);
    } else {
      reject('error from promise');
    }
  });
}
Promise.allSettled([createAsyncArray(1000), createAsyncArray(5), createAsyncArray(10000)])
  .then(result => console.log(result))
  .catch(err => console.log('error', err));
