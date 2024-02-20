const todoList = [];
renderTodoList();

function renderTodoList(){  
  let todoListHTML = '';
  for(let i = 0; i < todoList.length; i++){
    const todoObj = todoList[i];
    //const name = todoObj.name;    
    //const dueDate = todoObj.dueDate;
    const {name , dueDate} = todoObj;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>   
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        ">delete</button>`;  
    todoListHTML += html;
    console.log(todoListHTML);
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodo(){
  inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({name: name, dueDate: dueDate});
  console.log(todoList);
  inputElement.value = ''; 
  renderTodoList(); 
} 
  /*i = 0;
  todoList.push(arrayIndex[i]);
  console.log(todoList);
  i++;
}*/

function enterOnKey(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}