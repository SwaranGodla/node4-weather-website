const request = require('postman-request');

const API_KEY = "05fdcec90f5a47489d456d8242cdd108";

const geocode = (address, callback) => {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${API_KEY}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to location services!", error);
        } else if (response.body.features.length === 0) {
            callback("Unable to find location. Try another search.", error);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longitude: response.body.features[0].geometry.coordinates[0],
                location: response.body.features[0].properties.formatted
            });
        }
    });
}

module.exports = geocode;