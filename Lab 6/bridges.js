// set variables for map coordinates and zoom level
let centerOfUSA = [39.82, -98.57]
let zoomLevel = 4

// create a map with above coordinates and zoom
let map = L.map('bridge-map').setView(centerOfUSA, zoomLevel)

// add the Open Street Map tile to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create an array of objects to contain the bridge data
let bridges = [
    {"name": "Verrazano-Narrows Bridge", "citystate": "New York, NY",
        "span": 1298.4, "coordinates": [40.6066, -74.0337]},
    {"name": "Golden Gate Bridge", "citystate": "San Francisco and Marin, CA",
        "span": 1280.2, "coordinates": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "citystate": "Mackinaw and St Ignace, MI",
        "span": 1158.0, "coordinates": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "citystate": "New York, NY and New Jersey, NJ",
        "span": 1067.0, "coordinates": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "citystate": "Tacoma and Kitsap, WA",
        "span": 853.44, "coordinates": [47.2690, -122.5517]},
    // added a sixth bridge to make sure the chart colors worked with additional data points
    {"name": "I-35W Mississippi River Bridge", "citystate": "Minneapolis, MN",
        "span":139.00, "coordinates": [44.9789, -93.2449]}
]

// create a custom icon for the bridges
let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [32, 32],
    iconAnchor: [0, 0]
})

// create a custom icon for the longest bridge
let bridgeKing = L.icon({
    iconUrl: 'crown.png',
    iconSize: [32, 32],
    iconAnchor: [0, 0]
})

// create a variable to hold the longest span
let longestSpan = 0
// find the longest span by looping through the array and comparing each span to the previous spans
bridges.forEach( function({span}) {
    // if the current span is longer than the longest span, set longestSpan to the current span
    if (span > longestSpan) {
        longestSpan = span
    }
})

// iterate through each object in the array to add them to the map
bridges.forEach( function({name, citystate, span, coordinates}) {
    // use a template string to populate the popup boxes
    let markerText = `${name}<br>Span: ${span} meters`
    // if the span of the current object matches the longestSpan defined previously, use the custom bridgeKing icon
    if (span === longestSpan) {
        L.marker(coordinates, {icon: bridgeKing})
            .bindPopup(markerText)
            .addTo(map)
    // otherwise, use brideIcon
    } else {
        L.marker(coordinates, {icon: bridgeIcon})
            .bindPopup(markerText)
            .addTo(map)
    }
})

// define the canvas
let canvas = document.querySelector('#bridge-chart')
// create a context
let ctx = canvas.getContext('2d')

// create the data structure for the chart
let bridgeChart = new Chart(ctx, {
    // define the chart type
    type: 'bar',
    data: {
        datasets: [
            {
                // label the chart
                label: 'Bridge Length Comparison',
                data: [],
                backgroundColor: []
            }
        ],
        labels: []
    },
    options: {
        // set the chart to stay the same size rather than adapting to window width
        maintainAspectRatio: false,
        responsive: false,
        // set the scale to begin at 0
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

// create a list of colors for the chart
let chartColors = ['coral', 'darkcyan', 'khaki', 'mediumseagreen', 'rosybrown']

// loop over the array to add data to the chart
bridges.forEach( function ({name, span}) {
    // add the labels
    bridgeChart.data.labels.push(name)
    // add the bridge span
    bridgeChart.data.datasets[0].data.push(span)

    // create a variable to keep track of how many colors are needed
    let colorCount = bridgeChart.data.datasets[0].backgroundColor.length
    // get the remainder of colorCount divided by the number of colors in chartColors
    let barColor = chartColors[colorCount % chartColors.length]
    // assign a background color to the bar
    bridgeChart.data.datasets[0].backgroundColor.push(barColor)

    // update the chart
    bridgeChart.update()

})