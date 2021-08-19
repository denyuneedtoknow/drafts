const refs = {
  form: document.querySelector('#form'),
  search: document.querySelector('#search'),
  container: document.querySelector('.container'),
};

const gitHandler = e => {
  e.preventDefault();
  const value = refs.input.value;
  fetch(
    `https://api.github.com/search/users?q=${value}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${page}`,
  );
};
