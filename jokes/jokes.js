let btn = document.getElementById('btn')
let jokecon = document.getElementById('joke')
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

    const fetchData = async () =>
    {
      const res =  await fetch(url)
      
      const data = await res.json()
      jokecon.textContent = `${data.joke}` 
}
btn.addEventListener('click',fetchData)
fetchData()