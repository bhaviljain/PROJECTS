async function fetchData  () {
 const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=d4261837ae4d249f242bb5e6b013ecba")
 const res = await data.json()
 console.log(res);
 return res;
}

fetchData()