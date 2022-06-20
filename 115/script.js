let btn = document.getElementById('myButton');
let list = document.getElementById('list');
let inputEl = document.getElementById('toDo');

btn.addEventListener('click', () => {
    const getliValue = inputEl.value;

    const newLi = document.createElement('li');
    newLi.innerHTML = getliValue;
    list.appendChild(newLi);

    inputEl.value = '';
});