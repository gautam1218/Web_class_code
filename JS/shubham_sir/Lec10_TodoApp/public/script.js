const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const task = form.children[0].value;
    creteTodo(task);
    form.children[0].value = "";
})

const creteTodo = async (task)=>{
    const res = await axios.post("http://localhost:4000/todo/create",{task:task});
    const data = res.data;
    renderTodos(data.todos);

}

 
const container = document.getElementById("container")

const renderTodos = (todos)=>{
    container.innerHTML = "";
    todos.forEach(todo => {
        const div = document.createElement("div");
        div.className = "todo";
        div.innerHTML = `<h3>${todo.task}</h3>
        <div id=${todo.id}>
            <button class="complete">${todo.status?"complete":"Undo"}</button>
            <button class="delete">Delete</button>
            </div>`
            console.log(div);
            container.append(div)
    });
}

container.addEventListener("click",(e)=>{
    // console.log(e.target);
    const id = e.target.parentElement.id;
    if(e.target.className == "delete"){
        deleteTodo(id);
    } else if (e.target.className == "complete"){
        updateTodo(id)
    }
})


const deleteTodo = async (id)=>{
    let res = await axios.delete(`http://localhost:4000/todo/${id}/delete`);
    const todos = res.data.todos;
    renderTodos(todos);
}
const updateTodo = async (id)=>{
    let res = await axios.put(`http://localhost:4000/todo/${id}/update`);
    const todos = res.data.todos;
    renderTodos(todos);
}


const btns = document.getElementById("btns");
btns.addEventListener("click",(e)=>{
    const id = e.target.id;
    if(id=="completed"){
        filterTodo("completed")
    }else if(id=="pending"){
        filterTodo("pending")
    }else if(id=="delete-completed"){
        //implient api and create function for api call

    }
})

const filterTodo = async (filter)=>{
    const res = await axios.get("http://localhost:4000/todo/filter",{params:{filter:filter}})
}