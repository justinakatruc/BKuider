function toiletShow() {
    const svg = document.getElementById('map-svg');
	svg.innerHTML = '';  // Clear previous visualization
	const mapContainer = document.getElementById('map-container');
	const containerWidth = mapContainer.clientWidth;
	const containerHeight = mapContainer.clientHeight;
    const toiletCoordinates = {
        'toilet-a4-m' : {x:containerWidth*0.508,y:containerHeight*0.5},
        'toilet-a4-fm' : {x:containerWidth*0.508,y:containerHeight*0.44},
        'toilet-a5-m': {x:containerWidth*0.46,y:containerHeight*0.44},
        'toilet-a5-fm': {x:containerWidth*0.49,y:containerHeight*0.44},
        'toilet-b10-m': {x:containerWidth*0.715,y:containerHeight*0.544},
        'toilet-b10-fm': {x:containerWidth*0.635,y:containerHeight*0.54},
        'aaaaaa-b11-m': {x:containerWidth*0.609,y:containerHeight*0.334},
        'toilet-b11-fm': {x:containerWidth*0.609,y:containerHeight*0.34},
        'toilet-b11-m': {x:containerWidth*0.6103,y:containerHeight*0.374},
        'aaaaaa-b11-fm': {x:containerWidth*0.6103,y:containerHeight*0.38},
        'aaaaaa-b1-m': {x:containerWidth*0.2,y:containerHeight*0.67},
        'aaaaaa-b1-fm': {x:containerWidth*0.195,y:containerHeight*0.67},
        'aaaaab-b1-m': {x:containerWidth*0.26,y:containerHeight*0.638},
        'aaaaab-b1-fm': {x:containerWidth*0.264,y:containerHeight*0.638},
        'aaaaac-b1-m': {x:containerWidth*0.2707,y:containerHeight*0.7235},
        'aaaaac-b1-fm': {x:containerWidth*0.27,y:containerHeight*0.73},
        'toilet-b2-m': {x:containerWidth*0.2855,y:containerHeight*0.7233},
        'toilet-b2-fm': {x:containerWidth*0.285,y:containerHeight*0.73},
        'toilet-a2-m': {x:containerWidth*0.526,y:containerHeight*0.575},
        'toilet-a2-fm': {x:containerWidth*0.526,y:containerHeight*0.58},
        'aaaaaa-b4-m': {x:containerWidth*0.308,y:containerHeight*0.435},
        'aaaaaa-b4-fm': {x:containerWidth*0.312,y:containerHeight*0.435},
        'aaaaab-b4-m': {x:containerWidth*0.39,y:containerHeight*0.435},
        'toilet-a3-m': {x:containerWidth*0.618,y:containerHeight*0.58},
        'toilet-a3-fm': {x:containerWidth*0.622,y:containerHeight*0.58},
        'toilet-b3-m': {x:containerWidth*0.212,y:containerHeight*0.473},
        'toilet-b3-fm': {x:containerWidth*0.211,y:containerHeight*0.48},
        'toilet-b6-m': {x:containerWidth*0.455,y:containerHeight*0.3},
        'toilet-b6-fm': {x:containerWidth*0.459,y:containerHeight*0.3},
        'toilet-b8-m': {x:containerWidth*0.6,y:containerHeight*0.475},
        'toilet-b8-fm': {x:containerWidth*0.555,y:containerHeight*0.475},
        'toilet-b9-m': {x:containerWidth*0.555,y:containerHeight*0.53},
        'toilet-c4-m': {x:containerWidth*0.635,y:containerHeight*0.23},
        'toilet-c4-fm': {x:containerWidth*0.698,y:containerHeight*0.235},
        'toilet-c5-m': {x:containerWidth*0.63,y:containerHeight*0.17},
        'toilet-c5-fm': {x:containerWidth*0.696,y:containerHeight*0.175},
        'toilet-c6-m': {x:containerWidth*0.682,y:containerHeight*0.099},
        'toilet-c6-fm': {x:containerWidth*0.686,y:containerHeight*0.1},
    }
    const toiletNodes = Object.keys(toiletCoordinates);
    for (let i = 0; i < toiletNodes.length; i++) {
        const regex = /^[a-z]{6}-[a-z]\d-m$/
        const regex1 = /^[a-z]{6}-[a-z]\d{2}-m$/
        const match = toiletNodes[i].match(regex);
        const match1 = toiletNodes[i].match(regex1);
        const circleNumbers = [4, 4, 2, 2, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5];
        const radiusPercentage = 1.5;
        const fontSizePercentage = 3;
    

        if (match || match1) {
            const toiletNode = toiletNodes[i]; 
            const circleNumber = circleNumbers[i];

            createCircleParkToilet(svg, toiletCoordinates[toiletNode].x, toiletCoordinates[toiletNode].y, 'dodgerblue', radiusPercentage, circleNumber.toString(), fontSizePercentage);
        }
        else {
            const toiletNode = toiletNodes[i]; 
            const circleNumber = circleNumbers[i];

            createCircleParkToilet(svg, toiletCoordinates[toiletNode].x, toiletCoordinates[toiletNode].y, 'magenta', radiusPercentage, circleNumber.toString(), fontSizePercentage);
        }
    }
}
