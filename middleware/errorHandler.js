
//  ##   Error Handling Middleware

// Define `errorHandlerMiddleware` to handle errors.
   function errorHandlerMiddleware(err, req, res, next) {
       console.error(err); // Log error
       res.status(err.status || 500); // Set status code
        res.json({ message: err.message }); // Send error response
   }

// Place middleware after routes to catch errors.
   const express =  require('express');
   const app = express();

   // ... (route handlers)

   // Error handling middleware (last)
   app.use(errorHandlerMiddleware);


