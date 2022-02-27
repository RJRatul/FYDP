const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = Schema({
    title: {
        type: String,
    },
    details: {
        type: String,
    },
    
});

const blog = mongoose.model('blogs', blogSchema);
module.exports = blog;