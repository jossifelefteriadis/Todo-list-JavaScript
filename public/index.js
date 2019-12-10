const btn = document.querySelector('.todo__register__btn');
const undone = document.querySelector('.todo__list__undone');
const done = document.querySelector('.todo__list__done');

const newItem = e => {
  e.preventDefault();
  const text = document.querySelector('.todo__register__input').value;
  if (text === '') {
    return;
  }
  addItem(text);
  document.querySelector('.todo__register__input').value = '';
};

const addItem = text => {
  const li = document.createElement('li');
  li.innerHTML = text;
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('delete__btn');
  removeBtn.innerHTML = 'X';
  li.appendChild(removeBtn);
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

document.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('delete__btn')) {
    event.target.parentElement.style.display = 'none';
  }
});

btn.addEventListener('click', newItem);
