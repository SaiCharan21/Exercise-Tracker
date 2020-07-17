const router = require('express').Router();
let Excercise = require('../models/excercise.model')

router.route('/').get((req,res) =>{
    Excercise.find()
    .then(excercises=>res.json(excercises))
    .catch(err=>res.status(400).json('Error'))
})

router.route('/add').post((req,res) => {
    const username = String(req.body.username)
    const description = String(req.body.description)
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date
    });

    newExcercise.save()
    .then(()=> res.json('excercise added'))
    .catch(err=>res.status(400).json('Error'))
})

router.route('/:id').get((req,res) => {
    Excercise.findById(req.params.id)
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('Error'))
})

router.route('/:id').delete((req,res) => {
    Excercise.findById(req.params.id)
    .then(excercise => res.json('excercise deleted'))
    .catch(err => res.status(400).json('Error'))
})

router.route('/update/:id').post((req,res) => {
    Excercise.findById(req.params.id)
    .then(excercise => {
        excercise.username = req.body.username
        excercise.description = req.body.description
        excercise.duration = Number(req.body.duration)
        excercise.date = Date.parse(req.body.date)

        excercise.save()
        .then(() => res.json("updated"))
        .catch(err => res.status(400).json('Error'))
    })
    .catch(err => res.status(400).json('Error'))
})

router.route('/:id').get((req,res) => {
    Excercise.findById(req.params.id)
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('Error'))
})

module.exports =router