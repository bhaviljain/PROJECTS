let result = document.getElementById('result')
let text1 = document.getElementById('text-input')
let btn = document.getElementById('btn')
let con = document.getElementById('container')
let btn2 = document.getElementById('btn2')
function shownotes() {
    container.innerHTML = localStorage.getItem("text1")
}
shownotes()


function updateStorage() {
    localStorage.setItem("text1", container.innerHTML)
}


function fun1()
{  
    
    let inputbox = document.createElement('P')
    inputbox.id = 'input-box'
    result.innerHTML = text1.value 
    container.appendChild(result).appendChild(inputbox)
    updateStorage()

    
}



btn.addEventListener("click" ,fun1)
// reset.addEventListener('click' , resetIt)

