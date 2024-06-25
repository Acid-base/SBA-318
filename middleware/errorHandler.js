
//  errorHandler.js
const express = require ('express');
const winston  = require('winston'); // Assuming you have winston for logging

// Configure  winston logger
const logger = winston.createLogger({
  // ...winston configuration here...
});

// Custom error handling middleware
module. exports = (err, req, res, next) => {
  // Log error details (including stack trace in non-production)
  logger. error(err.message, {
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
    // ...other relevant data...
  });

  // Differentiate between error types
  let status = 500;
  let message = 'Internal Server Error';

  if (err.name === 'ValidationError') {
    status = 400;
    message = 'Validation Error ';
  } else if (err.name === 'UnauthorizedError') {
    status = 401;
    message = 'Unauthorized';
  } // ...other error types...

  // Send a JSON response with error details
  res.status(status).json({
    message ,
    // Consider providing more informative error details based on type
    details: process.env.NODE_ENV === 'production' ? undefined : {
      // ...error details, potentially filtered for security...
    },
  });
};
