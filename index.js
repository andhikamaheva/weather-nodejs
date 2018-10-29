// const Http = require('http')
// const Request = require('request')
const Promise = require('promise')
const Validator = require('validator')
const YQL = require('yql')

function Weather () {

}

module.exports = Weather

Weather.prototype.getLatLongCurrentWeather = function (latitude, longitude) {
  return new Promise(function (resolve, reject) {
    let isValidLatLong = Validator.isLatLong(latitude + ',' + longitude)
    console.log(isValidLatLong)
    if (isValidLatLong) {
      let query = new YQL(`select item.condition, location from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(${latitude},${longitude})") and u = "c" `)
      console.log(query)
      query.exec(function (err, data) {
        if (err) {
          console.log(err)
        } else {
          let response = {
            location: data.query.results.channel.location
          }
          response.location.condition = data.query.results.channel.item.condition
          console.log(response)

          return response

             /*  return res.json({
                data: response,
                meta: Meta.response('success', 200, [
                  {
                    param: '',
                    message: req.__('success.showing_data'),
                    value: ''
                  }])
              }) */
        }
      })
    } else {
    }
  })
}
