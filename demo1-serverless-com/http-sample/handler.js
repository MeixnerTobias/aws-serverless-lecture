'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello Stamford 2, the current time is ${new Date().toTimeString()}.`,
    }),
  };

  callback(null, response);
};