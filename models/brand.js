module.exports = function(sequelize, DataTypes) {
  var Brand = sequelize.define("Brand", {
    // Giving the Author model a name of type STRING
    brandname: DataTypes.STRING(50)
  });

  Brand.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Brand.hasMany(models.Product, {
      onDelete: "cascade"
    });
  };

  return Brand;
};