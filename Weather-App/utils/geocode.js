const request = require('request')

const geocode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1Ijoibm1hY3JveSIsImEiOiJjazZ6a2QxZ2kxN2g5M2RydjFxeDl2enhvIn0.4h9a7v7X0Pbwg95jQHzG8w&limit=1'
    request({ url: url, json: true }, (error, response) => {
       if (error) {
          callback('Unable to connect to location services', undefined)
       } else if (response.body.features.length === 0) {
          callback('Unable to find location. Please try again.', undefined)
       } else {
          callback(undefined, {
             latitude: response.body.features[0].center[1],
             longitude: response.body.features[0].center[0],
             location: response.body.features[0].place_name
          })
       }
    });
 }

 module.exports = geocode