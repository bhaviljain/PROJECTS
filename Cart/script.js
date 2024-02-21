
var products =[
{name:"Iphone 14", price:"1,20,000", image:"https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww"},
{name:"Google Pixel", price:"20,000", image:"https://images.unsplash.com/photo-1533228100845-08145b01de14?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Google Pixel", price:"20,000", image:"https://images.unsplash.com/photo-1533228100845-08145b01de14?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"},
{name:"Google Pixel", price:"20,000", image:"https://images.unsplash.com/photo-1533228100845-08145b01de14?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"}

]
var clutter = "";
var cart =[];
function addProduct() {
products.forEach(function (prod,index){
clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
<div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
<img src ="${prod.image}"/></div>
<div class="data w-full px-2 py-5">
    <h1 class="font-semibold text-xl leading-none tracking-tight"> 
     Rs: ${prod.price}
    </h1>
    <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
            <h3 class="font-semibold opacity-20">Hangup data.</h3>
            <h4 class="font-semibold mt-2">$3,456</h4>
        </div>
        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
        <i data-index="${index}" class="add ri-add-line"></i></button>
    </div>
</div>
</div>`
document.querySelector(".products").innerHTML = clutter;
})}

function AddedCart(){
    document.querySelector(".products").addEventListener("click", function(details){
        if(details.target.classList.contains('add'));
        {
        cart.push(products[details.target.dataset.index]);
        console.log(cart);
        }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display ="block"
      
        var clutter= "";
        cart.forEach(function (prod,index){
           clutter += ` <div class="input flex justify-between gap-2">
           <div class="flex"></div>
       </div>
      
       <img class="w-[30px] h-[30px] object-cover" src = "${prod.image}/>"
           <div class=" h-10 text-yellow-400">
               <span class="flex flex-col font-bold">${prod.name}</span>
               <span>Rs: ${prod.price}</span>

               </div>

               `
        })
       
 document.querySelector(".cartexpnd").innerHTML = clutter
    })
}
showCart()
AddedCart()
addProduct()