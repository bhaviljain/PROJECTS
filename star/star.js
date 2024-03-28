let container = document.getElementById('star-container')
let star = document.querySelectorAll('.star')
let filled =0;



container.addEventListener('click', (e)=>{
    let currClicked = e.target.dataset.index;
    console.log(currClicked);

    for(let i =0; i<filled; i++)
    {
        star[i].classList.remove('star-color')

    }




    for(let i=0; i<currClicked;i++)
    {
        star[i].classList.add('star-color')
    }
    filled = currClicked

    let count = document.getElementById('count');

    if(currClicked <= 2)
    {
        
    count.innerHTML = `Ughh.!!! 😠😠😠 Very Bad : ${currClicked}`;
    
    count.style.color='red';
    

    }

    if(currClicked == 3)
    {
        count.innerHTML = `Average.. Need Improvement : ${currClicked}`
        count.style.color='green'
    }
    if(currClicked >= 4)
    {
        count.innerHTML = `WOW.......!! Good Work: ${currClicked}`
        count.style.color='#ffdf00'
    }


    
})