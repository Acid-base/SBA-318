const express = require('express');
const app = express();
 const port =  3000;

// Middleware (implement in separate  files later)
// app.use(loggingMiddleware);
// app. use(errorHandlerMiddleware);

// Routes (implement in separate files later)  
// app.use('/api/palette', paletteRoutes);
// ... (other routes for users, posts, comments)

// Start server
app .listen(port, () => console.log(`Server listening on port ${port}`));
