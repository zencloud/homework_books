/// Express App Routing

// Get the modules
//const db = require('./models');
const axios = require('axios');
const path = require('path');
// App Routes
module.exports = (app) => {


    // Get searched book
    app.get("/api/books/:q", (req, res) => {

        // Book Search
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.q}`)
            .then(function(apiData) {

                let result = apiData.data.items;
                let listNames = [];
                result.forEach((book) => {
                    listNames.push(book.volumeInfo.title);
                });

                res.json(listNames);
            })
            .catch(function(error) {
                console.log(error);
            })
    });

    // Send to react
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}