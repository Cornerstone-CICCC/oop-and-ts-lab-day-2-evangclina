"use strict";
function logCoordinates(coords) {
    if (coords.length === 2) {
        console.log(`Latitude: ${coords[0]}, Longitude: ${coords[1]}`);
    }
    else {
        console.log(`Latitude: ${coords[0]}`);
    }
}
// Expected output:
logCoordinates([40.7128, -74.0060]); // "Latitude: 40.7128, Longitude: -74.0060"
logCoordinates([34.0522]); // "Latitude: 34.0522"
