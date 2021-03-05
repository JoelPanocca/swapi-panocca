'use strict'

const axios = require('axios');

module.exports.getPlanet = (event, context, callback) => {
  const idPlanet = event.pathParameters.id;
  axios.get(`https://swapi.py4e.com/api/planets/${idPlanet}`)
  .then(function (res) {
    const response = {
        statusCode: 200,
        body: JSON.stringify(res.data)
    };
    callback(null, response);
  })
  .catch(
    e => {
        const error = e.response.data;
        const errorResponse = {
          statusCode: error.status,
          body: JSON.stringify({
            message: error.title
          })
        };
        callback(null, errorResponse);
       }
  )
}