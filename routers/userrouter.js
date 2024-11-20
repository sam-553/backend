const express = require('express');
const Model = require('../models/usermodel')





const router = express.Router();


router.post('/add', (req, res) => {

    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            if(err?.code===11000){
            res.status(500).json({message:'email already registered'})
            }
            
        });
});
router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err);

            res.status(500).json(err)
        });

});
router.put('/update/:id', (req, res) => {
Model.findByIdAndUpdate(req.params.id,req.body)
.then((result) => {
    res.status(200).json(result)
}).catch((err) => {
    console.log(err);

    res.status(500).json(err)
});
});
router.get('/getbyid', (req, res) => {
    res.send('response from user getbyid');
});
module.exports = router