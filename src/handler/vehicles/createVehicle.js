'use strict'

const AWS = require('aws-sdk');
const uuid = require('uuid');
const { isJson } = require("../../common/helper");

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.createVehicle = (event, context, callback) => {

    if (!isJson(event.body)) {
        const response = {
            statusCode: 400,
            body: JSON.stringify({ 'message': 'Request Body no es JSON =(' })
        };
        callback(null, response);
        return;
    }

    const data = JSON.parse(event.body);

    const params = {
        TableName: 'vehicles',
        Item: {
            id: uuid.v1(),
            capacidadCarga: data['cargo_capacity'],
            consumibles: data['consumables'],
            costoEnCreditos: data['cost_in_credits'],
            creado: data['created'],
            tripulacion: data['crew'],
            editado: data['edited'],
            longitud: data['length'],
            fabricante: data['manufacturer'],
            velocidadMaxAtmosfera: data['max_atmosphering_speed'],
            modelo: data['model'],
            nombre: data['name'],
            pasajeros: data['passengers'],
            pilotos: data['pilots'],
            peliculas: data['films'],
            url: data['url'],
            claseVehiculo: data['vehicle_class']
        }
    }

    dynamodb.put(params, (error) => {
       if (error) {
           callback(new Error(error));
           return;
       }
       const response = {
         statusCode: 201,
         body: JSON.stringify({})
       };

       callback(null, response);
    });
}