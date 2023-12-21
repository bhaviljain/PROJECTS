var timer = 60;
var score = 0;
var hitvalue = 0;

function makeBubble()
{
    var clutter = '';
    for(var i = 1; i<=170; i++)
{
    var randomNumber =Math.floor(Math.random()*12)
   clutter += `<div class="bubble">${randomNumber}</div>`
}

document.querySelector('.pbtm').innerHTML = clutter;
}

makeBubble()

function getNewScore ()
{
score += 10;
document.querySelector("#scoreval").textContent = score;
}


function runtimer()
{
    var time = setInterval(function(){
        if(timer>0)
        {
            timer --;
            document.querySelector("#timerval").textContent = timer;

        }
        else{
            clearInterval(time)
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h2>`

        }
    },1000)
}
runtimer()

document.querySelector(".pbtm").addEventListener("click", function(e){
  var numberClicked = Number(e.target.textContent);
  if(numberClicked === hitvalue)
  {
  getNewScore()
  hit()
  makeBubble()
  }
  else{
    score -=5;
    document.querySelector("#scoreval").textContent = score;

  }
 })

function hit()
{
     hitvalue = Math.floor(Math.random()*12)
    document.querySelector("#hitvalue").textContent = hitvalue;
}
hit()