const { DataTypes} = require('sequelize');
const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true})); //in version 4.28.1 of express body parser is already included in urlencoded method
app.use(express.json());

require('./db');

require('./models/userModel');
const userRouter = require('./routers/userRouter');
app.use('/user', userRouter);

require('./models/carModel');
const carRouter = require('./routers/carRouter');
app.use('/car', carRouter);

require('./models/houseModel');
const houseRouter = require('./routers/houseRouter');
app.use('/house', houseRouter);


app.get('/', (req, res)=>{
    res.send("Hi, This is working");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});