
// Setup Server Modules
const express = require("express");
const path    = require("path");
const PORT    = process.env.PORT || 3001;
const app     = express();
const mongoose = require('mongoose');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require('./routes')(app);

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/opusdb"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`==> API server now on port ${PORT}!`);
});
