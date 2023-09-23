var express = require('express');
var router = express.Router();

const User = require('../models/userModel')


router.get('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/', async(req, res) =>{
    try {    
        const filter = {};
        if (req.query.user) filter.createdBy = req.query.user
        const user = await User.find(filter).sort({'quizProgress.score': -1});;

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req, res) => {
    try {
        const user = await User.create(req.body)
        console.log(req.body, user)
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        // we cannot find any user in database
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        const updateduser = await User.findById(id);
        res.status(200).json(updateduser);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;