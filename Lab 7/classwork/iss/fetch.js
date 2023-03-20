let url = 'https://api.wheretheiss.at/v1/satellites/25544'
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let locTime = document.querySelector('#loc-time')
let update = 10000
let maxFailedAttempts = 3
let map = L.map('iss-map').setView([0, 0], 1)
let issIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 40],
    iconAnchor: [25, 20]
})
let issMarker = 0

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

iss(maxFailedAttempts) // call function once to start, then call it every 10 seconds

// setInterval can have issues if the fetch takes longer than the interval
// setInterval(iss, update)

// to avoid issues with setInterval, you can use a recursive setTimeout in a finally block

function iss(attempts) {
    if (attempts <= 0) {
        alert('Service is currently down')
        return
    }
// fetch returns a promise
// if the fetch is successful, then a function is called
    fetch(url).then(response => {
        // converts the response to a javascript object
        // sends it to the next then block
        return response.json()
        // after the response is received, the data can be accessed
    }).then(issData => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long
        locTime.innerHTML = Date()
        // create marker if it doesn't exist, move it if it does exist
        if (!issMarker) {
            // create marker
            issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map)
        } else {
            issMarker.setLatLng([lat, long])
        }

        // generic error handler will deal with errors all along the chain
    }).catch(error => {
        attempts--
        console.log('ERROR!', error)
    }).finally( () => {
        // the finally block will run whether or not the fetch failed
        // this will wait for 10 seconds, then call the iss function again
        // in setTimeout, the function is listed first, followed by the interval and then parameters for the function
        setTimeout(iss, update, attempts)
    })
}
