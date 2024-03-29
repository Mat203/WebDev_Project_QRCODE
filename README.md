# QR Code Generator

## Database Integration

The MongoDB is used to save all the data about QR-codes. The application connects to a MongoDB database to store and manage data. MongoDB is a popular NoSQL database known for its flexibility and scalability.

## QRCode Model

The QRCode entity represents a QR code generated by the user. It has the following properties:

- `name`: A string that represents the name of the QR code.
- `link`: A string that represents the data encoded in the QR code.
- `important`: A boolean that indicates whether the QR code is marked as important.
- `image`: A string that represents the QR code image in Data URL format.

## Endpoints

Here are some of the endpoints that interact with these entities:

- `POST /generate-qr`: Generates a new QR code. The request body should include the name, link, and important properties.
- `GET /qrcodes`: Returns a list of all QR codes.
- `GET /display-qr/:id`: Returns a specific QR code.
- `POST /update-qr/:id`: Updates a specific QR code. The request body should include the new name and important properties.
- `DELETE /delete-qr/:id`: Deletes a specific QR code.

## Additional Functionalities

### Caching

The application implements caching to store and retrieve data more efficiently. Caching can significantly improve the performance of the application by reducing the load on the database and decreasing the latency for data retrieval.

### Logging

The application includes logging functionality to track and record activities. Logging is crucial for debugging and monitoring the application's behavior. It can provide valuable insights into the application's performance and help identify any issues or anomalies.

### CORS

The application is configured to use Cross-Origin Resource Sharing (CORS). This mechanism allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated.

## Functions

The application includes several functions to handle different operations:

- `findDataHandler(req, res)`: This function handles the retrieval of data structure. It uses caching to improve performance.
- `getAllQRCodes(req, res)`: This function retrieves all QR codes from the database.
- `generateQRCode(req, res)`: This function generates a new QR code and saves it to the database.
- `displayQRCode(req, res)`: This function retrieves a specific QR code from the database and displays it.
- `getQRCodeImage(req, res)`: This function retrieves the image of a specific QR code from the database.
- `deleteQR(req, res)`: This function deletes a specific QR code from the database.
- `updateQRCode(req, res)`: This function updates the details of a specific QR code in the database.
- `getUpdatePage(req, res)`: This function retrieves the details of a specific QR code for updating.

These functions are exported as a module for use in other parts of the application.
