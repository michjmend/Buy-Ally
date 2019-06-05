module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    // Giving the Author model a name of type STRING
    categoryname: DataTypes.STRING(50)
  });

  Category.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Category.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Category;
};
