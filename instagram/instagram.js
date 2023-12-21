var arr =[
    {
    dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsfGVufDB8fDB8fHww" , 
},
    {
    dp:"https://media.istockphoto.com/id/1440472599/photo/beauty-diversity-and-skincare-by-women-in-studio-for-wellness-grooming-and-natural-makeup.webp?b=1&s=170667a&w=0&k=20&c=TqZdJjdD-KUdM92z7mwRs50OmmmYsonZ2jXTBDTSkZA=",
    story:"https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fG1vZGVsfGVufDB8fDB8fHww" , 
},
    {
    dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww",
    story:"https://media.istockphoto.com/id/1451126063/photo/beautiful-modern-middle-aged-female-smiling-portrait-dressed-black-dress-and-sunglasses-with.webp?b=1&s=170667a&w=0&k=20&c=0a2HG0DNG4bSCpKDPpQ7gOpx8dVa-c2hKoeE7q8k3cs=" , 
},
    {
    dp:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1563218819-7d963896383b?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , 
},

]
 
var storyiyan = document.querySelector("#storyiyan")
var clutter = ""
arr.forEach(function(e,idx){
 clutter +=`<div class="story">
 <img id="${idx}" src='${e.dp}'>
</div>`
})
storyiyan.innerHTML=clutter

storyiyan.addEventListener("click",function(dets){
 document.querySelector("#fullscreen").style.display = "block"
 document.querySelector("#fullscreen").style.backgroundImage
 =`url(${arr[dets.target.id].story})`

 setTimeout(function(){
    document.querySelector("#fullscreen").style.display = "none"

 },3000)

})