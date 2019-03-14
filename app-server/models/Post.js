const mongoose = require('mongoose'); 
var PostSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    content: { 
        type: String,
        required: true,
        trim: true,
        minlength: 1 
    }, 
    created: { 
        type: String,
        default: null 
    },
    updatedAt: { 
        type: String, 
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId, 
        require: true
    }
}); 

var Post = mongoose.model('Post', PostSchema); 

module.exports = { Post }; 