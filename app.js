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

let form = document.getElementById("formContact");
let customername = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

function validationFormContact() {

    let submit = true;

    if (customername.value == "") {
        submit = false;
        customername.classList.add("complete");
    } else {
        customername.classList.remove("complete");
    }
    if (email.value == "") {
        submit = false;
        email.classList.add("complete");
    } else {
        email.classList.remove("complete");
    }
	if(message.value == ""){
		submit = false;
		message.classList.add("complete");
	} else {
		message.classList.remove("complete");
	}
    return submit;
}

form.onsubmit = function() {
    return validationFormContact();
}