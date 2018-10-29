// const Assert = require('assert'),
//   Vows = require('vows'),
//   Chai = require('chai')
//   Nock = require('nock'),
  const Describe = require('mocha').describe
  const It = require('mocha').it

// var assert = Chai.assert
// var expect = Chai.expect
//   Chai.should()
  const Weather = require('../index')

  Describe('Weather Nodejs Package Test', function () {
    Describe('Check Fetch Current Weather with Latitude & Longitude', function () {
      It('Should Return Valid Latitude Longitude', function () {
        let weather = new Weather()
        // weather.getLatLongCurrentWeather
        weather.getLatLongCurrentWeather('-7.351813', '112.766364').then(function (result) {
          console.log(result)
        }).catch(function (error) {
          console.log(error)
        })
      })
    })
  })
