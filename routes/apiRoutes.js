var db = require("../models");
var passport = require("../config/passport");

// multer package;
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

// eslint-disable-next-line no-unused-vars
const { User, Post } = db;

module.exports = app => {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    console.log("successful login!!!");
    console.log(req.user);
    res.json("/accountpage");
  });

  app.get("/accountpage", (req, res) => {
    // let currentUser = req.user.id
    // console.log("user id is ", currentUser)
    // Posts.findAll({
    //   where: {
    //     id: currentUser
    //   }
    // }).then(dbPosts => {
    //   let thisPost = dbPosts.dataValues;
    //   console.log(thisPost);
    //   res.render("accountpage", {
    //     Posts: thisPost
    //   });
    // });
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
    res.status(200).json("/postblock");
    db.Post.create({
      name: req.body.name,
      review: req.body.review,
      picture: req.file.path,
      price: req.body.price,
      brand: req.body.brand,
      url: req.body.url,
      CategoryId: req.body.Category,
      UserId: req.user.id
    }).then(function() {
      res.status(200);
    });
  });
  app.delete("/accountdelete", (req, res) => {
    console.log("deleting user");
    let deletedUser = req.user;
    User.destroy({
      where: {
        id: deletedUser.id
      }
    }).then(() => {
      res.end();
    });
  });
  app.put("/api/update", (req, res) => {
    console.log("foof");
    res.status(200).json("/accountSetup");
    db.User.update(
      { name: req.body.name },
      { returning: true, where: { id: req.user.id } }
    ).then(function() {
      res.status(200);
    });
  });

  app.get("/api/category", function(req, res) {
    db.Category.findAll({}).then(function(dbcategory) {
      res.json(dbcategory);
    });
  });
  // Delete an example by id
  // Check for user exists
  app.get("/api/usercheck", (req, res) => {
    console.log("Usercheck route successful");
    let checkedUser = req.user;
    console.log(checkedUser);
    res.send(checkedUser);
  });
};
