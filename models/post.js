module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    picture: {
      type: DataTypes.BLOB
    },
    price: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    }
  });

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Post.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    Post.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };

  return Post;
};
