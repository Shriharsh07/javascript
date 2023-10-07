let addTodoButton = document.getElementById('add');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('input');

addTodoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = ''
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function () {
        todocontainer.removeChild(paragraph);
    })
})