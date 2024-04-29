// errorLogger.js
module .exports = (err, req, res, next) => {
    // Log the error (you can use a logging library like Winston or Morgan)
    console.error(err.stack); 
  
    // Pass the error to the next middleware (errorHandler)
    next(err);
  }; 
  