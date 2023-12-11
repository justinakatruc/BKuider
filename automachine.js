function automachineShow() {
    visualizePath();
    const svg = document.getElementById('map-svg');
    svg.innerHTML = '';  // Clear previous visualization
    const mapContainer = document.getElementById('map-container');
    const containerWidth = mapContainer.clientWidth;
    const containerHeight = mapContainer.clientHeight;
    const automachineCoordinates = {
        'automachine-b1': { x: containerWidth * 0.195, y: containerHeight * 0.65 },
        'automachine-b6': { x: containerWidth * 0.466, y: containerHeight * 0.33 },
        'automachine-c4': { x: containerWidth * 0.635, y: containerHeight * 0.24 },
    }

    const automachineNodes = Object.keys(automachineCoordinates);
    const circleNumbers = [1, 1, 1];
    const radiusPercentage = 1.5;
    const fontSizePercentage = 3;

    for (let i = 0; i < automachineNodes.length; i++) {
        const automachineNode = automachineNodes[i];
        const circleNumber = circleNumbers[i];

        createCircleButtons(svg, automachineCoordinates[automachineNode].x, automachineCoordinates[automachineNode].y, 'dodgerblue', radiusPercentage, circleNumber.toString(), fontSizePercentage);
    }
}
