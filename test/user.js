var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/examples", () => {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(() => {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", done => {
    // Add some examples to the db to test with
    db.User.bulkCreate([
      { username: "First", password: "product1" },
      { username: "Second", password: "product2" }
    ]).then(() => {
      // Request the route that returns all examples
      request.get("/api/users").end((err, res) => {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            username: "First",
            password: "product1"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            username: "Second",
            password: "product2"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});

describe("POST /api/examples", () => {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(() => {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should post a user", done => {
    // Add some examples to the db to test with
    db.User.create({ username: "username", password: "password" }).then(() => {
      // Request the route that returns all examples
      request.post("/api/signup").end((err, res) => {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("object")
          .that.includes({
            username: "username",
            password: "password"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
