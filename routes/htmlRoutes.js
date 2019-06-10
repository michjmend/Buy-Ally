var db = require("../models");
// For nesting sets of Operator(Op) to generate more complex conditions in the Where object filter;
// var Sequelize = require("sequelize");
// const Op = Sequelize.Op;
var isAuthenticated = require("../config/middleware/isAuthenticated");
const { Post } = db;

module.exports = app => {
  // Load index page to main handlebar;
  // =======================================
  // Render the login page;
  // ========================================
  app.get("/login", (req, res) => {
    console.log("Fulfilling request to load login page");
    // if (req.user) {
    //   res.render("/users/:username");
    // }
    res.render("login");
  });
  // Render the create new user page;
  // ========================================
  app.get("/signup", (req, res) => {
    res.render("signup");
  });
  // Routing user to their user page after a successful login attempt;
  // ========================================
  app.get("/userProfile", isAuthenticated, (req, res) => {
    res.render("userProfile");
  });

  app.get("/post", (req, res) => {
    res.render("index");
  });

  // postBlock route for post page
  app.get("/postblock", (req, res) => {
    res.render("postblock");
  });

  // Find all ORM to select all Posts from our DB;
  // ========================================
  app.get("/", (req, res) => {
    console.log("/api/products GET route is being hit");
    Post.findAll().then(dbPosts => {
      let jsonPosts = [];
      let recentPosts = dbPosts.slice(-5);
      console.log("Successfully retrieved data from database");
      for (let i = 0; i < recentPosts.length; i++) {
        jsonPosts.push(recentPosts[i].dataValues);
      }
      res.render("index", {
        display: true,
        Posts: jsonPosts
      });
    });
  });
  //should be in apiroutes.js
  app.get("/api/users", (req, res) => {
    console.log("getting all of the users");
    db.User.findAll().then(dbUser => {
      res.json(dbUser);
    });
  });
  // Create ORM for create new instance of our Post model;
  // ========================================
  // app.post("/api/products", (req, res) => {
  //   console.log("/api/products POST route is being hit");
  //   Post.create({
  //     name: req.body.name,
  //     review: req.body.review,
  //     price: req.body.price,
  //     category: req.body.category,
  //     url: req.body.url,
  //     brand: req.body.brand
  //   }).then(post => {
  //     console.log("Successfully created new row in Post table", post);
  //     res.render("view2", { post: post });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
