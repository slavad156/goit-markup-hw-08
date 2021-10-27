(() => {
  document.querySelector('.js-speaker-form-subs').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
    e.currentTarget.reset();
  });
})();

(() => {
  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));

    e.currentTarget.reset();
  });
})();
