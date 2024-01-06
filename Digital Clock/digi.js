    function myTime(){
        var date = new Date();
        document.getElementById('clock').innerHTML =date.toLocaleTimeString();
    }
    const times = setInterval(myTime,1000)
 
    function stopFuntion()
    {
        clearInterval(times)
    }
  