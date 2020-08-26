const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')


// create express app
const app = express();

// Set our port
const port = process.env.PORT || 3003;

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Define a bootstrap endpoint 
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to WAREHOUSE USER ROLE MAGAEMENT SERVICE." });
});

// Appliction endpoints configured with route.js
require('./routes/rolemgmt.routes.js')(app);

// Server start point with port
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});


module.exports = app
