const express = require('express');
const router = express.Router();
const db = require('../db');
const Car = db.cars;
router.post('/create', async (req, res)=>{
    try {   
    const car = await Car.create(req.body, {include: [User]});
    res.send({message: "Car has been created",car});
    }
    catch (err) {
        res.status(400).send(err);
    }
});

router.post('/readOne', async (req, res)=>{
    try {
        const car = await Car.findOne({
            where: {modelName: req.body.modelName}
        });
        res.status(200).send(car);
    }
    catch(err){
        res.send(err);
    }
});

router.get('/readAll', async (req, res)=>{
    try {
        const car = await Car.findAll();
        res.status(200).send(car);
    }
    catch(err) {
        res.send(err);
    }
});
module.exports = router;