module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Post);
    };

    return User;
};
