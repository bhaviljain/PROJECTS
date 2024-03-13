let progress = document.getElementById('progress')
let progressLabel = document.getElementById('progressLabel')
let start = document.getElementById('btn')
let completed = document.getElementById('ppp')


function Handle (){
    let value= 0;
    let interval;
    interval = setInterval(()=>{
        if(value === 90)
        {
            clearInterval(interval)
            completed.innerText = "completed"
            start.disabled = false

        }
        if(value ===10 && value <=100)
        {
            start.disabled = true
        }
       
        value += 10
        progress.style.width =`${value}%`
        progressLabel.innerText= `${value}%`
        
    },1000)
}

start.addEventListener('click',()=>{
    console.log("Aa");
    Handle()
})

