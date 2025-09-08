const request = require('postman-request');

const API_KEY = "64f904dcf6fcf2aca4558339c18ce6cd";

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${latitude},${longitude}&units=m`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Error: Unable to connect to weather service!",undefined);
        } else if (response.body.error) {
            callback("Error:Unable to find location!",undefined);
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ", It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain."  );
        }
    });
}

module.exports = forecast;