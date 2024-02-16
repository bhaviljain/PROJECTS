let textinputfield = document.querySelector("#text-input-field")
let addButton = document.querySelector("#add-button")
let todoContainer = document.querySelector(".todos-container")


addButton.addEventListener("click", ()=>{

 if(textinputfield.value.trim().length == "")
  return;

  const todoitemcontainer = document.createElement("div")
  todoitemcontainer.classList.add("todo-item-container")

  todoContainer.appendChild(todoitemcontainer)

  const todoText = document.createElement("p")
  todoText.id = "todo-text"
  todoText.innerText = textinputfield.value
  todoitemcontainer.appendChild(todoText)
  
  todoText.addEventListener("click", () =>{
    todoText.classList.add("todo-text-line")
    editbtn.setAttribute("disabled", "disabled")

  })


  const editbtn = document.createElement("button")
  editbtn.id = "edit-btn"  
  editbtn.innerText = "✎"
  todoitemcontainer.appendChild(editbtn)
  editbtn.addEventListener("click",()=>{
    textinputfield.value = todoText.innerHTML;
    const parent  = editbtn.parentElement
    parent.remove()

    
  })
  


  const deletebtn = document.createElement("button")
  deletebtn.id = "delete-btn"
  deletebtn.innerText = "🗑"
  todoitemcontainer.appendChild(deletebtn)

  textinputfield.value = "";

  deletebtn.addEventListener("click",()=>{
  const parent  = deletebtn.parentElement
  parent.remove()
  

  })


})



