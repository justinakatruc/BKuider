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


//hide and visualize panel and map
function visual() {
	// Add the 'hidden' class to .panel
	document.querySelector('.panel').classList.remove('visible');
	document.querySelector('.panel').classList.add('hidden');
	document.querySelector('.rotate-message').classList.add('visible');
	document.querySelector('.rotate-message').classList.remove('hidden');
  
	// Remove the 'hidden' class and add the 'visible' class to .map
	document.querySelector('.map').classList.remove('hidden');
	document.querySelector('.map').classList.add('visible');
}

const hide = document.getElementById('go');
const toilet = document.getElementById('toilet');
const parking = document.getElementById('parking');
hide.addEventListener('click', visual);
toilet.addEventListener('click', visual);
parking.addEventListener('click', visual);

function goBack() {
	document.querySelector('.panel').classList.remove('hidden');
	document.querySelector('.panel').classList.add('visible');

	document.querySelector('.map').classList.remove('visible');
	document.querySelector('.map').classList.add('hidden');
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
	if (landscape && toiletClicked) {
		toiletShow();
	}
	else if (portrait && toiletClicked) {
		toiletClicked = false;
	}
	if (landscape && parkingClicked) {
		parkingShow();
	}
	else if (portrait && parkingClicked) {
		parkingClicked = false;
	}
});


let goClicked = false;

const transformGo = document.getElementById('go');

transformGo.addEventListener('click', function () {
	goClicked = true;
	let landscape = window.matchMedia("(orientation: landscape)").matches;
	if (landscape && goClicked) {
		visualizePath();
	}
});

let toiletClicked = false;

const transformToilet = document.getElementById('toilet');

transformToilet.addEventListener('click', function () {
  toiletClicked = true;
});

let parkingClicked = false;

const transformParking = document.getElementById('parking');

transformParking.addEventListener('click', function () {
  parkingClicked = true;
});

