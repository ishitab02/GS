var express = require('express');
var router = express.Router();

const Article = require('../models/articleModel')


router.get('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const article = await Article.findById(id);
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/', async(req, res) =>{
    try {    
        const filter = {};
        if (req.query.user) filter.createdBy = req.query.user
        const article = await Article.find(filter);
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async(req, res) => {
    try {
        const article = await Article.create(req.body)
        res.status(200).json(article);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const article = await Article.findByIdAndUpdate(id, req.body);
        // we cannot find any article in database
        if(!article){
            return res.status(404).json({message: `cannot find any article with ID ${id}`})
        }
        const updatedarticle = await Article.findById(id);
        res.status(200).json(updatedarticle);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const article = await Article.findByIdAndDelete(id);
        if(!article){
            return res.status(404).json({message: `cannot find any article with ID ${id}`})
        }
        res.status(200).json(article);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
