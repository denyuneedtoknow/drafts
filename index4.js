const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
];


function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
}

const messages = [];

for (let i = 0; i < orders.length; i += 1) {
    // console.log(composeMessage.call(orders[i]));
    messages.push(composeMessage.call(orders[i], i + 1));
    console.log(messages);
}

// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//         console.log(Object.values(this.pizzas));
//         if (Object.values(this.pizzas).includes(pizzaName)) {
//             console.log('ok');
//             return onSuccess(pizzaName)
//         } else {
//             console.log('not exist');
//             return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
//         }


//     },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//     return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//     return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);