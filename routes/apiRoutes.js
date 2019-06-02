var db = require("../models");

const { Post } = db;

module.exports = function(app) {
  // POST route for creating a new User into our database;
  // ========================================
  app.post("/api/newuser", (req, res) => {
    console.log("POST route to create a new User instance is hit");
    Post.create({
      username: req.body.username,
      password: req.body.password
    }).then( (dbUser) => {
      console.log("Created a new User into the User table", dbUser.dataValues.username);
      res.status(200).end();
    })
  })


  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
