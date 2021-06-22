const service = {
    mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    subscribe(email) {
        this.mailingList.push(email);
        return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe(email) {
        this.mailingList = this.mailingList.filter((e) => e !== email);
        return `Почта ${email} удалена из рассылки.`;
    },
};

function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
// const pizzaPalace = {
//     company: 'Pizza Palace',
// };

// const burgerShack = {
//     company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//     return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer(`Манго`)

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer(`Поли`)
// console.log(burgerShackMessage);
// console.log(pizzaPalaceMessage);


// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
// ];


// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//     // console.log(composeMessage.call(orders[i]));
//     messages.push(composeMessage.apply(orders[i], [i + 1]));
//     console.log(messages);
// }
// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
// ];


// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//     // console.log(composeMessage.call(orders[i]));
//     messages.push(composeMessage.call(orders[i], i + 1));
//     console.log(messages);
// }

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