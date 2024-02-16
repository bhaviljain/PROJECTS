let usernameText = document.getElementById('username')
let addUserBtn = document.getElementById('addUser')
let addBtn = addUserBtn.innerText
let recordDisplay = document.getElementById("records")
let btnClear = document.getElementById('clear')
let edit_id = null

let userArray = []

let obStr = localStorage.getItem('userArray')
if(obStr != null){
    userArray = JSON.parse(obStr)
}
function saveInfo(userArray)
{
  let str = JSON.stringify(userArray);
  localStorage.setItem('userArray', str);
}
addUserBtn.addEventListener('click',function(e){
   e.preventDefault()
   const name = usernameText.value;

   if(edit_id!=null){
   userArray.splice(edit_id, 1,{"name":name});
   edit_id = null
   }
   else{
    userArray.push({"name": name});
   }
   
    saveInfo(userArray);
    usernameText.value = ''
    displayInfo() 
    addUserBtn.innerHTML= `${addBtn}` 


    // console.log(userArray);
})


function displayInfo(){

    let display = ''
    userArray.forEach((user,index) =>{
        display += `<tr>
        <th scope="row"></th>
        <td>${user.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info  mx-4" onclick="editInfo(${index})"></i> 
        <i class="btn btn-danger text-white fa fa-trash" onclick="Deleteinfo(${index})"></i>
        </td>
      </tr>`
    })
    recordDisplay.innerHTML = display;
}
// btnClear.addEventListener('click',function(e){
//     e.preventDefault()
//     recordDisplay.innerHTML = ''
// })
displayInfo()

function editInfo(id)
{
  edit_id = id;
  usernameText.value = userArray[id].name;
  addUserBtn.innerText = "save changes"  

}


function Deleteinfo(id){
  userArray.splice(id,1)
  saveInfo(userArray)
  displayInfo()
}
