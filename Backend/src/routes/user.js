const express = require('express')
const userSchema = require("../models/user");

const router = express.Router();


router.post('/user',(req,res) => {
    const users = userSchema(req.body);
    users
     .save()
     .then((data) => res.json(data))
     .catch((e) => res.json({message: e}))
})


router.get('/user',(req,res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})

router.get('/user/:id',(req,res) => {
    const { id } = req.params
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})

router.put('/user/:id',(req,res) => {

    const { id } =req.params;

    const { name, cellphone, user, password, address } = req.body;
    
    userSchema
    .updateOne({ _id:id},{ $set:{name, cellphone, user, password, address}})
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})

router.delete('/user/:id',(req,res) => {
    const { id } =req.params;
    userSchema
    .remove({ _id:id})
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})


module.exports = router;