const todoList = document.getElementById('todo-list')
const submitBtn = document.getElementById('submit-button')
const text = document.getElementById('text')

submitBtn.addEventListener('click',submit)

function submit(e) {
  const li = document.createElement('li')
  const input = text.value
  li.textContent = input
  text.value = ""
  todoList.appendChild(li)
}