let typedInputs = document.getElementById('inputs')

typedInputs.addEventListener("input", function(e){
 const type = e.target
 const val = type.value
//  console.log(val,type);
 

 if(isNaN(val))
 {
    type.value =''
    return;
 }
 if(val)
 {
    const next = type.nextElementSibling;
    if(next)
    next.focus()
 }
})
typedInputs.addEventListener('keyup', function(e){
    const typedDelete = e.target
    
    const keyTyped = e.key.toLocaleLowerCase()
    if(keyTyped === "backspace" || keyTyped === "delete")
    {
        typedDelete.value =''
        const prev = typedDelete.previousElementSibling;
        prev.focus()
    }

})