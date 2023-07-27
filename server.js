// install express, nodemon

// console.log('I am in the express project


const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

// Import the contactRoutes and use it as middleware
const contactRoutes = require("./routes/contactRoutes"); //
app.use('/api/contacts', contactRoutes);

//request Body parser to get the body of the request
app.use(express.json())


app.listen(port, function() {
  console.log('Server running on the port ' + port);
});

