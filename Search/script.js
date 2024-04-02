function myfun(){
let search = document.getElementById('inp').value.toLowerCase()
let table = document.getElementsByTagName('table')
let tr = document.getElementsByTagName('tr')

for(let i=0; i<tr.length; i++)
{
    let td = tr[i].getElementsByTagName('td')[0]
    if(td){
        let text = td.innerText
    if(text.toLowerCase().indexOf(search) > -1){
        tr[i].style.display = ""
    }
    else{
        tr[i].style.display = "none"
    }
    }
}
}