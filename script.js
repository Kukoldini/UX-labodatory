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

let questionField = document.querySelectorAll('.questions-form-item');
let dropInfo = document.querySelectorAll('.drop-info');
let treangle = document.querySelectorAll('.treangle');

for (var i = 0; i < 5; i++) {
	let currentField = questionField[i];
	let currentDropInfo = dropInfo[i];
	let currentTreangle = treangle[i];

	currentField.addEventListener('click', function(){
		if (!currentField.classList.contains('questions-form-item-drop')) {
			currentDropInfo.classList.add('drop');
			currentField.classList.add('questions-form-item-drop');
			currentTreangle.classList.add('treangle-rotate');
		} 
		else {
			currentDropInfo.classList.remove('drop');
			currentField.classList.remove('questions-form-item-drop');
			currentTreangle.classList.remove('treangle-rotate');
		}
	})
}