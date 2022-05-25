const express = require('express');
const router = express.Router();
const db = require('../db');
const House = db.houses;
router.post('/create', async (req, res)=>{
    try {
    const house = await House.create(req.body, {include: [User]});
    res.send({message: "House has been created", house});
    }
    catch (err) {
        res.status(400).send({message: "this is error: ",err});
    }
});

router.post('/readOne', async (req, res)=>{
    try {
        const house = await House.findOne({
            where: {name: req.body.name}
        });
        res.status(200).send(house);
    }
    catch(err){
        res.send(err);
    }
});

router.get('/readAll', async (req, res)=>{
    try {
        const house = await House.findAll();
        res.status(200).send(house);
    }
    catch(err) {
        res.send(err);
    }
});
module.exports = router;