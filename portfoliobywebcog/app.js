const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
let button = document.getElementById('btn').onclick = function(){
	location.href = "https://bhaviljain.github.io/myntra/"
}

// https://main--stalwart-croissant-0f948d.netlify.app/

let button2 =  document.getElementById('btn2').onclick = function(){
	location.href = "https://main--stalwart-croissant-0f948d.netlify.app/"
}
let button3 =  document.getElementById('btn3').onclick = function(){
	location.href = "https://rad-clafoutis-ef209a.netlify.app/"
}