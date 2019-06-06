module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    username: {
      type: DataTypes.STRING(50),
      allowNull : false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

<<<<<<< HEAD
    User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
=======
  //   User.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   User.hasMany(models.Product, {
  //     onDelete: "cascade"
  //   });
  // };
>>>>>>> 5e314664b72ed6c2c7205dab0034b788aa3004c8

  return User;
};
