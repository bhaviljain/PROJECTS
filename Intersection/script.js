const circleCoor = []
document.addEventListener("click",(e)=>{
 
   function circleIntersect(x0, y0, r0, x1, y1, r1) {
      return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
  }

    function interSection(){
      const firstCircle = circleCoor[0]
      const secondCircle = circleCoor[1]
      const x1 = firstCircle.x
      const x2 = secondCircle.x
      const r1 = firstCircle.radius
      const y1 = firstCircle.y
      const y2 = secondCircle.y
      const r2 = secondCircle.radius
      return circleIntersect(x1,y1,r1,x2,y2,r2)
    }

 const totalCircle = document.querySelectorAll(".circle")
 if(totalCircle.length === 2){
    totalCircle.forEach((circ)=>
      {
         document.body.removeChild(circ),
         circleCoor.shift()
      }
    
    )
 }
 
 const x = e.clientX
 const y = e.clientY
 const radius = Math. floor(Math. random() * (200-50) + 50)

 circleCoor.push({x,y,radius})


 const circle = document.createElement("div")
 circle.classList.add("circle")


  circle.style.top = y - radius + "px"
  circle.style.left = x - radius + "px"
  circle.style.height = radius * 2 + "px"
  circle.style.width = radius * 2 + "px"


  document.body.appendChild(circle)
 


  if(circleCoor.length === 2){
   const res = interSection()
   console.log(res);
  }
})
