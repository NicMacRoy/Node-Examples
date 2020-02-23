const request = require('request')

const url = 'https://api.darksky.net/forecast/1fbecf7a0ef64816b440d04bd62a08aa/37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
   console.log("It is currently " + response.body.currently.temperature + " out. There is a " + response.body.currently.precipProbability + "% chance to rain .")
});