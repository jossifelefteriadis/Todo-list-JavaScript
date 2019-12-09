const btn = document.querySelector('.todo__register__btn');
const undone = document.querySelector('.todo__list__undone');
const done = document.querySelector('.todo__list__done');

const newItem = e => {
  e.preventDefault();
  const text = document.querySelector('.todo__register__input').value;
  addItem(text);
  document.querySelector('.todo__register__input').value = '';
};

const addItem = text => {
  const li = document.createElement('li');
  li.innerHTML = text;
  undone.appendChild(li);
};

undone.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    done.appendChild(event.target);
  }
});

done.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    undone.appendChild(event.target);
  }
});

btn.addEventListener('click', newItem);
