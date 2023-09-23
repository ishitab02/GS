const mongoose = require('mongoose')

//Body Example
// {
//     "title": "Second Article",
//     "content": "The content of my second article",
//     "createdBy": "shreyalahirisp@gmail.com"
// }

const articleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a title"]
        },
        content: {
            type: String,
            required: [true, "Please enter content"]
        },
        createdBy: {
            type: String,
            required: [true],
            default: "System"
        },
        articleImage:
        {
            type: String
        }
    },
    {
        timestamps: true
    }
)


const Article = mongoose.model('Article', articleSchema);

module.exports = Article;