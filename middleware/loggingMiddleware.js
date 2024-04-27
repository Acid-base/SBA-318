const express = require('express');
const app = express();

 function  loggingMiddleware(req, res, next) {
    console. log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
}

app.use(loggingMiddleware ); // Apply the middleware function to all routes
app.get('/', (req, res) => { 
  res.send('Hello, World!'); 
});

app.listen(3000, () => {
  console.log('Server  is listening on port 3000!');
});
``` 
