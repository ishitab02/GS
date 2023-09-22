const mongoose = require('mongoose');

const profile_schema = mongoose.Schema({
    email:{
        type: String,
        reuqired: true
    },
    first_name:{
        type: String,
        required: true,
        default: null
    },
    second_name:{
        type: String,
        required: false,
        default: null
    },
    last_name:{
        type: String,
        required: true,
        default: null
    },
    dob:{
        type: Date,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    ph_no:{
        type: Number,
        required: true
    },
    pswd:{
        type: String,
        required: true,
        default: null
    },
    state:{
        type: String,
        required: true,
        default:null
    },
    daily_points:{
        type: Number,
        required: false,
        default:null
    }
})
const Profile = mongoose.model('Profile',profile_schema);

module.exports = Profile;