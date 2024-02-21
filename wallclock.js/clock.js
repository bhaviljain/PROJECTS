setInterval(()=>{
    const dateNow = new Date();
     clockSeconds = dateNow.getSeconds() / 60;
     clockMinutes = (clockSeconds + dateNow.getMinutes()) / 60;
    clockHour = (clockMinutes + dateNow.getHours()) / 12;
     
    hour.style.transform = `rotate(${clockHour}deg)`
    minute.style.transform = `rotate(${clockMinutes}deg)`
    second.style.transform = `rotate(${clockSeconds}deg)`
    
},1000)

