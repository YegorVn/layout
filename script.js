let button = document.getElementById('menu-button');
let aside = document.getElementById('lol2');
let header = document.getElementById('lol1');
let grid = document.getElementById('lol3');
let buttonWrapper = document.getElementById('menu-button-wrapper');
let circle = document.getElementById('big-circle');


let menu = document.getElementsByTagName('a');


let click = false;

button.addEventListener('click', {
	handleEvent(event) {
		if(!click){
			aside.style.width = '20%';
			header.style.width = '80%';
			grid.style.width = '80%';

			button.style.backgroundImage = 'url("./images/cross.svg")';
			
			buttonWrapper.style.left = '18%';
			buttonWrapper.style.borderRadius = '0%';
			buttonWrapper.style.border = '1px solid #d1d1d1';

			circle.style.display = 'none';
			for (let el of menu) {
				el.style.display = 'block';
  			}
  			click = !click;			
		}
		else {
			buttonWrapper.style.left = '15%';
			aside.style.width = '10%';
			header.style.width = '90%';
			grid.style.width = '90%';

			button.style.backgroundImage = 'url("./images/menu-button.svg")';

			buttonWrapper.style.left = '9%';
			buttonWrapper.style.borderRadius = '50%';
			buttonWrapper.style.border = 'none';

			circle.style.display = 'block';
			for (let el of menu) {
				el.style.display = 'none';
  			}	
  			click = !click;			
		}

	}
})