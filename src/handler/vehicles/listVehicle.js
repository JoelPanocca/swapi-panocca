'use strict'

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.listVehicle = (event, context, callback) => {
    const params = {
        TableName: 'vehicles'
    };

    dynamodb.scan(params, (error, data) => {
        if (error) {
            callback(new Error(error));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        };

        callback(null, response);
    });
}