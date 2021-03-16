'use strict';

const input = document.querySelector('#todo-input');
const submit = document.querySelector('.submit');
const listGroup = document.querySelector('.list-group');

submit.addEventListener('click', addTodo)
listGroup.addEventListener('click', checkDelete);


function addTodo() {
    if (input.value === '') {
        input.classList.add('border-danger');
    } else {
        input.classList.remove('border-danger');
        const list = document.createElement('li');
        list.className = 'list-group-item';
        const inputValue = document.createTextNode(input.value);
        const spanElement = document.createElement('span');
        spanElement.innerHTML = `<i class="fas fa-trash-alt text-danger"></i
        >`;
        spanElement.className = 'close';
        list.appendChild(spanElement);
        list.appendChild(inputValue);
        listGroup.appendChild(list);
    }
    input.value = '';
}

function checkDelete(e) {
    const item = e.target;
    if (item.classList[0] === 'list-group-item') {
        item.classList.toggle('complete');
    }

    if (item.classList[0] === 'close') {
        item.parentElement.remove();
    }
}