const variants = document.querySelectorAll('.VB img');
const panel = document.querySelectorAll('.panel');



zero = 0;

for(let i = zero; i<panel.length; i++){
	panel[i].innerHTML = panel[zero].innerHTML;
}
for(let i = 0; i < variants.length; i++){
	variants[i].addEventListener('click', () => {
		variants[i].classList.toggle('rotate');
		if (variants[i] = panel[i]) {
			panel[i].classList.toggle('view');
		}
	})
}
	



