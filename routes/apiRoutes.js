var db = require("../models");
var passport = require("../config/passport");

const { User } = db;

module.exports = app => {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    console.log("successful login!!!");
    res.json("/");
  });

  app.get("/accountpage", (req, res) => {
    res.render("accountpage");
  });

  // app.post(
  //   "/api/login",
  //   passport.authenticate("local", {
  //     successRedirect: "/",
  //     failureRedirect: "/signup"
  //   })
  // );

  // POST route for creating a new User into our database;
  // ========================================
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(dbUser => {
        console.log(dbUser);
        console.log("trying to redirect to the /login page");
        res.json("/login");
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Get all examples
  app.get("/api/posts", (req, res) => {
    db.Post.findAll({}).then(dbExamples => {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", (req, res) => {
    db.Example.create(req.body).then(dbExample => {
      res.json(dbExample);
    });
  });

  // Delete an example by id
};
