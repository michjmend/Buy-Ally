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
        // This will add the attribute UserId to Burger;
        // Instances of User will get the accessors getPurchases and setPurchases;
        User.hasMany(models.Burger, {as: 'Purchases', foreignKey: 'purchases_id'}, );
    };

    return User;
};
