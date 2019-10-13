/**
 * ! what I need in a todo-list
 * * add element (done)
 * * complete element (done)
 * * modify text element 
 * * remove element (done)
 * 
 * ! Current version : 1.0.0
 * * add
 * * delete
 * * modify
 * * checkbox complete task
 * 
 * ! Future feature
 * * save data in sync storage.
 */

const btnAddElement = document.getElementById('btnAddElement');
/**
 * add 
 * generate the element and add to the list
 */

var todo = {
  // ADD THE ELEMENT
  add : function(inputTodo, todoList){
    console.log('add')
    const div = document.createElement('div');
    const checkComplete = document.createElement('input');
    const label = document.createElement('label');
    const btnRemove = document.createElement('button');

    div.className = 'todoElement';
    checkComplete.setAttribute('type', 'checkbox');
    label.textContent = inputTodo;
    label.setAttribute('type', 'text');

    checkComplete.addEventListener('change', this.checkCompleteTodo);

    label.addEventListener('click', this.edit); 

    btnRemove.innerText = 'X';
    btnRemove.className = 'btnRmove';
    btnRemove.addEventListener('click', this.removeF)

    div.appendChild(checkComplete);
    div.appendChild(label);
    div.appendChild(btnRemove);
    
    // todo : add here this.syncOnlineTodo
    return todoList.appendChild(div); 
  },
  // REMOVE THE ELEMENT
  removeF : function(){
    console.log('remove')
    let parent = this.parentNode; 
    parent.parentNode.removeChild(parent);
  },
  // EDIT THE TEXT
  edit : function(){
    console.log('edit')
    // when you press ESC the prompt clear the textContent, TEMP store the
    // previous status of the label
    var temp = this.textContent; 
    this.textContent = window.prompt('Edit the task', this.textContent);
    if (this.textContent == ''){
      this.textContent = temp; 
    }
  }, 
  // CHECK COMPLETE TASK 
  checkCompleteTodo: function(){
    console.log('check');
    this.checked ? this.parentNode.classList.add('taskDone') : this.parentNode.classList.remove('taskDone');
  },
  syncOnlineTodo: function(){
    console.log('sync');
  }

}

// 

btnAddElement.addEventListener('click', function(){
  var inputTodo = document.getElementById('inputTodo').value;
  var todoList = document.getElementById('todoList'); 

  // todo: check if the field is empty 

  todo.add(inputTodo,todoList);
}); 