const mongoose = require('mongoose')

// {
//     "quizTitle": "India quiz",
//     "quizContent": [
//         {
//             "level": "1",
//             "question": "What is capital of India?",
//             "options": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
//             "answer": "New Delhi",
//             "score": 10
//         },
//         {
//             "level": "2",
//             "question": "What is national bird of India?",
//             "options": ["Crow", "Swan", "Peacock", "Pegion"],
//             "answer": "Peacock",
//             "score": 20
//         }
//     ] 
// }

const quizSchema = mongoose.Schema(
    {
        quizTitle: {
            type: String,
            required: [true, "Please enter a quiz name"]
        },
        quizContent: {
            type: Array,
            required: [true, "Please enter a quiz content"]
        }
    },
    {
        timestamps: true
    }
)


const quiz = mongoose.model('Quiz', quizSchema);

module.exports = quiz;