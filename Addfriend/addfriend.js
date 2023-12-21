 let isStatus = document.querySelector('h5')
let addFriend = document.querySelector('#add')
let check = 0

addFriend.addEventListener('click', function(){
    if(check == 0)
    {

    isStatus.innerHTML = 'Friends'
    // addFriend.remove()
    isStatus.style.backgroundColor = "green"
    isStatus.style.color ='black'
    isStatus.style.borderRadius = "20px"
    check = 1
    addFriend.innerHTML = 'Remove Friend'
    }
    else{
        isStatus.innerHTML = 'Stranger'
        // addFriend.remove()
        isStatus.style.backgroundColor = "white"
        isStatus.style.color ='red'
        check = 0
        addFriend.innerHTML = 'Add Friend'
    }
})
