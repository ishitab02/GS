var express = require('express');
var router = express.Router();

const Quiz = require('../models/quizModel')


router.get('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const quiz = await Quiz.findById(id);
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/', async(req, res) =>{
    try {    
        const filter = {};
        if (req.query.user) filter.createdBy = req.query.user
        const quiz = await Quiz.find(filter);
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req, res) => {
    try {
        const quiz = await Quiz.create(req.body)
        res.status(200).json(quiz);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const quiz = await Quiz.findByIdAndUpdate(id, req.body);
        // we cannot find any quiz in database
        if(!quiz){
            return res.status(404).json({message: `cannot find any quiz with ID ${id}`})
        }
        const updatedquiz = await Quiz.findById(id);
        res.status(200).json(updatedquiz);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const quiz = await Quiz.findByIdAndDelete(id);
        if(!quiz){
            return res.status(404).json({message: `cannot find any quiz with ID ${id}`})
        }
        res.status(200).json(quiz);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
