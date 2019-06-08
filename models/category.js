module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    // Giving the category model a name of type STRING
    categoryname: DataTypes.STRING(50)
  });

  Category.associate = function(models) {
    // Associating category with Posts
    // When category is deleted, also delete any associated Posts
    Category.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Category;
};
