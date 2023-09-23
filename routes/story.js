var express = require('express');
var router = express.Router();

const Story = require('../models/storyModel')


router.get('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const story = await Story.findById(id);
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/', async(req, res) =>{
    try {    
        const filter = {};
        if (req.query.user) filter.createdBy = req.query.user
        const story = await Story.find(filter);
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req, res) => {
    try {
        const story = await Story.create(req.body)
        res.status(200).json(story);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const story = await Story.findByIdAndUpdate(id, req.body);
        // we cannot find any story in database
        if(!story){
            return res.status(404).json({message: `cannot find any story with ID ${id}`})
        }
        const updatedstory = await Story.findById(id);
        res.status(200).json(updatedstory);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const story = await Story.findByIdAndDelete(id);
        if(!story){
            return res.status(404).json({message: `cannot find any story with ID ${id}`})
        }
        res.status(200).json(story);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
