'use strict'
const AWS = require('aws-sdk');
const uuid = require('uuid');
const { isJson } = require("../../common/helper");

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.createPeople = (event, context, callback) => {
    if (!isJson(event.body)) {
        const response = {
            statusCode: 400,
            body: JSON.stringify({ 'message': 'Request Body no es JSON :(' })
        };
        callback(null, response);
        return;
    }

    const data = JSON.parse(event.body);
    const params = {
      TableName: 'people',
      Item: {
          id: uuid.v1(),
          ano_nacimiento: data['birth_year'],
          colorOjos: data['eye_color'],
          peliculas: data['films'],
          genero: data['gender'],
          colorCabello: data['hair_color'],
          altura: data['height'],
          mundoNatal: data['homeworld'],
          masa: data['mass'],
          nombre: data['name'],
          colorPiel: data['skin_color'],
          creado: data['created'],
          editado: data['edited'],
          especies: data['species'],
          navesEstelares: data['starships'],
          url: data['url'],
          vehiculos: data['vehicles']
      }
    };

    dynamoDB.put(params, (error, data1) => {
        if (error) {
            callback(new Error(error));
            return;
        }
        const response = {
            statusCode: 201,
            body: JSON.stringify(data1)
        };

        callback(null, response);
    })
}