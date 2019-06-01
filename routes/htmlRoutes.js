var db = require("../models");
// For nesting sets of Operator(Op) to generate more complex conditions in the Where object filter;
const Op = Sequelize.Op;

module.exports = function (app) {

  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // FindAll products where column values match the users filter options;
  app.get("/products/api", function (req, res) {
    db.Product.findAll({
      where: {
        category: req.body.category,
        price: {
          [Op.between]: [req.body.price]
        },
        brand: req.body.brand
      }
    }).then(function (dbProducts) {
      res.render("view1", {
        products: dbProducts
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
