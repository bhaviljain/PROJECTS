let link = document.getElementsByClassName("link")
let currValue = 1
function activeLink()
{
for(L of link)
{
    L.classList.remove('active')
}
 event.target.classList.add('active')
 currValue = event.target.value
}
function prev()
{
if(currValue > 1)
{
    for(L of link)
    {
        L.classList.remove('active')
    }
    currValue--;
    link[currValue-1].classList.add('active')
}
}
function next()
{
    if(currValue < 6)
    {
    for(L of link)
    {
        L.classList.remove('active')
    }
    currValue++;
    link[currValue-1].classList.add('active')
}
}