const mongoose = require('mongoose')

// {
//     "name": "Sneha Lahiri",
//     "phone": "7003071463",
//     "email": "snehalahiri09@gmail.com",
//     "password": "sneha",
//     "city": "Kolkata",
//     "state": "West Bengal",
//     "dob": "09-04-2004",
//     "userRole": "admin",
//     "storyProgress": [
//         {
//             "id": "650560ea793507b0fe8f3012",
//             "score": 20,
//             "levelCompleted": 2 
//         }
//     ]
// }

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a user name"]
        },
        phone: {
            type: String,
            required: [true, "Please enter a phone number"]
        },
        email: {
            type: String,
            required: [true, "Please enter a email"]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"]
        },
        city: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            default: ""
        },
        dob: {
            type: String,
            required: [true, "Please enter date of birth"]
        },
        quizProgress: {
            type: Object,
            default: {}
        },
        storyProgress: {
            type: Array,
            default: []
        },
        userRole: {
            type: String
        },
        userImage:
        {
            type: String
        }
    },
    {
        timestamps: true
    }
)


const user = mongoose.model('user', userSchema);

module.exports = user;