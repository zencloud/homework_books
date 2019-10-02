/// Express App Routing

// Get the modules
//const db = require('./models');
const axios = require('axios');
const path = require('path');
// App Routes
module.exports = (app) => {


	// Get Random
	// Get searched book
	app.get("/api/books/random", (req, res) => {

		// Book Search
		axios.get(`https://www.googleapis.com/books/v1/volumes?projection=lite&printType=books&maxResults=20&q=random`)
			.then(function (apiData) {

				let bookArray 	= []
				let bookInfo 	= {}

				// Loop items and add info to objects
				apiData.data.items.forEach((book, index) => {
					bookInfo.title 			= book.volumeInfo.title;
					bookInfo.authors 		= book.volumeInfo.authors;
					bookInfo.description	= book.volumeInfo.description;
					bookInfo.imageLink		= book.volumeInfo.imageLinks.thumbnail;
					bookInfo.storeLink		= book.volumeInfo.infoLink;
					bookArray.push(bookInfo);
				});
				res.json(bookArray);
			})
			.catch(function (error) {
				console.log(error);
			})
	});



	// Get searched book
	app.get("/api/books/:q", (req, res) => {

		// Book Search
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.q}`)
			.then(function (apiData) {

				let result = apiData.data.items;
				let listNames = [];
				result.forEach((book) => {
					listNames.push(book.volumeInfo.title);
				});

				res.json(listNames);
			})
			.catch(function (error) {
				console.log(error);
			})
	});

	// Send to react
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "./client/build/index.html"));
	});
}