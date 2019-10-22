const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const mongoose = require("mongoose")
mongoose.set('useCreateIndex', true);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://spiritbr8ker:yellowisacolor1@ds129098.mlab.com:29098/heroku_80fhghtz"
mongoose.connect(MONGODB_URI);

// Define API routes here
app.use(routes)

  
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});