let slides = document.querySelectorAll('.slider')
let count =0;
slides.forEach((slide ,index)=>{
slide.style.left = `${index * 100}%`
})


const goNext = () =>{
    count++;
    if(count === slides.length)
    {
        count = 0
    }
    slideIMG()
} 

const goPrev = () =>{
    count--;
    if(count == -1){
        count = slides.length - 1;
    }
    slideIMG()
}

const slideIMG = () =>{
    slides.forEach((slide)=>{
    slide.style.transform =
     `translateX(-${count * 100}%)`
    })
}


