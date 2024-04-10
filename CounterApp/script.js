(function () {
    let hour = document.querySelector('.hour')
    let min = document.querySelector('.minute')
    let sec = document.querySelector('.sec')

    let startBtn = document.querySelector('.start')
    let stopBtn = document.querySelector('.stop')
    let resetBtn = document.querySelector('.reset')


    let couterTime;
    startBtn.addEventListener('click', () => {
        if (hour.value == 0 && min.value == 0 && sec.value == 0)
            return




///////// START /////////////
        function startInterval() {
            startBtn.style.display = "none"
            stopBtn.style.display = "initial"
            couterTime = setInterval(() => {
                timer()
            }, 1000)
        }
        startInterval()
    })


/////STOP////////////
    function stopInterval(state) {
        startBtn.innerHTML = state === "pause" ? "continue" : "start"
        startBtn.style.display = "initial"
        stopBtn.style.display = "none"
        clearInterval(couterTime)
    }



    ///// Tim Logic ///////////////
    function timer() {
        if (sec.value > 60) {
            min.value++
            sec.value = parseInt(sec.value) - 60
        }
        if (min.value > 60) {
            hour.value++
            min.value = parseInt(min.value) - 60
        }
        if (hour.value == 0 && min.value == 0 && sec.value == 0) {
            hour.value = ""
            min.value = ""
            sec.value = ""
            stopInterval()
        }
        else if (sec.value != 0) {
            sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`
        }
        else if (min.value != 0 && sec.value == 0) {
            sec.value = 59;
            min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`
        }
        else if (hour.value != 0 && hour.value == 0) {
            min.value = 60;
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`
        }

    }
    stopBtn.addEventListener('click', () => {
        stopInterval('pause')
    })
    resetBtn.addEventListener('click', () => {
        hour.value = ''
        min.value = ''
        sec.value = ''
        stopInterval()
    })
})()