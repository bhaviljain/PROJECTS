    let amt = document.getElementById('loan-amt')
    let interest = document.getElementById('interest-rate')
    let month = document.getElementById('months')
    let calculate = document.getElementById('btn')
    let emi = document.getElementById('total')


    function calculateEmi()
    {
        if(amt.value === "" || interest.value === "" || month.value === "")
        {
        alert('please provide values for all')
        }
        else{
    const p =amt.value
    const r = interest.value /1200
    const n = month.value
    const emiVal = (p*r*(1+r)**n/((1+r)**n)-1)
    emi.innerHTML = emiVal.toFixed(2)

    }
    // amt.value = ''
    // interest.value =''
    // month.value =''
}

calculateEmi()


    calculate.addEventListener('click',calculateEmi) 