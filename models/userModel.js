const Car = require('./carModel');
const House = require('./houseModel');
module.exports=(sequelize, DataTypes)=>{
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        // car_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'cars', //mention the table name as in Postgres
        //         key: 'id'
        //     },
        //     allowNull: false
        // },
        // house_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'houses',
        //         key: 'id'
        //     }
        // }

    },{
        createdAt: false,
        updatedAt: false
    });
    return User;
}
    // const Car = sequelize.define('car', {
    //     car_id: {
    //         type: DataTypes.INTEGER,
    //         autoIncrement: true,
    //         primaryKey: true
    //     },
    //     modelName: {
    //         type: DataTypes.STRING,
    //         allowNull: false,

    //     },
    //     company: {
    //         type: DataTypes.STRING,
    //         allowNull: false
    //     },
    //     price: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false
    //     } 
    // });
    //return {User, Car};    