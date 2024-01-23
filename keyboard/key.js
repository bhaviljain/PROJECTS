function run()
{

let html = document.getElementById('text-html').value
let css = document.getElementById('text-css').value
let js = document.getElementById('text-js').value
let output = document.getElementById('output')

output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>"
output.contentWindow.eval(js); 

}
btn.addEventListener("click", ()=>{
  let html = document.getElementById('text-html')
  html.select()
  html.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(html);


})