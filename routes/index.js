/// Express App Routing

// Get the modules
//const db = require('./models');
const axios = require('axios');

// App Routes
module.exports = (app) => {

    app.get("/api/books", (req, res) => {
        console.log("hello");
    });


    // Send to react
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}