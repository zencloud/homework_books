const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookSchema = new Schema ({
    
    title: {
        type: String,
        default: "Unknown Title"
    },

    authors: {
        type: Array,
        default: ["Unknown Author"]
    },

    imageLink: {
        type: String,
        default: "./imgs/missing_book.png"
    },

    storeLiink: {
        type: String,
        default: "/"
    },

    description: {
        type: String,
        default: "No description available."
    }

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book