let chtml = document.getElementById('texthtml')
let ccss = document.getElementById('textcss')
let cjs = document.getElementById('textjs')

let previewFrame = document.getElementById('preview')
let runButton = document.getElementById('runButton')
let clearButton = document.getElementById('clearButton')
let downloadButton = document.getElementById('downloadButton')
let output = document.getElementById('output')

let updatePreview=()=>{
const html = chtml.value
const css = `<style>${ccss.value}</style>`
const js =`<script>${cjs.value}</script>`; 

const code = `${html}\n${css}\n${js}`; 
	output.contentDocument.body.innerHTML = code;
} 

const clearCode = () =>{
    chtml.value = ' ',
    ccss.value = ' ',
    cjs.value = ' '
}
updatePreview(); 

var copybtn=  document.getElementById('copy')
var copybtn1=  document.getElementById('copy1')
var copybtn2=  document.getElementById('copy2')
var copybtn3=  document.getElementById('copy3')





runButton.addEventListener('click', updatePreview); 
clearButton.addEventListener('click', clearCode); 
copybtn.addEventListener('click', function(){
    chtml.select()
    chtml.setSelectionRange(0,999)
    document.execCommand('copy')

})
copybtn1.addEventListener('click', function(){
    ccss.select()
    ccss.setSelectionRange(0,999)
    document.execCommand('copy')

})
copybtn2.addEventListener('click', function(){
    output.select()
    output.setSelectionRange(0,999)
    document.execCommand('copy')

})


// <h1>hello</h1>