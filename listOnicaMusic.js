'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = (event, context, callback) => {

  const params = {
    TableName:  'OnicaMusic',
    Limit:  12
  }

  // fetch items from DynamoDB
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode:  error.statusCode || 501,
        headers:  {'Content-Type':  'text/plain'},
        body:  'Could not fetch the items.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode:  200,
      headers:  {'Access-Control-Allow-Origin':'*'},
      body:  JSON.stringify(result),
    };
    callback(null, response);
  });
};
