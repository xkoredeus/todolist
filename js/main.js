document.querySelector('.todo__submit').addEventListener('click', function() {
  let todoText = document.querySelector('.todo__val').value,
      todoList = document.querySelector('.todo__list');
  todoList.insertAdjacentHTML('beforeEnd', '<li>' + todoText + '</li>');
  todoText = '';
});