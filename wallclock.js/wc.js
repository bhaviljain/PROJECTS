setInterval(setClockk, 1000)

const hour = document.querySelector("[data-hour-hand]")
const minutes = document.querySelector("[data-minutes-hand]")
const seconds = document.querySelector("[data-seconds-hand]")
function setClockk(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60; //coz 60 secs
    const minRatio =(secondsRatio +  currentDate.getMinutes()) / 60
    const hourRatio =(minRatio +  currentDate.getHours()) / 12
    setRotation(seconds,secondsRatio)
    setRotation(minutes, minRatio)
    setRotation(hour , hourRatio)
}

function setRotation(element , rotationRatio)
{
    element.style.setProperty("--rotation" , rotationRatio * 360)
}
setClock()











// setInterval(setClock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setClock() {
//   const currentDate = new Date()
//   const secondsRatio = currentDate.getSeconds() / 60
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
//   setRotation(secondHand, secondsRatio)
//   setRotation(minuteHand, minutesRatio)
//   setRotation(hourHand, hoursRatio)
// }

// function setRotation(element, rotationRatio) {
//   element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()
