module.exports = function (sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
   comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    like: {
      type: DataString.FLOAT(10,2),
      allowNull: false
    }

  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comments;
}
