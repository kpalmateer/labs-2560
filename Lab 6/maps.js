let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 10 // 1 = whole world, 20 = a few blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// this code is redundant and can be simplified by looping over an array of objects
// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)
//
// let stPaulCoordinates = [44.9483, -93.1099]
// let stPaulMarker = L.marker(stPaulCoordinates)
//     .bindPopup('St. Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)
//
// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale College <br><a href="http://normandale.edu">Website</a>')
//     .addTo(map)

let campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach( function({name, website, coordinates}) {
    let markerText = `${name}<br><a href="${website}">Website</a>`
    L.marker(coordinates)
        .bindPopup(markerText)
        .addTo(map)
})

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 24000,
    fillOpacity: 0.2
})
    .bindPopup('Twin Cities Metro')
    .addTo(map)