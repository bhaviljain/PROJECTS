let item = document.getElementsByClassName('container') 
let hide = document.getElementsByClassName('hide')
let show = document.getElementsByClassName('show')
 
for(let i = 0; i <item.length; i++)
{
    item[i].addEventListener('click', ()=>{
        let result = item[i].classList.toggle("act")
        if(result === true)
        {
            hide[i].style.display = "block"
            hide[i].style.color = "black"
            show[i].style.display = "none"
            console.log("active");
        }   
        else
        {
            hide[i].style.display = "none"
            show[i].style.display = "block"
            console.log('unactive');
        }
    })
}

console.log(item);