// File: /src/config/config.js

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000
};
