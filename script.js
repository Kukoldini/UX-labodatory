let button = document.querySelectorAll('.button');
let popupMenu = document.querySelector('.popup-menu');
let closeIcon = document.querySelector('.close-icon');
let overlay = document.querySelector('.overlay');

for (var i = 0; i < 2; i++) {
	let currentButton = button[i];

	currentButton.addEventListener('click', function() {
		popupMenu.classList.add('show');
		overlay.classList.add('show-overlay');
		popupMenu.classList.remove('hide');
		overlay.classList.remove('hide-overlay')
	})
}
closeIcon.addEventListener('click', function() {
	popupMenu.classList.add('hide');
	overlay.classList.add('hide-overlay');
	popupMenu.classList.remove('show');
	overlay.classList.remove('show-overlay');
})

