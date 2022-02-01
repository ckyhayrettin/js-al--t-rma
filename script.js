let addTodo = document.getElementById('addTodo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearTodo = document.getElementById('clearTodo');

addTodo.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('prg')
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = '';
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through'
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

    clearTodo.addEventListener('click', function(){
        paragraph.remove();
    })
})