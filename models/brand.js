module.exports = function(sequelize, DataTypes) {
  var Brand = sequelize.define("Brand", {

    brandname: DataTypes.STRING(50)
  });

  Brand.associate = function(models) {

    Brand.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Brand;
};
