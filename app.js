const input = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

//function to add the todo to the list
const genTemplate = (todo) =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i> 
    </li>
`


    //+= allows you to append to list 
    list.innerHTML += html;

};


input.addEventListener('submit',e =>{
    //Stop the page from reloading once the user selects enter
    e.preventDefault();
    const todo = input.add.value.trim();
    if(todo.length > 0){
        genTemplate(todo);
        //resets all input fields within the forum
        input.reset()
    }else{
        alert("Please Enter A Valid Task");
    }
});


//list event listener to delete todos

list.addEventListener('click',e =>{
    //check if the user clicks on the trashcan with the class name delete
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});



//list event listener to put line through todos

list.addEventListener('dblclick',e =>{
    if(!e.target.classList.contains('strike')){
        e.target.classList.add('strike');
    }
    else if(e.target.classList.contains('strike')){
        e.target.classList.remove('strike');
    }
});


//Search todo
const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => {
        return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) =>{
        todo.classList.add('filtered');
    })

    Array.from(list.children)
    .filter((todo) => {
        return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) =>{
        todo.classList.remove('filtered');
    })

};


//Using filter array method
search.addEventListener('keyup', (e) =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
});