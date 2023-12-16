// const noteIconsvg = document.getElementById('noteicon-svg');
// noteIconsvg.innerHTML = '';  // Clear previous visualization
// const noteIconContainer = document.getElementById('noteicon-container');
// const containerWidth = noteIconContainer.clientWidth * 0.9;
// const containerHeight = noteIconContainer.clientHeight;

// const stairicon = createCircle(containerWidth, containerHeight*0.5, 'yellow');
// const starticon = createCircle(containerWidth, containerHeight*0.3, 'dodgerblue');
// const endicon = createCircle(containerWidth, containerHeight*0.4, 'seagreen');


// noteIconsvg.appendChild(starticon);
// noteIconsvg.appendChild(stairicon);
// noteIconsvg.appendChild(endicon);

//defineclicked
let goClicked = false;

const transformGo = document.getElementById('go');

transformGo.addEventListener('click', function () {
	goClicked = true;
	let landscape = window.matchMedia("(orientation: landscape)").matches;
	if (landscape && goClicked) {
		visualizePath();
	}
});

let goBackClicked = false;

//hide and visualize panel and map
function visual() {
	const inputEnd = end();
	if (inputEnd !== '') {
		// Add the 'hidden' class to .panel
		document.querySelector('.panel').classList.remove('visible');
		document.querySelector('.panel').classList.add('hidden');
		document.querySelector('.rotate-message').classList.add('visible');
		document.querySelector('.rotate-message').classList.remove('hidden');

		const inputresult = starti()
		if (inputresult === '') {
			document.querySelector('.refreshGPS').classList.remove('hidden');
			document.querySelector('.refreshGPS').classList.add('visible');
		}
		else {
			document.querySelector('.refreshGPS').classList.add('hidden');
			document.querySelector('.refreshGPS').classList.remove('visible');
		}

		// Remove the 'hidden' class and add the 'visible' class to .map
		document.querySelector('.map').classList.remove('hidden');
		document.querySelector('.map').classList.add('visible');
	}
	goBackClicked = true;
	document.getElementById('button-container').classList.toggle('slideUp');
}

const hide = document.getElementById('go');
hide.addEventListener('click', visual);

function goBack() {
	if (goBackClicked == true) {
		document.querySelector('.panel').classList.remove('hidden');
		document.querySelector('.panel').classList.add('visible');
	
		document.querySelector('.map').classList.remove('visible');
		document.querySelector('.map').classList.add('hidden');
		goBackClicked = false;
	}
	else {
		document.querySelector('.panel').classList.remove('visible');
		document.querySelector('.panel').classList.add('hidden');
	
		document.querySelector('.map').classList.remove('hidden');
		document.querySelector('.map').classList.add('visible');
		goBackClicked = true;
	}
	document.getElementById('button-container').classList.toggle('slideUp');
}


//check orentation change and trigger visualizePath()
screen. orientation. addEventListener("change", function(e) { 
	if(document.querySelector('.panel').classList.contains('hidden')) {
		document.querySelector('.rotate-message').classList.add('visible');
		document.querySelector('.rotate-message').classList.remove('hidden');
	}
	else {
		document.querySelector('.rotate-message').classList.remove('visible');
		document.querySelector('.rotate-message').classList.add('hidden');
	}
	let landscape = window.matchMedia("(orientation: landscape)").matches;
	let portrait = window.matchMedia("(orientation: portrait)").matches;
	if (landscape && goClicked) {
		visualizePath();
	}
	else if (portrait && goClicked) {
		goClicked = false;
	}
});