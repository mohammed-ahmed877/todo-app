let todo = document.querySelector("#input")
let btn = document.querySelector("#btn")
let list = document.querySelector("#list")

let task =[]

function addtask () {
 if (todo.value == "") {
  alert("kindly enter some thing")
  
 } else{
  task.push(todo.value)
  console.log(task);
    
 } 
 todo.value=""; 

  showTask();
}

function showTask() {
  list.innerHTML="";
  for (let i = 0; i < task.length; i++) {
    list.innerHTML +=`<li>${task[i]}
    <button onclick="deletetodo(${i})">delete todo</button>
    <button onclick="edittodo(${i})">edit todo</button>
    </li>`
  }
  
}

function deletetodo(index) {
  task.splice(index ,1)
  console.log("todo deletde");
  showTask();

}
 
function edittodo(index) {
  let newtodo= prompt("enter the new todo")
  task[index]= newtodo
  console.log(task);
  showTask()
  
  
}


