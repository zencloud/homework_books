/// Express App Routing

// Get the modules
//const db = require('./models');
const axios = require('axios');

// App Routes
module.exports = (app) => {

    app.get("/api/books/", (req, res) => {

        // Pull Books
        axios.get("https://www.googleapis.com/books/v1/volumes?q=batman")
            .then(function(apiData) {

                let result = apiData.data.items;
                let listNames = [];
                result.forEach((book) => {
                    listNames.push(book.volumeInfo.title);
                });
                res.send(listNames);
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