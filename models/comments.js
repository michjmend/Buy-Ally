module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    like: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Comments.associate = models => {
    Comments.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comments;
};
