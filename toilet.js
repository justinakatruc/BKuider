function toiletShow() {
    visualizePath();
    const svg = document.getElementById('map-svg');
	svg.innerHTML = '';  // Clear previous visualization
	const mapContainer = document.getElementById('map-container');
	const containerWidth = mapContainer.clientWidth;
	const containerHeight = mapContainer.clientHeight;
    const toiletCoordinates = {
        'toilet-a4-m' : {x:containerWidth*0.508,y:containerHeight*0.5},         //4
        'toilet-a4-fm' : {x:containerWidth*0.508,y:containerHeight*0.44},       //4
        'toilet-a5-m': {x:containerWidth*0.46,y:containerHeight*0.44},          //2
        'toilet-a5-fm': {x:containerWidth*0.49,y:containerHeight*0.44},         //2
        'toilet-b10-m': {x:containerWidth*0.715,y:containerHeight*0.544},       //3
        'toilet-b10-fm': {x:containerWidth*0.635,y:containerHeight*0.54},       //3
        'aaaaaa-b11-m': {x:containerWidth*0.609,y:containerHeight*0.334},       //2
        'toilet-b11-fm': {x:containerWidth*0.609,y:containerHeight*0.34},       //2
        'toilet-b11-m': {x:containerWidth*0.6103,y:containerHeight*0.374},      //2
        'aaaaaa-b11-fm': {x:containerWidth*0.6103,y:containerHeight*0.38},      //2
        'aaaaaa-b1-m': {x:containerWidth*0.2,y:containerHeight*0.67},           //3
        'aaaaaa-b1-fm': {x:containerWidth*0.195,y:containerHeight*0.67},        //3
        'aaaaab-b1-m': {x:containerWidth*0.26,y:containerHeight*0.638},         //3
        'aaaaab-b1-fm': {x:containerWidth*0.264,y:containerHeight*0.638},       //3
        'aaaaac-b1-m': {x:containerWidth*0.2707,y:containerHeight*0.7235},      //3
        'aaaaac-b1-fm': {x:containerWidth*0.27,y:containerHeight*0.73},         //3
        'toilet-b2-m': {x:containerWidth*0.2855,y:containerHeight*0.7233},      //1
        'toilet-b2-fm': {x:containerWidth*0.285,y:containerHeight*0.73},        //1
        'toilet-a2-m': {x:containerWidth*0.526,y:containerHeight*0.575},        //1
        'toilet-a2-fm': {x:containerWidth*0.526,y:containerHeight*0.58},        //1
        'aaaaaa-b4-m': {x:containerWidth*0.302,y:containerHeight*0.435},        //1
        'aaaaaa-b4-fm': {x:containerWidth*0.312,y:containerHeight*0.435},       //1
        'aaaaab-b4-m': {x:containerWidth*0.39,y:containerHeight*0.435},         //5
        'aaaaab-b4-fm': {x:containerWidth*0.39,y:containerHeight*0.4},          //1
        'toilet-a3-m': {x:containerWidth*0.618,y:containerHeight*0.58},         //1
        'toilet-a3-fm': {x:containerWidth*0.622,y:containerHeight*0.58},        //1
        'toilet-b3-m': {x:containerWidth*0.212,y:containerHeight*0.473},        //1
        'toilet-b3-fm': {x:containerWidth*0.211,y:containerHeight*0.48},        //1
        'toilff-b6-m': {x:containerWidth*0.4,y:containerHeight*0.35},           //1
        'toilff-b6-fm': {x:containerWidth*0.403,y:containerHeight*0.35},        //1
        'toilef-b6-m': {x:containerWidth*0.454,y:containerHeight*0.3},          //1
        'toilef-b6-fm': {x:containerWidth*0.457,y:containerHeight*0.3},         //1
        'toiler-b6-m': {x:containerWidth*0.472,y:containerHeight*0.295},        //1
        'toiler-b6-fm': {x:containerWidth*0.475,y:containerHeight*0.295},       //1
        'toilet-b8-m': {x:containerWidth*0.6,y:containerHeight*0.475},          //1
        'toilet-b8-fm': {x:containerWidth*0.555,y:containerHeight*0.475},       //1
        'toilet-b9-m': {x:containerWidth*0.555,y:containerHeight*0.53},         //1
        'toilet-c4-m': {x:containerWidth*0.635,y:containerHeight*0.23},         //5
        'toilet-c4-fm': {x:containerWidth*0.698,y:containerHeight*0.235},       //5
        'toilet-c5-m': {x:containerWidth*0.63,y:containerHeight*0.17},          //5
        'toilet-c5-fm': {x:containerWidth*0.696,y:containerHeight*0.175},       //5
        'toilet-c6-m': {x:containerWidth*0.682,y:containerHeight*0.099},        //5
        'toilet-c6-fm': {x:containerWidth*0.686,y:containerHeight*0.1},         //5
    }
    const toiletNodes = Object.keys(toiletCoordinates);
    for (let i = 0; i < toiletNodes.length; i++) {
        const regex = /^[a-z]{6}-[a-z]\d-m$/
        const regex1 = /^[a-z]{6}-[a-z]\d{2}-m$/
        const match = toiletNodes[i].match(regex);
        const match1 = toiletNodes[i].match(regex1);
        const circleNumbers = [4, 4, 2, 2, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5];
        const radiusPercentage = 1.5;
        const fontSizePercentage = 3;
    

        if (match || match1) {
            const toiletNode = toiletNodes[i]; 
            const circleNumber = circleNumbers[i];

            createCircleButtons(svg, toiletCoordinates[toiletNode].x, toiletCoordinates[toiletNode].y, 'dodgerblue', radiusPercentage, circleNumber.toString(), fontSizePercentage);
        }
        else {
            const toiletNode = toiletNodes[i]; 
            const circleNumber = circleNumbers[i];

            createCircleButtons(svg, toiletCoordinates[toiletNode].x, toiletCoordinates[toiletNode].y, 'magenta', radiusPercentage, circleNumber.toString(), fontSizePercentage);
        }
    }
}
