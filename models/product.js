module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    price: {
      type: DataString.FLOAT(7,2),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING
    }
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User);
  };


  return Product;
};
