require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var session = require("express-session");

var db = require("./models");

// Passport strategy;
passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  }
))

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user instances to and from the session (optional);
passport.serializeUser( (User, done) => {
  done(null, User.id);
});

passport.deserializeUser( (id, done) =>{
  User.findById(id, (err, user) => {
    done(err, user);
  });
});


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then( () => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
