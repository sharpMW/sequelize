const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config')[process.env.NODE_ENV || 'development'];// doubt
//Don't follow this the dialect needs to be specified explicitly
//So, you need to make config folder for that and mention your postgres options' parameter

// const sequelize = new Sequelize('seq', 'sarim', {
//     host: 'localhost',
//     dialect: 'postgres'// pick one of 'mysql','sqlite','postgres','mssql',
//   });

const sequelize = new Sequelize(config.postgres.options);

sequelize
    .authenticate()

    .then(()=>{
        console.log('Connected successfully');
    })
    .catch(()=>{
        console.log('Couldn\'t connect to database')
    });
//doubt
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db.users = require('../models')(sequelize, DataTypes).User;
// db.cars = require('../models')(sequelize, DataTypes).Car; 

db.users = require('../models/userModel')(sequelize, DataTypes);
db.cars = require('../models/carModel')(sequelize, DataTypes);
db.houses = require('../models/houseModel')(sequelize, DataTypes);
db.associations = require('../associations/associations')
sequelize.sync({force: false});

module.exports = db;