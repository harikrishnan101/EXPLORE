const mongoose = require('mongoose')


const blogSchema = mongoose.Schema({
    heading: {
        type: String,
        // default:'no heading'
        required: true

    },
    createdAt: {
        type: Date,
        default: new Date()

    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref:"users"
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        require: true
    },
    Image: []
})
const blogs = mongoose.model("blogs", blogSchema)
module.exports = blogs