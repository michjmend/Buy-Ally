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

  Post.associate = (models) => {
    Post.belongsTo(models.User);
  };
  
  return Post;
};
