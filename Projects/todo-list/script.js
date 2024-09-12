const input = document.querySelector("input");
const list = document.querySelector(".list")
const addTodo = document.querySelector(".addTodo")

addTodo.addEventListener('click', addTask)

function addTask(){
    if(input.value !== "")
    {
        let todo = input.value.trim();
        console.log(todo);
        var li = document.createElement("li")
        console.log(li);
        li.innerHTML = todo;
        list.appendChild(li)
    }else{
        alert("Please enter todo")
    }
      
}