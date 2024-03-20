// http://api.weatherapi.com/v1/current.json?key=8198036823884460a93180236242003&q=London&aqi=yes
let input = document.querySelector('input')

const btn = document.getElementById('search-btn')
let countryName= document.getElementById('country')
let localtime = document.getElementById('localtime')
let temp = document.getElementById('temp')





const getData= async(city)=> {
const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=8198036823884460a93180236242003&q=${city}&aqi=yes`)
const res =await data.json()
return res;
console.log(res);
}

btn.addEventListener('click',async ()=>{
    const value = input.value
    const result = await getData(value)
    console.log(result);
    countryName.innerHTML =`${result.location.country},${result.location.region}, ${result.location.region} ,${result.location.name}`
    localtime.innerText =result.location.localtime
    temp.innerText =`${result.current.temp_c} C`

})
