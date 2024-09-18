const input = document.querySelector("input");
const list = document.querySelector(".list")
const addTodo = document.querySelector(".addTodo")
const update = false;
const update2 = true;
addTodo.addEventListener('click', addTask)

function addTask(){
    if(input.value !== "")
    {
        let todo = input.value.trim();
        console.log(todo);
        var li = document.createElement("li")
        li.innerHTML = todo;
        list.appendChild(li);
        var delete_btn = document.createElement("button")
        delete_btn.innerHTML = "Delete";
        li.appendChild(delete_btn);

        li.addEventListener("click", ()=>{
            li.style.textDecoration = "line-through";
        })

        delete_btn.addEventListener("click", ()=>{
            list.removeChild(li);
        })
    }else{
        alert("Please enter todo")
    }
      
}