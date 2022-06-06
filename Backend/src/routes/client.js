const express = require('express')
const clientSchema = require("../models/client");

const router = express.Router();


router.post('/client',(req,res) => {
    const clients = clientSchema(req.body);
    clients
     .save()
     .then((data) => res.json(data))
     .catch((e) => res.json({message: e}))
})

router.post('/client/:id',(req,res) => {
    const clients = clientSchema(req.body);
    clients
     .save()
     .then((data) => res.json(data))
     .catch((e) => res.json({message: e}))
})

router.get('/client',(req,res) => {
    clientSchema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})

router.get('/client/:id',(req,res) => {
    const { id } = req.params
    clientSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})

router.put('/client/:id',(req,res) => {

    const { id } =req.params;

    const { name, email, cellphone, address } = req.body;

    clientSchema
    .updateOne({ _id:id},{ $set:{name, email, cellphone, address}})
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})

router.delete('/client/:id',(req,res) => {
    const { id } =req.params;
    clientSchema
    .remove({ _id:id})
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})


module.exports = router;