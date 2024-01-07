let backGrd = document.getElementById('background')
let button = document.getElementById('btn')

function backColor()
{
    let hex = "#";
    let hexColorcode = '0123456789ABCDEF';

    for (let i = 2; i <=7; i ++)
     {
      hex += hexColorcode[Math.floor(Math.random()*16)]
    }
    return hex;

}
button.onclick = ()=>{
    backGrd.style.backgroundColor = backColor()
}