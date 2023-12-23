// // window.onload = () => {
// //     let button = document.querySelector(".btn");

// //     button.addEventListener('click' , BMI)
// // }
// function BMICalc()
// {
// let weight = (document
//     .querySelector(".weight").value);

//     let height = (document
//     .querySelector(".height").value);
    
// let result = document.querySelector(".res")


// let bmi = (weight / ((height * height) 
// / 10000)).toFixed(2);


// if (bmi < 18.6) result.innerHTML =
// `Under Weight : <span>${bmi}</span>`;

// else if (bmi >= 18.6 && bmi < 24.9) 
// result.innerHTML = 
//     `Normal : <span>${bmi}</span>`;

// else result.innerHTML =
// `Over Weight : <span>${bmi}</span>`;
// }

function BMICalc()
{

let height = (document.querySelector(".height").value)
let weight = (document.querySelector(".weight").value)
let result = document.querySelector('.res')


    let bmi = (weight / ((height * height) 
/ 10000)).toFixed(2);


if (bmi < 18.6) result.innerHTML =
`Under Weight : <span>${bmi}</span>`;

else if (bmi >= 18.6 && bmi < 24.9) 
result.innerHTML = 
    `Normal : <span>${bmi}</span>`;

else result.innerHTML =
`Over Weight : <span>${bmi}</span>`;

}
