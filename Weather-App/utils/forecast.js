const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1fbecf7a0ef64816b440d04bd62a08aa/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services', undefined)
        } else if (body.error) {
            callback('Unable to find coordinates. Please try again.', undefined)
        } else {
            callback(undefined, "It is currently " + body.currently.temperature + " out. There is a " + body.currently.precipProbability + "% chance to rain .")
        }
    });
}

module.exports = forecast