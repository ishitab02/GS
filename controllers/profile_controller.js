const Profile = require('../models/profile_model')

const createProfile = async(req,res)=>{
    try{
        const profile = await Profile.create(req.body)
        res.status(200).json(profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const getProfiles = async(req,res)=>{
    try{
        const profiles = await Profile.find({},{"_id":false,"__v":false}).select();
        res.status(200).json(profiles);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const getProfile = async(req,res)=>{
    try{
        const {id} = req.params;
        const profile = await Profile.find({"email":id},{"_id":false,"__v":false});
        res.status(200).json(profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const upProfile = async(req,res)=>{
    try{
        const {id} = req.params;
        const profile = await Profile.findOneAndUpdate({"email":id},req.body);
        if(!profile){
            return res.status(404).json({message: 'could not find profile'})
        }
        const up_profile = await Profile.find({"email":id},{"_id":false,"__v":false});
        res.status(200).json(up_profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const delProfile = async(req,res)=>{
    try{
        const {id} = req.params;
        const profile = await Profile.findOneAndDelete({"email":id},{"_id":false,"__v":false});
        if(!profile){
            return res.status(404).json({message: 'could not find profile'})
        }
        res.status(200).json(profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const upPoints = async(req,res)=>{
    try{
        const {id} = req.params;
        const profile = await Profile.findOneAndUpdate({"email":id},{$inc:{"daily_points":req.body.daily_points}});
        if(!profile){
            return res.status(404).json({message: 'could not find profile'})
        }
        const up_profile = await Profile.find({"email":id},{"_id":false,"__v":false});
        res.status(200).json(up_profile);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

const showBoard = async(req,res)=>{
    try{
        const profiles = await Profile.find({}).sort({"daily_points":-1}).limit(5).select(["first_name","last_name","email","daily_points",{"_id":false}])
        res.status(200).json(profiles);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createProfile,
    getProfiles,
    getProfile,
    upProfile,
    delProfile,
    upPoints,
    showBoard
}

