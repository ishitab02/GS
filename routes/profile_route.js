const Profile = require('../models/profile_model')
const express = require('express')
const {createProfile,getProfiles,getProfile,upProfile,delProfile,upPoints,showBoard} = require('../controllers/profile_controller')

const router = express.Router();

//insert into db
router.post('/profile', createProfile);

//fetch all from db
router.get('/profile', getProfiles);

//fetch by email
router.get('/profile/:id', getProfile);

//update by email
router.put('/profile/:id', upProfile);

//removal by email
router.delete('/profile/:id', delProfile);

//increment daily_points by email
router.put('/daily_points/:id',upPoints);

//fetch leaderboard, limit 5
router.get('/leaderboard', showBoard);

module.exports = router;