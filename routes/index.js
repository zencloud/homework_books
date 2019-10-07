/// Express App Routing

// Get the modules
const axios = require('axios');
const path 	= require('path');
const db 	= require('../models');


// App Routes
module.exports = (app) => {

	/// --- POST: Save Book
	app.post("/api/book/save", (req, res) => {
		db.Book.create(req.body, function(error, info) {
			if (error) { console.log( error ) }
			res.send();
		});
	});

	/// --- GET: Books Saved
	app.get("/api/books/saved", (req, res) => {
		db.Book.find({}, function(error, savedBooks) {
			res.send(savedBooks);
		});
	});

	// Get Random
	app.get("/api/books/random", (req, res) => {

		// Book Search
		axios.get(`https://www.googleapis.com/books/v1/volumes?projection=lite&printType=books&maxResults=20&q=random`)
			.then(function (apiData) {

				let bookArray 	= []

				// Loop items and add info to objects
				apiData.data.items.forEach((book, index) => {
					let bookInfo 	= {}
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
	app.get("/api/book/search/:id", (req, res) => {

		// Book Search
		axios.get(`https://www.googleapis.com/books/v1/volumes?&printType=books&maxResults=20&q=${req.params.id}`)
			.then(function (apiData) {

				let bookArray 	= []

				// Loop items and add info to objects
				apiData.data.items.forEach((book, index) => {
					let bookInfo 	= {}
					bookInfo.title 			= book.volumeInfo.title;
					bookInfo.authors 		= book.volumeInfo.authors;
					bookInfo.description	= book.volumeInfo.description || "No Description"
					if (book.volumeInfo.imageLinks) {
						bookInfo.imageLink		= book.volumeInfo.imageLinks.thumbnail || "./assets/imgs/heart-icons.png";
					} else {
						bookInfo.imageLink = "./imgs/missing_book.png";
					}
					bookInfo.storeLink		= book.volumeInfo.infoLink;
					bookArray.push(bookInfo);
				});
				res.json(bookArray);
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