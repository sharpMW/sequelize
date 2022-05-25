const express = require('express');
const router = express.Router();
const db = require('../db')
const User = db.users;
const Car = db.cars;
const House = db.houses;
// to create data
router.post('/create', async (req, res)=>{
    try {
        const user = await User.create(req.body, {include: [Car, House]});
        res.send(user);
    }
    catch(err) {
        res.status(400).send('This is router error; '+ err);
    }
});


// to read a particular data
router.post('/readOneUser', async (req, res)=>{
    try {
        const user = await User.findOne({
            attributes: ["firstName", "lastName"],
            where: {firstName: req.body.firstName, lastName: req.body.lastName}
        });
        res.status(200).send(user);
    }
    catch(err){
        res.send(err);
    }
});


// to read all data
router.get('/readAllUser', async (req, res)=>{
    try {
        const user = await User.findAll();
        res.status(200).send(user);
    }
    catch(err) {
        res.send(err);
    }
});


// to read by primary Key
router.post('/readOneUser/:id', async (req, res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        res.status(200).send(user);
    }
    catch (err){
        res.send(err);
    }
});

// to update data

router.patch('/updateOne/:id', async (req, res)=>{
    try {
        const user = await User.update({
            firstName: req.body.firstName
        }, {
            where: {id: req.params.id}
        });
        res.status(200).send(user);
    }
    catch (err){
        res.send(err);
    }
});

// to delete data
router.delete('/deleteOne/:id', async (req, res)=>{
    try {
        const user = await User.destroy({
            where: {id: req.params.id}
        })
        if (user===0){
            res.status(200).send({message: "User has been deleted", data: user})
        } else {
            res.status(200).send({message: "User deleted", data: user})
        }
    }
    catch (err){
        res.send(err);
    }
})

module.exports = router;
