module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
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
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    picture: {
      type: DataTypes.BLOB
    },
    url: {
      type: DataTypes.STRING
    }
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Product.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    Product.belongsTo(models.Brand, {
      foreignKey: {
        allowNull: false
      }
    });

    Category.hasMany(models.comments, {
      onDelete: "cascade"
    });

  };

  return Post;
};
