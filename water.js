function waterShow() {
    visualizePath();
    const svg = document.getElementById('map-svg');
    svg.innerHTML = '';  // Clear previous visualization
    const mapContainer = document.getElementById('map-container');
    const containerWidth = mapContainer.clientWidth;
    const containerHeight = mapContainer.clientHeight;
    const waterCoordinates = {
        'water-b1a': { x: containerWidth * 0.265, y: containerHeight * 0.65 },
        'water-b1b': { x: containerWidth * 0.268, y: containerHeight * 0.72 },
        'water-b6a': { x: containerWidth * 0.4, y: containerHeight * 0.35 },
        'water-b6b': { x: containerWidth * 0.46, y: containerHeight * 0.33 },
        'water-c4': { x: containerWidth * 0.635, y: containerHeight * 0.24 },
    }

    const waterNodes = Object.keys(waterCoordinates);
    const circleNumbers = [1, 1, 2, 3, 1];
    const radiusPercentage = 1.5;
    const fontSizePercentage = 3;

    for (let i = 0; i < waterNodes.length; i++) {
        const waterNode = waterNodes[i];
        const circleNumber = circleNumbers[i];

        createCircleButtons(svg, waterCoordinates[waterNode].x, waterCoordinates[waterNode].y, 'dodgerblue', radiusPercentage, circleNumber.toString(), fontSizePercentage);
    }
}