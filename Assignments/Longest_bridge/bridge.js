// Set appropriate center location / zoom level to show all five (experiment)
let startingCoordinates = [40, -100]
let zoomLevel = 3

// TODO Optional E.C. Instead of default marker, draw a bridge icon at locations
// Tutorial: https://www.flaticon.com/free-icon/bridge_183412
// Examine bridge data array; use JS to figure out which bridge is longest
// Draw the marker for this bridge in a different color
// You can change colors of an icon if you register for a Flaticon account
let bridgeIcon = L.icon({
    iconUrl: 'bridge.png'
})

let map = L.map('bridges-map').setView(startingCoordinates, zoomLevel)
// I have a random giant bridge icon on my map...
L.marker([0, 0], {icon: bridgeIcon}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// Put data set for bridges into an object array
bridges =  [
    {"name": "Verrazano-Narrows Bridge", "City, State": "New York, NY", "span": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "City, State": "San Francisco and Marin, CA", "span": 1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "City, State": "Mackinaw and St Ignace, MI", "span": 1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "City, State": "New York, NY & New Jersey, NJ", "span": 1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "City, State": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [47.2690, -122.5517] }, 
]

// Loop over the array to create markers & popups 
// Don't create separate markers in your code
// Place a marker at each bridge locations
// Each marker should have a popup: bridge's name, span length
// Use HTML to format information neatly
bridges.forEach(function(bridge) {
    let markerText = `${bridge.name}<br>${bridge.span}`
    // how do I make this the bridge icon? 
    // Doing this makes giant bridges on my map...  --> L.marker(bridge.coordinates, {icon: bridgeIcon}).bindPopup(markerText).addTo(map)
    L.marker(bridge.coordinates).bindPopup(markerText).addTo(map)
 
})


// Part 3- Use dataset (bridge list in array above) to create a Chart.js
// bar chart of the bridge names and span legnths
// You can draw the chart on the same page as the map, or make a new page
// Can you use the array you created in part 2 to avoid typing the same data again?

// chart canvas & context
let chartCanvas = document.querySelector('#bridges-chart')
let ctx = chartCanvas.getContext('2d')

// TODO create chart object 
let bridgeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [
            {
                data: [], // create empty so array can be entered
                // color: [] // TODO
            }
        ],
        labels: []
    },

})

// loop over array to get bridge names & spans
for (x = 0; x <= 4; x++) {
    let bridgeName = bridges[x].name
    let bridgeSpan = bridges[x].span

    addBridgetoChart(bridgeName, bridgeSpan)
}

// add array information into the chart
function addBridgetoChart(name, span) {
    
    // TODO add bridge info to chart
    bridgeChart.data.labels.push(name)
    bridgeChart.data.datasets[0].data.push(span)

    bridgeChart.update()

}

// Enable GitHub pages for repository so all pages have live versions
// Submit with a link to your GITHUB repository with all files
// DIRECT WORKING links to the live pages on GitHub