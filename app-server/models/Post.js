const mongoose = require('mongoose'); 
var PostSchema  = new mongoose.Schema({
    content: { 
        type: String,
        required: true,
        trim: true,
        minlength: 1 
    }, 
    created: { 
        type: Date,
        default: Date.now 
    },
    updatedAt: { 
        type: String, 
        default: null
    },
    likes : { type: Number, default: 0 },
    likesObj: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Like'
    }],
    media: { type: String, default: null },
    _creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }, 
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}); 

var Post = mongoose.model('Post', PostSchema); 

module.exports = { Post }; 