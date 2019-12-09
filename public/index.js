const btn = document.querySelector('.todo__register__btn');
const undone = document.querySelector('.todo__list__undone');

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

btn.addEventListener('click', newItem);
