let boxCon = document.getElementById('box-conatiner')
let box =  document.querySelectorAll('.box');
let queue = [];

boxCon.addEventListener('click',function(e){
let index = e.target.dataset.index
console.log(index);

if(index!=undefined)
{
    queue.push(index)
    box[index].classList.add('green')
}
if(queue.length == 7)
{
    let cnt = 0;
    while(queue.length>0)
    {
        let ind = queue.shift()
        cnt++
        setTimeout(()=>{
            box[ind].classList.remove('green')
        },cnt * 1000)
    }
}
})