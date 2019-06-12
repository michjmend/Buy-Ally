var db = require("../models");
var passport = require("../config/passport");

// multer package;
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

const { User, Post } = db;

module.exports = app => {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    console.log("successful login!!!");
    console.log(req.user);
    res.json("/accountpage");
  });

  app.get("/accountpage", (req, res) => {
    res.render("accountpage");
  });

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
  // app.get("/api/posts", upload.single("postPicture"), (req, res) => {
  //   db.Post.findAll({}).then(dbExamples => {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  // will only try to parse one file with "single";
  app.post("/api/product", upload.single("productImage"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    console.log(req.body.name);
    console.log("this is the review", req.body.review);
    res.status(200).json("/postblock");
    Post.create({
      name: req.body.name,
      review: req.body.review,
      picture: req.file.path,
      price: req.body.price,
      brand: req.body.brand,
      url: req.body.url,
      CategoryId: req.body.Category,
      UserId: 1
    }).then(function() {
      res.status(200);
    });
  });

  app.get("/api/category", function(req, res) {
    db.Category.findAll({}).then(function(dbcategory) {
      res.json(dbcategory);
    });
  });
  // Delete an example by id;
};
