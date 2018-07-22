const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
const morgan = require('morgan');
const router = require("./routes/api");
const passport = require('./passport');
var MongoStore = require('connect-mongo')(session);
const app = express();
const PORT = process.env.PORT || 3001;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use("/api", router);

// Connect to the Mongo DB
mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost:27017/planitdb"), { useNewUrlParser: true });
// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});




