var db = require("../models");
// For nesting sets of Operator(Op) to generate more complex conditions in the Where object filter;
const Op = Sequelize.Op;

const { Post, User } = db;

module.exports = (app) => {
    // Load index page to main handlebar;
  // ========================================
  app.get("/", (req, res) => {
    res.render("index");
  });
  // Render the login page;
  // ========================================
  app.get("/login", (req, res) => {
    res.render("login")
  });
  // Handling the login request with the local strategy;
  // The login form is submitted to the server via the POST method from the "login" handlebar;
  // ========================================
  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: 'Invalid username or password.'
    })
  );
  // Find all ORM to select all Posts from our DB;
  // ========================================
  app.get("/api/products", (req, res) => {
    Post.findAll({
      where: {
        category: req.body.category,
        price: {
          [Op.between]: [req.body.price]
        },
        brand: req.body.brand
      }
    }).then((dbPosts) => {
      res.render("view1", {
        Posts: dbPosts
      });
    });
  });
  // Create ORM for create new instance of our Post model;
  // ========================================
  app.post("/api/products", (req, res) => {
    Post.create({
      name: req.body.name,
      review: req.body.review,
      price: req.body.price,
      category: req.body.category,
      url: req.body.url,
      brand: req.body.brand
    }).then((post) => {
      res.render("view2", { post: post })
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then((dbExample) => {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
