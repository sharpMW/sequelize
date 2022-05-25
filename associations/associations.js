const User = require('../models/userModel');
const Car = require('../models/carModel');
const House = require('../models/houseModel');
const { DataTypes } = require('sequelize');

User.associate = (models)=>{
    User.hasMany(models.cars, {
        foreignKey: {
            name: "User_id",
            type: DataTypes.INTEGER,
            allowNull: false 
        }
    })
    User.hasOne(models.houses, {
        foreignKey: {
            name: "User_id",
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
};

Car.associate = (models)=>{
    Car.belongsTo(models.users, {
        foreignKey: {
            name: "Car_id",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        constraints: false
    })
};

House.associate = (models)=>{
    House.belongsTo(models.users, {
        foreignKey: {
            name: "House_id",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        constraints: false
    })
}
module.exports = User.associate, House.associate, Car.associate;
