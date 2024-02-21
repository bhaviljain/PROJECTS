var arr =[
    {name: "rose",image:"https://media.istockphoto.com/id/174655938/photo/rose-background.webp?b=1&s=170667a&w=0&k=20&c=Yt_fpPxmZ4lIBT6H1rsp2UQ4C_1xNBJLuRu5itORoZo="},
    {name: "cat",image:"https://media.istockphoto.com/id/108226626/photo/feline.webp?b=1&s=170667a&w=0&k=20&c=4xt1rp_HSGLPUiKoioQOgTJgj3NXVUjMCEoaQ7ZROr8="},
    {name: "Dog",image:"https://media.istockphoto.com/id/496488838/photo/inquisitive-beagle-hound.webp?b=1&s=170667a&w=0&k=20&c=Mf_MOFtdOmNLWq5urTg0Wq2Nea_kpi2WDMB4z6JbB6E="},
    {name: "crowd",image:"https://media.istockphoto.com/id/516040401/photo/crowd-shouting-during-flag-ceremony-pakistani-border.webp?b=1&s=170667a&w=0&k=20&c=BpiDmcs2sMVMclV5xN0xYU0y0sf3myQco4F8xrGBrL8="},
 
]

 function  showCard() {
    var clutter = ''
    arr.map((show,index)=>{
    clutter += `<div class="posssts">
   <img class="imq" src="${show.image}">
   </div>
      <div class="caption">${show.name}
      
        </div>`
    })
    document.getElementById('container').innerHTML = clutter
}
function handleClick(){
    document.getElementById('searchinput').addEventListener("focus", function(){
    document.querySelector(".overlay").style.display = "block"
    })
}
handleClick()
showCard()