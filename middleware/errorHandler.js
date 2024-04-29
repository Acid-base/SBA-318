// errorHandler.js
const express = require ('express');

// Custom error handling middleware
module.exports = (err, req, res, next) => {
  // Send a JSON response  with error details
  res.status(err.status || 500).json({
    message: err.message,
    error:  process.env.NODE_ENV === 'production' ? {} : err, // Only send error details in development
  });
};
