const express = require('express')
const messageSchema = require("../models/message");

const router = express.Router();


router.post('/message',(req,res) => {
    const message = messageSchema(req.body);
    message
     .save()
     .then((data) => res.json(data))
     .catch((e) => res.json({message: e}))
})

router.post('/message/:id',(req,res) => {
    const message = messageSchema(req.body);
    message
     .save()
     .then((data) => res.json(data))
     .catch((e) => res.json({message: e}))
})

router.get('/message',(req,res) => {
    messageSchema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})

router.get('/messsage/:id',(req,res) => {
    const { id } = req.params
    messageSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})



router.delete('/message/:id',(req,res) => {
    const { id } =req.params;
    messageSchema
    .remove({ _id:id})
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
})


module.exports = router;