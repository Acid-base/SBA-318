
#    SBA 316

This is a web application built with Express  .js for user management, providing features like user registration, login, and profile   management. Additionally, it includes a RESTful API for managing color palettes.

## Technologies Used

*   **Express.js:** A Node.js  web  application framework for building the server and API.
*   **EJS:** A templating engine for dynamically generating HTML views.
*   ** body- parser:** Middleware for parsing incoming request bodies (JSON data).
*   **bcrypt:** A library for securely hashing user passwords.
*   **express-session:** Middleware for managing user sessions and maintaining login state.
*    ** chroma-js:** (Assumed) A library for color manipulation and palette generation.

## Installation and Usage

1.  Clone the repository: `git clone https://github.com/your-username/your-repo  .git`
2.  Install dependencies: `npm install`
3.  Start the server: `node index.js`
4.  Access the application: `http://localhost:3000`

## API Reference

The application provides a RESTful API for managing color palettes:

  ### Create a New Palette

*   **Endpoint:** `POST /api/palette`
*   **Request Body:** A JSON object containing:
    *   `baseColor` (string): The base color in hex format (e.g., "#FF0000").
    *    ` numColors` (integer, optional): The number of colors in the palette (default: 5).
    *   `colorScheme` (string, optional): The color scheme (e.g., "analogous", "complementary", "triad"; default: "analogous").
*    ** Response:**
    *   **Success (201):** Returns a JSON object containing the generated palette with a unique UUID.
    *   **Error (400):** If the request body is invalid, returns an error message.

**Example Request:**

 POST http://localhost:30 00/api/palette
Content-Type: application/json

{
  "baseColor": "#4CAF50",
  "numColors": 7,
  "colorScheme": "triad"
}

**Example Response (Success ):**

{
  "uuid":  "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "palette": ["#4CAF50", "#80FF00 ", "#00FF80", "#0080 FF", "#0000FF", "#8000FF", "#FF0080"]
}

### Get All Palettes

*   **Endpoint:** `GET /api/palette`
*   **Response :**
    *   **Success (200):** Returns  a JSON array containing all saved palettes with their UUIDs and color values.
    *   **Error (500):** If there's an error retrieving palettes, returns an error message.

**Example Request:**

 GET http://localhost:3000/api/palette

**Example Response  (Success):**

[
  {
    "uuid": "a1b2c3d4-e5f6-7890-1234-567 890abcdef",
    "palette": ["#4CAF50", "#80FF 00", "#00FF80", "#0080FF", "#0000FF", "#8000FF", "#FF0080"]
  },
   {
    "uuid": "f0e1d2c3-b4a5- 9876-5432-10fedcba0987",
    "palette": ["#FF6600", "#FF9933", "#FFCC 66", "#FFFF99", "#CCFF99"]
  }
]

###  Get a Palette by UUID

*   **Endpoint:** `GET /api/palette/{uuid}`
*   **Parameters:**
    *   `uuid` (required): The UUID  of the palette to retrieve.
*   **Response:**
    *   **Success (200):** Returns  a JSON object containing the palette with the specified UUID.
    *   **Error (404):** If the palette is not found, returns an error message.

**Example  Request:**

GET http://localhost:3000/api/palette/a1b2c3d4 -e5f6-7890-1234-567890abcdef

**Example Response (Success):**

{
  "uuid": "a1b2c3d4-e5f6-7890-1234-5 67890abcdef",
  "palette": ["#4CAF50", "#80FF00", "#00FF8 0", "#0080FF", "#0000FF", "#8000FF", "#FF0080"
}
### Select a Palette

*   **Endpoint:** `GET /api/palette/{uuid}/select`
*   **Parameters:**
    *   `uuid` (required): The UUID of the palette to select.
*   **Response:**
    *   **Success (200):**  Returns a JSON object containing the selected palette.
    *   **Error (404):** If the palette is not found, returns an error message.

**Example Request:**

GET http://localhost:3000/api/palette/a1b2c3d4-e5 f6-7890-1234-567890abcdef/select

**Example Response (Success):**

{
  "uuid": "a1b2c3d4-e5f6-7890-1234-56 7890abcdef",
  "palette": ["#4CAF50", "#80FF00", "#00FF80", "#0080FF", "#0000FF", "#8000FF", "#FF0080"]
}
###  Get an Individual Color from a Palette

*   **Endpoint:** `GET /api/palette/{uuid}/{colorIndex}`
*   **Parameters:**
    *   `uuid` (required): The UUID of the palette containing the desired color.
    *   `colorIndex` (required): The index  of the color within the palette (starting from 0).
*   **Response:**
    *    **Success (200):** Returns a JSON object containing the color value (hex code).
    *   **Error (404):** If the palette or color index is invalid, returns  an error message.

**Example Request:**

GET http://localhost:3000 /api/palette/a1b2c3d4-e5f6-7890-1234-567890abcdef/2

**Example Response (Success): **

{
  "color": "#00 FF80"
}



## Middleware

*   **`body-parser`:** Parses incoming JSON data in request bodies, making it accessible through `req.body`.
*   **`express-session`:** Manages user sessions, allowing  users to stay logged in and track  their activity.
*   **`loggingMiddleware` (custom):** Logs basic information about incoming requests (method, URL, timestamp) to the console. (See `loggingMiddleware.js`)
*   **`errorHandlerMiddleware` (custom):** Handles errors gracefully,  logging the error and sending a JSON  response with the error message and status code. (See `errorHandler.js`)

## Form Interactions (Assumptions)

The application likely uses HTML forms for user registration, login, and profile management. These forms would submit data to the corresponding API endpoints (e.g., `/ api/users/register`, `/api /users/login`). The front-end code would handle form submissions, send requests to the API, and update the UI based on the API responses.

## Additional Considerations

*   **Input Validation:** Implement robust input validation using libraries like `express-validator` to ensure  data integrity and security.
*   **Authentication and Authorization:** Enhance security by implementing proper authentication (e.g., JWT) and authorization mechanisms to restrict access to sensitive resources.
*   **Database Integration:** Consider using a database (e.g., MongoDB, PostgreSQL) to persistently store user data and color palettes  for scalability and data persistence .
*   **API Documentation:** Provide comprehensive API documentation using tools like Swagger or OpenAPI to facilitate easy integration and usage by developers.
*   **Testing:** Implement unit and integration tests to ensure the application's functionality and reliability.

## Conclusion

This enhanced README provides a clearer understanding  of the  application's features, API, middleware, and potential form interactions. It also suggests further improvements to enhance security, scalability, and developer experience.

  ]
}


### Get an Individual Color from a Palette

*   **Endpoint:** `GET /api/palette/{uuid}/{color Index}`
*   **Parameters:**
    *   `uuid` (required): The UUID of the palette containing the desired color.
    *   `colorIndex` (required):  The index of the color within the palette (starting from 0).
*   **Response:**
    *    **Success (200):** Returns a JSON object containing the color value (hex code).
    *   **Error (404):** If the palette or color index is  invalid, returns an error message.

**Example Request:**

GET http://localhost:3000/api /palette/a1b2c3d4-e5f6-7890-1234-567890abcdef/2

**Example Response (Success):**

{
  "color": "#FF6600"
}



**Additional Considerations :**

*   The routes for these endpoints should be defined in `paletteRoutes.js`.

*   Ensure the responses are formatted as JSON.
*   Implement  thorough error handling using the `errorHandlerMiddleware` defined in `errorHandler.js` to catch and handle any errors gracefully.

*   Explore libraries like `express-validator` for input validation.
*   Consider using a logging middleware to track API usage. (See `loggingMiddleware.js` for example)
 *   Implement API versioning for future updates.

