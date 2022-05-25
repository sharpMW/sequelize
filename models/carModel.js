const House = require('./houseModel');
const User = require('./userModel');
module.exports = (sequelize, DataTypes)=>{
const Car = sequelize.define('car', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        modelName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        User_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users', //mention the table name as in Postgres
                key: 'id'
            },
            allowNull: false
        } 
    },
    {
        createdAt: false,
         updatedAt: false
    }
    );
        return Car;
}
