var db = require("../models");
// For nesting sets of Operator(Op) to generate more complex conditions in the Where object filter;
const Op = Sequelize.Op;

const { Post, User } = db;

module.exports = function (app) {
  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: 'Invalid username or password.'
    }
    )
  );

  // Load index page
  app.get("/index", function (req, res) {
    res.render("index");
  });

  app.get("/api/products", function (req, res) {
    Post.findAll({
      where: {
        category: req.body.category,
        price: {
          [Op.between]: [req.body.price]
        },
        brand: req.body.brand
      }
    }).then(function (dbPosts) {
      res.render("view1", {
        Posts: dbPosts
      });
    });
  });

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
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
