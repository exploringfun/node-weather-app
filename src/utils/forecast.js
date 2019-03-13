const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const forecastURL = 'https://api.darksky.net/forecast/93346c18f744f10ab7484b35d984b23f/'+ latitude + ',' + longitude
    request ({url: forecastURL, json: true},(error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + ' chance of rain.'
            )
        }
    })

              
}

module.exports = forecast