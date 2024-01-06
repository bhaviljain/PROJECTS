// let y = Math.floor(Math.random() * 10 + 1);
// let num = document.getElementById('num')
// console.log(y);





//  document.getElementById('submitguess').onclick = function() {
// let x = document.getElementById('text').value

// if (x == y) {

//     alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN")
// }

// /* If guessed number is greater than actual number*/
// else if (x > y) {
//     alert("OOPS SORRY!! TRY A SMALLER NUMBER");
// }
// else {
    
   
//     alert("OOPS SORRY!! TRY A GREATER NUMBER")
// // }

// }

let y = Math.floor(Math.random() * 10 + 1);
let num = document.getElementById('num')
num.innerHTML = y
let msg1 = document.getElementById('message')
document.getElementById('submitguess').onclick = function ()
{
    let x = document.getElementById('text').value
    if (x == y) {

        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN")
        msg1.textContent = "CONGRATULATIONS"
    }
    
    /* If guessed number is greater than actual number*/
    else if (x > y) {
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
        msg1.textContent = "Number is high"

    }
    else {
        
       
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}