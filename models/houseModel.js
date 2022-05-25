const User = require('./userModel');
const Car = require('./carModel');
module.exports = (sequelize, DataTypes)=>{
    const House = sequelize.define('house', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
    }, {
           createdAt: false,
            updatedAt: false
    })
    return House;
}