const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

addBtn.addEventListener('click', addItem);
input.addEventListener('keypress', function(e){ if(e.key === 'Enter') addItem(); });

function addItem() {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text + ' ';
  const remove = document.createElement('button');
  remove.textContent = 'Remove';
  remove.addEventListener('click', () => li.remove());
  li.appendChild(remove);
  list.appendChild(li);
  input.value = '';
}
