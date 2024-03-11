let commentContainer = document.getElementById('comment-container')

function inputBox(){
    let div = document.createElement('div')
    div.setAttribute('class' ,"comment-details")
    div.innerHTML +=`
    <input type="text" placeholder="add text" class="input" id="input"/>
     <button id="submit" class="btn submit">Submit</button>

</div>`
return div
}

function addReply(text) {
    let div = document.createElement('div')
    div.setAttribute('class' ,"all-comment")
  div.innerHTML = `
        <span class="text">${text}</span>
        <span id="reply" class="reply">Add Reply</span>
        <span id="delete" class="delete">delete</span>
    </div>
</div>`
return div

}

commentContainer.addEventListener('click', (e)=>{
 let reply = e.target.classList.contains('reply')
 let submit = e.target.classList.contains('submit')
 let comment = e.target.closest('.all-comment')


if(reply){
comment.appendChild(inputBox())
}

if(submit){
    const commentDet = e.target.closest('.comment-details')
    if (commentDet.children[0].value)
    {
        comment.appendChild(addReply(commentDet.children[0].value))
    }
    commentDet.remove()
}

})


