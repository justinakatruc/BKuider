function parkingShow() {
    visualizePath();
    const svg = document.getElementById('map-svg');
    svg.innerHTML = '';  // Clear previous visualization
    const mapContainer = document.getElementById('map-container');
    const containerWidth = mapContainer.clientWidth;
    const containerHeight = mapContainer.clientHeight;
    const parkingCoordinates = {
        'parking-b4l': { x: containerWidth * 0.36, y: containerHeight * 0.48 },
        'parking-b4r': { x: containerWidth * 0.39, y: containerHeight * 0.48 },
        'parking-b8': { x: containerWidth * 0.545, y: containerHeight * 0.5 },
        'parking-a5l': { x: containerWidth * 0.44, y: containerHeight * 0.5 },
        'parking-a5f': { x: containerWidth * 0.47, y: containerHeight * 0.57 },
        'parking-a2': { x: containerWidth * 0.47, y: containerHeight * 0.61 },
        'parking-a1f': { x: containerWidth * 0.47, y: containerHeight * 0.65 },
        'parking-a1b': { x: containerWidth * 0.49, y: containerHeight * 0.71 },
        'parking-b1l': { x: containerWidth * 0.21, y: containerHeight * 0.62 },
        'parking-b1m': { x: containerWidth * 0.26, y: containerHeight * 0.62 },
        'parking-b1r': { x: containerWidth * 0.31, y: containerHeight * 0.62 },
        'parking-b2': { x: containerWidth * 0.37, y: containerHeight * 0.68 },
        'parking-b6l': { x: containerWidth * 0.44, y: containerHeight * 0.4 },
        'parking-b6f': { x: containerWidth * 0.475, y: containerHeight * 0.37 },
        'parking-b6b': { x: containerWidth * 0.48, y: containerHeight * 0.3 },
        'parking-a3a': { x: containerWidth * 0.572, y: containerHeight * 0.6 },
        'parking-b5': { x: containerWidth * 0.43, y: containerHeight * 0.3 },
        'parking-c5': {x: containerWidth * 0.64,y: containerHeight * 0.13},
        'parking-c6': {x: containerWidth * 0.64,y: containerHeight * 0.07},
    }

    const parkingNodes = Object.keys(parkingCoordinates);
    const circleNumbers = [3, 5, 5, 7, 9, 9, 9, 9, 9, 9, 9, 7, 7, 3, 4, 16, 7, 2, 3];
    const radiusPercentage = 2;
    const fontSizePercentage = 3.5;

    for (let i = 0; i < parkingNodes.length; i++) {
        const parkingNode = parkingNodes[i];
        const circleNumber = circleNumbers[i];

        createCircleButtons(svg, parkingCoordinates[parkingNode].x, parkingCoordinates[parkingNode].y, 'dodgerblue', radiusPercentage, circleNumber.toString(), fontSizePercentage);
    }
}

function createCircleButtons(svg, x, y, color, radiusPercentage, text, fontSizePercentage) {
    // Convert percentage radius to an absolute value
    const containerWidth = svg.clientWidth;
    const containerHeight = svg.clientHeight;
    const radius = Math.min(containerWidth, containerHeight) * (radiusPercentage / 100);
    const fontSize = Math.min(containerWidth, containerHeight) * (fontSizePercentage / 100);
    const stroke = radius * 0.15;


    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', color);
    circle.setAttribute('stroke', 'lightcyan');
    circle.setAttribute('stroke-width', stroke);

    // Append circle to the SVG container
    svg.appendChild(circle);

    // Create text element
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    // Set the text content
    textElement.textContent = text; // Display the percentage for demonstration

    // Set attributes for the text element
    textElement.setAttribute('x', x);
    textElement.setAttribute('y', y); // Adjusted for half of the circle's radius
    textElement.setAttribute('text-anchor', 'middle');
    textElement.setAttribute('dominant-baseline', 'central');
    textElement.setAttribute('fill', 'white'); // Set text color
    textElement.setAttribute('font-size', fontSize);

    // Append text to the SVG container
    svg.appendChild(textElement);
}

