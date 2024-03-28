let increment = document.getElementById('increment')
let add = document.getElementById('add')
let sub = document.getElementById('sub')
let reset = document.getElementById('reset')
let currValue = document.getElementById('number')
let incrementValue = 1;

increment.addEventListener('change',(e)=>{
 incrementValue = parseInt(e.target.value)
//  console.log(incrementValue);
})
add.addEventListener('click',(e)=>{
    let total = parseInt(currValue.innerText) + incrementValue
    currValue.innerText = total
})
sub.addEventListener('click',(e)=>{
    let total = parseInt(currValue.innerText) - incrementValue
    if(total < 0)
    {
        total = 0;
    }
    currValue.innerText = total

})
reset.addEventListener('click',(e)=>{
    currValue.innerText = 0;
})


