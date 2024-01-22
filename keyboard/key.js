function run()
{
let html = document.getElementById('text-html').value
let css = document.getElementById('text-css').value
let js = document.getElementById('text-js').value
let output = document.getElementById('output')

output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>"
output.contentWindow.eval(js);
}