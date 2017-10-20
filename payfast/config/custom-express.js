const express = require('express')
const consign = require('consign')

module.exports = function(){
  var app = express()

  consign()
    .include('routes')
    .into(app)

  return app
}
