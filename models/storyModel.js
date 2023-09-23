const mongoose = require('mongoose')

// {
//     "storyTitle": "Where there is a will, there is a way",
//     "storyContent": [
//         {
//             "level": "1",
//             "content": "A crow was thirsty",
//             "score": 10
//         },
//         {
//             "level": "2",
//             "content": "He saw a pot with water",
//             "score": 20
//         },
//         {
//             "level": "3",
//             "content": "But the water was very less",
//             "score": 30
//         },
//         {
//             "level": "4",
//             "content": "He saw stones lying nearby",
//             "score": 40
//         },
//         {
//          "level": "5",
//         "content": "Hepicked them and started filling them in pot",
//         "score": 50   
//         },
//         {
//          "level": "6",
//         "content": "The water rose and he can finally drink it",
//         "score": 60   
//         }
//     ] 
// }

const storySchema = mongoose.Schema(
    {
        storyTitle: {
            type: String,
            required: [true, "Please enter story title"]
        },
        storyContent:  {
            type: Array,
            required: [true, "Please enter content"]
        },
        currentHighScore : {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


const story = mongoose.model('story', storySchema);

module.exports = story;