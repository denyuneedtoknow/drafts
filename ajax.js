const refs = {
  form: document.querySelector('#form'),
  search: document.querySelector('#search'),
  container: document.querySelector('.container'),
};
const handlerSubmit = e => {
  e.preventDefault();
  refs.container.innerHTML = '';
  const value = refs.search.value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    .then(response => response.json())
    .then(cocktails => renderCollection(cocktails.drinks))
    .catch(err => console.log('error')); //return возвращает результат, если функция co {}
};

function createItem({ strDrinkThumb, strDrink }) {
  const article = `<article>
<img src='${strDrinkThumb}' alt='${strDrink}'/>
<p>${strDrink}</p>
</article>
`;
  refs.container.insertAdjacentHTML('beforeEnd', article);
}

function renderCollection(arr) {
  arr.forEach(element => createItem(element));
}

// HTTPS!!!

refs.form.addEventListener('submit', handlerSubmit);
