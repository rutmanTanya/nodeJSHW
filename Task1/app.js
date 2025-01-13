/*Submitted by: Tanya Rotman, Alex Lapin
Class 48/6
Exercise 1
*/


const express = require('express');
const app = express();
const port = 3000;

// Middleware 1: Console "Hello1"
app.use((req, res, next) => {
    console.log('Hello1');
    next();
});
// Middleware 2: Console "Hello2"
app.use((req, res, next) => {
    console.log('Hello2');
    next();
});

// Route for "/users"
app.get('/users/*', (req, res) => {
    res.send(`
      <html>
        <body>
          <h1>Users</h1>
          <p>This is the /users route!</p>
        </body>
      </html>
    `);
});

// Route for other
app.get('*', (req, res) => {
    res.send(`
      <html>
        <body>
          <h1>Others</h1>
          <p>This is a route other than /users!</p>
        </body>
      </html>
    `);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
